"use client";

import { media } from "@/lib/media";
import { bookingHref, site } from "@/lib/site";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

type BookingModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null,
);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}

const SERVICE_OPTIONS = [
  "Haircut",
  "Haircut & beard trim",
  "Haircut — long hair",
  "Buzzcut",
  "Back & sides",
  "Blowout",
  "Beard trim",
  "Straight razor shave",
  "Color — short / medium / long",
  "Other / not sure",
] as const;

function BookingModalDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) {
      void v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [open, onClose]);

  if (!open) return null;

  const square = bookingHref();
  const hasSquare = square.startsWith("http");

  return (
    <div
      data-pd-modal-scroll
      className="fixed inset-0 z-[100] flex max-h-dvh items-end justify-center overflow-y-auto overflow-x-hidden overscroll-contain p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Close booking form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] flex min-h-0 w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-2xl max-h-[min(92dvh,880px)] sm:max-h-[90dvh] lg:max-w-5xl lg:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-[102] flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-card/95 text-cream shadow-sm transition hover:border-gold hover:text-gold"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative aspect-video w-full shrink-0 bg-black lg:aspect-auto lg:w-[42%] lg:min-h-[320px]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            poster={media.shopWide}
          >
            <source src={media.promoVideo} type="video/mp4" />
          </video>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"
            aria-hidden
          />
          <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/95 drop-shadow lg:bottom-8 lg:left-6 lg:right-6">
            {site.shortName} · {site.addressLine1}
          </p>
        </div>

        <div
          data-pd-modal-scroll
          className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain p-6 sm:p-8 lg:max-w-[58%]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Request a chair
          </p>
          <h2
            id={titleId}
            className="mt-2 font-serif text-2xl font-semibold text-cream sm:text-3xl"
          >
            Tell us what you need—we will follow up fast
          </h2>
          <p className="mt-2 text-sm text-muted-fg">
            Submit opens your email app with this message to{" "}
            <span className="font-medium text-cream">{site.email}</span>. Prefer
            Square? Use the link below.
          </p>

          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") ?? "").trim();
              const email = String(fd.get("email") ?? "").trim();
              const phone = String(fd.get("phone") ?? "").trim();
              const service = String(fd.get("service") ?? "").trim();
              const message = String(fd.get("message") ?? "").trim();
              const subject = encodeURIComponent(
                `Booking request — ${name || "Pretty Dapper"}`,
              );
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
              );
              window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
              onClose();
            }}
          >
            <div>
              <label
                htmlFor="bm-name"
                className="text-xs font-semibold uppercase tracking-wider text-muted-fg"
              >
                Name
              </label>
              <input
                id="bm-name"
                name="name"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-cream outline-none ring-gold/30 focus:border-gold/50 focus:ring-2"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="bm-email"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-fg"
                >
                  Email
                </label>
                <input
                  id="bm-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-cream outline-none ring-gold/30 focus:border-gold/50 focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="bm-phone"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-fg"
                >
                  Phone
                </label>
                <input
                  id="bm-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-cream outline-none ring-gold/30 focus:border-gold/50 focus:ring-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bm-service"
                className="text-xs font-semibold uppercase tracking-wider text-muted-fg"
              >
                Service
              </label>
              <select
                id="bm-service"
                name="service"
                required
                className="mt-1.5 w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-cream outline-none ring-gold/30 focus:border-gold/50 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="bm-message"
                className="text-xs font-semibold uppercase tracking-wider text-muted-fg"
              >
                Preferred days / times
              </label>
              <textarea
                id="bm-message"
                name="message"
                rows={3}
                placeholder="e.g. Weekday after 5pm, Saturday morning…"
                className="mt-1.5 w-full resize-none rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-cream outline-none ring-gold/30 placeholder:text-muted-fg/60 focus:border-gold/50 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center border-2 border-gold bg-gold text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold-hover hover:bg-gold-hover"
            >
              Send request via email
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-subtle pt-6 text-sm">
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-gold hover:text-gold-hover"
            >
              {site.phoneDisplay}
            </a>
            {hasSquare ? (
              <Link
                href={square}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cream underline-offset-2 hover:text-gold hover:underline"
              >
                Open Square booking ↗
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => window.clearTimeout(id);
  }, []);

  const value: BookingModalContextValue = {
    open,
    close,
    isOpen,
  };

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModalDialog open={isOpen} onClose={close} />
      <button
        type="button"
        onClick={open}
        className="fixed bottom-5 right-5 z-[90] flex h-14 items-center gap-2 rounded-full border-2 border-gold bg-gold px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-stone-900/20 transition hover:border-gold-hover hover:bg-gold-hover sm:bottom-8 sm:right-8"
        aria-label="Open booking form"
      >
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7" />
        </svg>
        Book
      </button>
    </BookingModalContext.Provider>
  );
}

const variantClass: Record<
  "primary" | "outline" | "ghost" | "link" | "compact",
  string
> = {
  primary:
    "inline-flex h-12 items-center justify-center border-2 border-gold bg-gold px-6 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold-hover hover:bg-gold-hover disabled:opacity-50",
  outline:
    "inline-flex h-12 items-center justify-center border border-border-subtle bg-card px-6 text-xs font-bold uppercase tracking-[0.12em] text-cream shadow-sm transition-colors hover:border-gold/50",
  ghost:
    "inline-flex h-11 items-center justify-center rounded-lg border border-border-subtle bg-background/80 px-4 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur-sm transition hover:border-gold/40",
  link: "text-sm font-semibold text-gold underline-offset-4 hover:underline",
  compact:
    "inline-flex h-10 items-center justify-center rounded-md border border-gold/40 bg-gold/10 px-4 text-xs font-bold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-white",
};

export function BookModalTrigger({
  variant = "primary",
  className = "",
  children,
  onOpen,
}: {
  variant?: keyof typeof variantClass;
  className?: string;
  children: ReactNode;
  /** Runs right before the modal opens (e.g. close mobile nav). */
  onOpen?: () => void;
}) {
  const { open } = useBookingModal();
  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        open();
      }}
      className={`${variantClass[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
