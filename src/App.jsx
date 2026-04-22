import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Approche from './pages/Approche';
import useReveal from './hooks/useReveal';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target is mounted
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
  // Reset reveal state on route change so new sections animate
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('is-visible');
    });
  }, [pathname]);
  useReveal([pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <RevealManager />
      <div className="bg-white text-ink-900 antialiased selection:bg-ink-900 selection:text-white">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/approche" element={<Approche />} />
            <Route path="*" element={<Accueil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
