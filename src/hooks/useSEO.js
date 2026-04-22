import { useEffect } from 'react';

const SITE_URL = 'https://phbeaud.github.io/packeo-site';
const DEFAULT_IMAGE = `${SITE_URL}/images/produits/reduire-sur-emballage.jpg`;

/**
 * Per-page SEO hook — updates title, meta description, Open Graph,
 * Twitter Card, and canonical tags dynamically.
 */
export default function useSEO({ title, description, image, path, keywords }) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path || ''}`;
    const imgUrl = image || DEFAULT_IMAGE;

    // Title
    if (title) document.title = title;

    // Standard meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Open Graph (Facebook, LinkedIn, Slack, iMessage...)
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', imgUrl, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:locale', 'fr_CA', 'property');
    setMeta('og:site_name', 'Packeo', 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', imgUrl);

    // Canonical
    setCanonical(fullUrl);
  }, [title, description, image, path, keywords]);
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
