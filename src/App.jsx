import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { NAV_ITEMS, WHATSAPP_LINK } from "./siteContent";

function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header navItems={NAV_ITEMS} />
      <main>
        <Outlet />
      </main>
      <Footer navItems={NAV_ITEMS} whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
