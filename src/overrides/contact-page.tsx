import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#fffcf7] text-[#1a0f18]">
      <NavbarShell />
      <div className="border-b border-[#ead8cc] bg-gradient-to-b from-white to-[#fff7f0]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5c4a52] sm:text-base">
            Distribution questions, billing, or editorial timing — send the details and we will route your request through the right lane.
          </p>
        </div>
      </div>
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-16">
        <div className="rounded-3xl border border-[#ead8cc] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-[#5c4a52]">Fields below are for UI demonstration — wire your form handler where your deployment expects it.</p>
          <form className="mt-6 grid gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5c4a52]" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-[#ead8cc] bg-[#fffcf7] px-3 text-sm"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5c4a52]" htmlFor="contact-email">
                Work email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-[#ead8cc] bg-[#fffcf7] px-3 text-sm"
                placeholder="name@company.com"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5c4a52]" htmlFor="contact-phone">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#ead8cc] bg-[#fffcf7] px-3 text-sm"
                  placeholder="Optional"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5c4a52]" htmlFor="contact-subject">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="mt-1.5 h-11 w-full rounded-xl border border-[#ead8cc] bg-[#fffcf7] px-3 text-sm"
                  defaultValue="general"
                >
                  <option value="general">General question</option>
                  <option value="distribution">Distribution &amp; reach</option>
                  <option value="billing">Billing &amp; plan change</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5c4a52]" htmlFor="contact-body">
                Message
              </label>
              <textarea
                id="contact-body"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-2xl border border-[#ead8cc] bg-[#fffcf7] px-3 py-2.5 text-sm"
                placeholder="What do you need help with?"
              />
            </div>
            <button
              type="button"
              className="h-12 w-full rounded-full bg-gradient-to-r from-[#640D5F] to-[#D91656] text-sm font-bold text-white shadow-md hover:opacity-95"
            >
              Submit now
            </button>
          </form>
        </div>
        <aside className="space-y-5">
          <div className="rounded-3xl border border-[#ead8cc] bg-gradient-to-b from-white to-[#fff5eb] p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#640D5F]">Phone hours</h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-[#3f3438]">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#EB5B00]" />
              Monday–Friday · 8:30am–5:00pm (your local business hours)
            </p>
          </div>
          <div className="rounded-3xl border border-[#ead8cc] bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#640D5F]">Email</h3>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-[#D91656]" />
              <a href={`mailto:hello@${SITE_CONFIG.domain}`} className="font-medium text-[#640D5F] hover:underline">
                hello@{SITE_CONFIG.domain}
              </a>
            </p>
            <p className="mt-2 text-xs text-[#5c4a52]">Use the email associated with your account for the fastest response on live releases.</p>
          </div>
          <div className="rounded-3xl border border-[#ead8cc] bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#640D5F]">Mailing</h3>
            <p className="mt-3 flex gap-2 text-sm text-[#3f3438]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EB5B00]" />
              <span>Business correspondence only — your operations address can be set in the panel for outgoing materials.</span>
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#3f3438]">
              <Phone className="h-4 w-4 text-[#640D5F]" />
              <span>Add your contact number in the panel; we display the line you provide.</span>
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-[#EB5B00]/50 bg-[#fff8f0] p-4 text-sm text-[#5c4a52]">
            <Link href="/help" className="font-semibold text-[#D91656] hover:underline">
              Browse FAQs
            </Link>
            <span> for turnaround times, file formats, and what belongs in a wire-ready release.</span>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
