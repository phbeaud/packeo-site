import { createContext, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { translations } from './translations';

const I18nContext = createContext({
  lang: 'fr',
  t: translations.fr,
});

export function I18nProvider({ lang, children }) {
  const validLang = ['fr', 'en'].includes(lang) ? lang : 'fr';

  useEffect(() => {
    document.documentElement.lang = validLang === 'fr' ? 'fr-CA' : 'en-CA';
  }, [validLang]);

  return (
    <I18nContext.Provider value={{ lang: validLang, t: translations[validLang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  return useContext(I18nContext);
}

/**
 * <LangLink to="/produits"> automatically becomes /:lang/produits
 * preserving the active language.
 */
export function LangLink({ to, ...rest }) {
  const { lang = 'fr' } = useParams();
  const safe = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const path = to.startsWith('#')
    ? `/${safe}${to}`
    : to === '/'
      ? `/${safe}`
      : `/${safe}${to}`;
  return <Link to={path} {...rest} />;
}

/**
 * Build a path keeping the active language. Useful for non-Link cases.
 */
export function useLangPath() {
  const { lang = 'fr' } = useParams();
  const safe = ['fr', 'en'].includes(lang) ? lang : 'fr';
  return (path) => {
    if (path.startsWith('#')) return `/${safe}${path}`;
    if (path === '/') return `/${safe}`;
    return `/${safe}${path}`;
  };
}
