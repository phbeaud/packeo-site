import { useEffect } from 'react';

const SITE_URL = 'https://packeo.ca';
const DEFAULT_IMAGE = `${SITE_URL}/images/produits/reduire-sur-emballage.jpg`;
const BREADCRUMB_ID = 'packeo-breadcrumb-jsonld';

/**
 * Per-page SEO hook — updates title, meta description, Open Graph,
 * Twitter Card, canonical, hreflang and BreadcrumbList JSON-LD.
 */
export default function useSEO({
  title,
  description,
  image,
  path,
  keywords,
  lang = 'fr',
  breadcrumbs,
}) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path || ''}`;
    const imgUrl = image || DEFAULT_IMAGE;
    const ogLocale = lang === 'en' ? 'en_CA' : 'fr_CA';

    if (title) document.title = title;

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', imgUrl, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:locale', ogLocale, 'property');
    setMeta('og:site_name', 'Packeo', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', imgUrl);

    setCanonical(fullUrl);

    if (path) {
      const stripped = path.replace(/^\/(fr|en)/, '');
      setHreflang('fr-ca', `${SITE_URL}/fr${stripped}`);
      setHreflang('en-ca', `${SITE_URL}/en${stripped}`);
      setHreflang('x-default', `${SITE_URL}/fr${stripped}`);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      setBreadcrumbJsonLd(breadcrumbs);
    }
  }, [title, description, image, path, keywords, lang, breadcrumbs]);
}

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setHreflang(lang, url) {
  let el = document.head.querySelector(
    `link[rel="alternate"][hreflang="${lang}"]`
  );
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'alternate');
    el.setAttribute('hreflang', lang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setBreadcrumbJsonLd(crumbs) {
  let el = document.getElementById(BREADCRUMB_ID);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = BREADCRUMB_ID;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  });
}
