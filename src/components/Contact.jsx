import { useState } from 'react';
import { useT } from '../i18n/I18nContext';

export default function Contact() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(
      `${t.contact.form.emailSubject} — ${data.get('entreprise') || ''}`
    );
    const body = encodeURIComponent(
      `${t.contact.form.name}: ${data.get('nom') || ''}\n` +
        `${t.contact.form.company}: ${data.get('entreprise') || ''}\n` +
        `${t.contact.form.email}: ${data.get('email') || ''}\n` +
        `${t.contact.form.phone}: ${data.get('tel') || ''}\n` +
        `${t.contact.form.sector}: ${data.get('secteur') || ''}\n` +
        `${t.contact.form.interest}: ${data.get('interet') || ''}\n\n` +
        `${t.contact.form.message}:\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:approvisionnement@packeo.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="section-label mb-8 reveal">
              <span>{t.contact.eyebrow}</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              {t.contact.titleA}
              <br />
              {t.contact.titleB}
            </h2>
            <p className="reveal mt-10 text-ink-500 text-lg leading-relaxed max-w-md" style={{ transitionDelay: '120ms' }}>
              {t.contact.sub}
            </p>

            <div className="reveal mt-12 space-y-5" style={{ transitionDelay: '220ms' }}>
              <ContactLine label={t.contact.lines.general} value="info@packeo.ca" href="mailto:info@packeo.ca" />
              <ContactLine label={t.contact.lines.supply} value="approvisionnement@packeo.ca" href="mailto:approvisionnement@packeo.ca" />
              <ContactLine label={t.contact.lines.phone} value="+1 (000) 000-0000" href="tel:+10000000000" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            {submitted ? (
              <div className="reveal bg-ink-900 text-white rounded-[6px] p-8 md:p-12 min-h-[560px] flex flex-col justify-center" style={{ transitionDelay: '160ms' }}>
                <div className="w-14 h-14 rounded-full bg-ember/20 border border-ember/40 flex items-center justify-center mb-8">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8.5 14.5L16 6" stroke="#E85D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                  {t.contact.success.title}
                </h3>
                <p className="text-ink-200 text-base md:text-lg leading-relaxed max-w-md mb-10">
                  {t.contact.success.body}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="self-start text-[13px] uppercase tracking-[0.22em] text-ember font-medium hover:text-white transition-colors"
                >
                  {t.contact.success.again}
                </button>
              </div>
            ) : (
              <form className="reveal bg-bone border border-ink-100 rounded-[6px] p-8 md:p-12" style={{ transitionDelay: '160ms' }} onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label={t.contact.form.name} name="nom" required />
                  <Field label={t.contact.form.company} name="entreprise" required />
                  <Field label={t.contact.form.email} name="email" type="email" required />
                  <Field label={t.contact.form.phone} name="tel" type="tel" />
                  <div className="md:col-span-2">
                    <Select label={t.contact.form.sector} name="secteur" options={t.contact.form.sectorOptions} placeholder={t.contact.form.placeholder} />
                  </div>
                  <div className="md:col-span-2">
                    <Select label={t.contact.form.interest} name="interet" options={t.contact.form.interestOptions} placeholder={t.contact.form.placeholder} />
                  </div>
                  <div className="md:col-span-2">
                    <Textarea label={t.contact.form.message} name="message" />
                  </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <p className="text-xs text-ink-400 max-w-sm leading-relaxed">
                    {t.contact.form.confidential}
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-ink-900 text-white text-sm font-medium px-7 py-4 rounded-full hover:bg-ember transition-colors duration-300"
                  >
                    {t.contact.form.submit}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ label, value, href }) {
  return (
    <a href={href} className="group flex items-baseline justify-between border-b border-ink-100 pb-4 hover:border-ink-900 transition-colors">
      <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium">{label}</span>
      <span className="font-display text-lg text-ink-900 tracking-tight group-hover:text-ember transition-colors">{value}</span>
    </a>
  );
}

function Field({ label, name, type = 'text', required }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">
        {label}{required && <span className="text-ember ml-1">*</span>}
      </span>
      <input name={name} type={type} required={required} className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors placeholder:text-ink-300" />
    </label>
  );
}

function Select({ label, name, options, placeholder }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">{label}</span>
      <select name={name} className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors">
        <option value="">{placeholder}</option>
        {options.map((o) => (<option key={o} value={o}>{o}</option>))}
      </select>
    </label>
  );
}

function Textarea({ label, name }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">{label}</span>
      <textarea name={name} rows={4} className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors resize-none" />
    </label>
  );
}
