import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Approche from './pages/Approche';
import useReveal from './hooks/useReveal';
import { I18nProvider } from './i18n/I18nContext';

function detectInitialLang() {
  // Detect browser language for the initial / redirect.
  const browser = (navigator.language || 'fr').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'fr';
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

function RevealManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('is-visible');
    });
  }, [pathname]);
  useReveal([pathname]);
  return null;
}

function LocalizedApp() {
  const { lang } = useParams();
  const validLang = ['fr', 'en'].includes(lang) ? lang : 'fr';

  return (
    <I18nProvider lang={validLang}>
      <ScrollManager />
      <RevealManager />
      <div className="bg-white text-ink-900 antialiased selection:bg-ink-900 selection:text-white">
        <Nav />
        <main>
          <Routes>
            <Route index element={<Accueil />} />
            <Route path="produits" element={<Produits />} />
            <Route path="approche" element={<Approche />} />
            <Route path="*" element={<Accueil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default function App() {
  const initialLang = detectInitialLang();
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${initialLang}`} replace />} />
        <Route path="/:lang/*" element={<LocalizedApp />} />
        <Route path="*" element={<Navigate to={`/${initialLang}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
