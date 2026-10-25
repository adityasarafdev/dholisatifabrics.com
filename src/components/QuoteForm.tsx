"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./QuoteForm.module.css";
import { ProductIcon } from "@/components/ProductIcon";
import {
  OTHER_PRODUCT_SLUG,
  fieldLimits,
  isValidEmail,
  normalizeIndianPhone,
  type QuoteProductOption,
} from "@/lib/quote";

const whatsappNumber = "9661870000";

type QuoteButtonProps = {
  children: ReactNode;
  className?: string;
  /** Fixed product for product pages. The visitor cannot change it. */
  product?: QuoteProductOption;
  /** Dropdown choices when no fixed product is given. */
  productOptions?: QuoteProductOption[];
};

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "phone" | "email" | "product" | "otherProduct" | "message", string>>;

export function QuoteButton({ children, className, product, productOptions = [] }: QuoteButtonProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && (
        <QuoteDialog
          product={product}
          productOptions={productOptions}
          onClose={close}
        />
      )}
    </>
  );
}

function QuoteDialog({
  product,
  productOptions,
  onClose,
}: {
  product?: QuoteProductOption;
  productOptions: QuoteProductOption[];
  onClose: () => void;
}) {
  const formId = useId();
  const [openedAt] = useState(() => Date.now());
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const productSlug = product ? product.slug : selectedSlug;
  const productTitle = product
    ? product.title
    : productOptions.find((p) => p.slug === selectedSlug)?.title;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (get("name").length < 2) nextErrors.name = "Please enter your name.";
    if (!normalizeIndianPhone(get("phone"))) nextErrors.phone = "Please enter a valid 10 digit mobile number.";
    if (!isValidEmail(get("email"))) nextErrors.email = "Please enter a valid email address.";
    if (get("message").length < 3) nextErrors.message = "Please tell us a little about what you need.";
    if (!productSlug) nextErrors.product = "Please choose a product.";
    if (productSlug === OTHER_PRODUCT_SLUG && get("otherProduct").length < 2) {
      nextErrors.otherProduct = "Please tell us which product you need.";
    }
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          phone: get("phone"),
          productSlug,
          otherProduct: get("otherProduct"),
          email: get("email"),
          message: get("message"),
          website: get("website"),
          sourcePath: window.location.pathname,
          elapsedMs: Date.now() - openedAt,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(result.errors ?? {});
        setFormError(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setSubmittedName(get("name").split(" ")[0]);
      setSubmittedEmail(get("email"));
      setStatus("success");
    } catch {
      setFormError("Couldn't connect. Please check your internet and try again.");
      setStatus("error");
    }
  }

  const whatsappText = encodeURIComponent(
    productTitle
      ? `Hi, I just requested a quote for ${productTitle} on your website.`
      : "Hi, I just requested a quote on your website.",
  );

  return createPortal(
    <div className={styles.backdrop} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>
              <ProductIcon name="checkCircle" size={28} />
            </span>
            <h2 id={`${formId}-title`} className={styles.title}>
              Thank you{submittedName ? `, ${submittedName}` : ""}!
            </h2>
            <p className={styles.lead}>
              We&apos;ve received your enquiry{productTitle && productSlug !== OTHER_PRODUCT_SLUG ? ` for ${productTitle}` : ""}.
              Our team will call you back soon, usually the same working day.
            </p>
            {submittedEmail && (
              <p className={styles.copyNote}>
                A copy has been sent to <strong>{submittedEmail}</strong>
              </p>
            )}
            <div className={styles.successActions}>
              <a
                className={styles.secondaryButton}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                Need it faster? WhatsApp us
              </a>
              <button type="button" className={styles.primaryButton} onClick={onClose}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <header className={styles.header}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                Get a quote
              </div>
              <h2 id={`${formId}-title`} className={styles.title}>
                Tell us what you need
              </h2>
              <p className={styles.lead}>
                Share a few details and we&apos;ll get back to you with pricing and options.
              </p>
            </header>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {product ? (
                <div className={styles.lockedProduct}>
                  <Image
                    src={`/products/${product.slug}.jpg`}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.lockedImage}
                  />
                  <div className={styles.lockedText}>
                    <span className={styles.lockedLabel}>Quote for</span>
                    <span className={styles.lockedTitle}>{product.title}</span>
                  </div>
                  <svg className={styles.lockIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </div>
              ) : (
                <Field label="Product" required error={errors.product} htmlFor={`${formId}-product`} full>
                  <select
                    id={`${formId}-product`}
                    className={styles.input}
                    value={selectedSlug}
                    onChange={(e) => setSelectedSlug(e.target.value)}
                    aria-invalid={Boolean(errors.product)}
                  >
                    <option value="" disabled>
                      Choose a product
                    </option>
                    {productOptions.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title}
                      </option>
                    ))}
                    <option value={OTHER_PRODUCT_SLUG}>Other / Multiple products</option>
                  </select>
                </Field>
              )}

              {!product && selectedSlug === OTHER_PRODUCT_SLUG && (
                <Field label="Which product do you need?" required error={errors.otherProduct} htmlFor={`${formId}-other`} full>
                  <input
                    id={`${formId}-other`}
                    name="otherProduct"
                    className={styles.input}
                    maxLength={fieldLimits.otherProduct}
                    placeholder="e.g. Printed jute bags and HDPE rolls"
                    aria-invalid={Boolean(errors.otherProduct)}
                  />
                </Field>
              )}

              <Field label="Your name" required error={errors.name} htmlFor={`${formId}-name`}>
                <input
                  ref={firstFieldRef}
                  id={`${formId}-name`}
                  name="name"
                  className={styles.input}
                  autoComplete="name"
                  maxLength={fieldLimits.name}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>

              <Field label="Mobile number" required error={errors.phone} htmlFor={`${formId}-phone`}>
                <div className={styles.phoneWrap}>
                  <span className={styles.phonePrefix}>+91</span>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    className={`${styles.input} ${styles.phoneInput}`}
                    autoComplete="tel-national"
                    maxLength={fieldLimits.phone}
                    placeholder="98765 43210"
                    aria-invalid={Boolean(errors.phone)}
                  />
                </div>
              </Field>

              <Field label="Email" required error={errors.email} htmlFor={`${formId}-email`} full>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  className={styles.input}
                  autoComplete="email"
                  maxLength={fieldLimits.email}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>

              <Field label="Comments" required error={errors.message} htmlFor={`${formId}-message`} full>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={3}
                  maxLength={fieldLimits.message}
                  aria-invalid={Boolean(errors.message)}
                  placeholder="Quantity, size, colour, printing or anything else we should know"
                />
              </Field>

              <div className={styles.honeypot} aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {formError && (
                <p className={styles.formError} role="alert">
                  {formError}
                </p>
              )}

              <div className={styles.footer}>
                <button type="submit" className={styles.primaryButton} disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Request quote"}
                  {status !== "sending" && <span aria-hidden="true">→</span>}
                </button>
                <p className={styles.privacy}>
                  We&apos;ll only use your details to respond to this enquiry.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

function Field({
  label,
  required,
  error,
  htmlFor,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.field} ${full ? styles.fieldFull : ""}`}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required ? <span className={styles.required}> *</span> : <span className={styles.optional}> (optional)</span>}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
