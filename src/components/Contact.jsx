import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(
      `Demande d'analyse — ${data.get('entreprise') || 'Nouveau prospect'}`
    );
    const body = encodeURIComponent(
      `Nom: ${data.get('nom') || ''}\n` +
        `Entreprise: ${data.get('entreprise') || ''}\n` +
        `Courriel: ${data.get('email') || ''}\n` +
        `Téléphone: ${data.get('tel') || ''}\n` +
        `Secteur: ${data.get('secteur') || ''}\n` +
        `Intérêt: ${data.get('interet') || ''}\n\n` +
        `Message:\n${data.get('message') || ''}`
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
              <span>Contact</span>
            </div>
            <h2 className="reveal font-display font-semibold text-display-lg text-ink-900 tracking-ultra-tight">
              Analysons
              <br />
              votre flux.
            </h2>
            <p
              className="reveal mt-10 text-ink-500 text-lg leading-relaxed max-w-md"
              style={{ transitionDelay: '120ms' }}
            >
              Partagez-nous votre réalité d'approvisionnement. Nous vous revenons
              avec une lecture concrète de votre flux actuel et des leviers
              d'optimisation qui s'appliquent à votre opération.
            </p>

            <div
              className="reveal mt-12 space-y-5"
              style={{ transitionDelay: '220ms' }}
            >
              <ContactLine label="Général" value="info@packeo.ca" href="mailto:info@packeo.ca" />
              <ContactLine label="Approvisionnement" value="approvisionnement@packeo.ca" href="mailto:approvisionnement@packeo.ca" />
              <ContactLine label="Téléphone" value="+1 (000) 000-0000" href="tel:+10000000000" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            {submitted ? (
              <div
                className="reveal bg-ink-900 text-white rounded-[6px] p-8 md:p-12 min-h-[560px] flex flex-col justify-center"
                style={{ transitionDelay: '160ms' }}
              >
                <div className="w-14 h-14 rounded-full bg-ember/20 border border-ember/40 flex items-center justify-center mb-8">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10L8.5 14.5L16 6"
                      stroke="#E85D1F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                  Demande transmise.
                </h3>
                <p className="text-ink-200 text-base md:text-lg leading-relaxed max-w-md mb-10">
                  Votre client courriel s'est ouvert avec votre demande pré-remplie.
                  Une fois envoyée, notre équipe vous revient sous 48 heures avec une
                  première lecture de votre flux.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="self-start text-[13px] uppercase tracking-[0.22em] text-ember font-medium hover:text-white transition-colors"
                >
                  ← Soumettre une autre demande
                </button>
              </div>
            ) : (
              <form
                className="reveal bg-bone border border-ink-100 rounded-[6px] p-8 md:p-12"
                style={{ transitionDelay: '160ms' }}
                onSubmit={onSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Prénom et nom" name="nom" required />
                  <Field label="Entreprise" name="entreprise" required />
                  <Field label="Courriel professionnel" name="email" type="email" required />
                  <Field label="Téléphone" name="tel" type="tel" />
                  <div className="md:col-span-2">
                    <Select
                      label="Secteur d'activité"
                      name="secteur"
                      options={[
                        'Restaurants et foodservice',
                        'Transformation alimentaire',
                        'Industriel et manufacturier',
                        'Autre',
                      ]}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Select
                      label="Ce qui m'intéresse"
                      name="interet"
                      options={[
                        'Comparer mes prix actuels',
                        "Optimiser mon flux d'emballage",
                        'Valider mon modèle actuel',
                        "Recevoir une analyse d'approvisionnement",
                      ]}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Textarea
                      label="Décrivez votre besoin d'approvisionnement"
                      name="message"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <p className="text-xs text-ink-400 max-w-sm leading-relaxed">
                    Vos informations sont confidentielles et utilisées uniquement
                    pour l'analyse de votre demande.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-ink-900 text-white text-sm font-medium px-7 py-4 rounded-full hover:bg-ember transition-colors duration-300"
                  >
                    Recevoir mon analyse
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path
                        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
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
    <a
      href={href}
      className="group flex items-baseline justify-between border-b border-ink-100 pb-4 hover:border-ink-900 transition-colors"
    >
      <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-medium">
        {label}
      </span>
      <span className="font-display text-lg text-ink-900 tracking-tight group-hover:text-ember transition-colors">
        {value}
      </span>
    </a>
  );
}

function Field({ label, name, type = 'text', required }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">
        {label}
        {required && <span className="text-ember ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors placeholder:text-ink-300"
      />
    </label>
  );
}

function Select({ label, name, options }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors"
      >
        <option value="">Sélectionner…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label, name }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-500 font-medium mb-3">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        className="w-full bg-transparent border-b border-ink-200 pb-3 text-ink-900 text-[15px] focus:outline-none focus:border-ink-900 transition-colors resize-none"
      />
    </label>
  );
}
