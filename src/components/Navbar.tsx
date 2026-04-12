import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const routes: ReadonlyArray<{ path: string; key: string; isAnchor?: boolean }> = [
  { path: "/", key: "home" },
  { path: "/education", key: "education" },
  { path: "/experience", key: "workExperience" },
  { path: "/research", key: "research" },
  { path: "/projects", key: "projects" },
  { path: "/publications", key: "publications" },
];

function navClassName({ isActive }: { isActive: boolean }): string {
  return `px-3 py-1 text-sm transition-colors ${
    isActive
      ? "text-[#5BC0DE]"
      : "text-gray-600 hover:text-[#5BC0DE]"
  }`;
}

function StyledTitle() {
  return (
    <span className="font-serif text-2xl tracking-tight">
      <span className="text-[#5BC0DE] text-[1.6em] leading-none font-medium">J</span>
      <span className="text-gray-700">immy</span>
      <span className="inline-block w-2" />
      <span className="text-[#5BC0DE] text-[1.6em] leading-none font-medium">H</span>
      <span className="text-gray-700">ou</span>
    </span>
  );
}

export default function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  const closeMobile = () => setMobileOpen(false);

  const langLabel = i18n.language === "en" ? "中文" : "EN";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      {/* Top row — title centered, lang button absolute right */}
      <div className="relative flex items-center justify-center py-3">
        <NavLink
          to="/"
          onClick={closeMobile}
          className="hover:opacity-80 transition-opacity"
        >
          <StyledTitle />
        </NavLink>

        {/* Language toggle — always top-right */}
        <button
          type="button"
          onClick={toggleLang}
          className="absolute right-4 sm:right-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 hover:bg-[#5BC0DE] hover:text-white transition-colors"
        >
          <HiOutlineGlobeAlt className="w-3.5 h-3.5" />
          {langLabel}
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="absolute left-4 p-1.5 text-gray-600 hover:text-[#5BC0DE] lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Menu"
        >
          {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Bottom row — nav links centered (desktop) */}
      <div className="hidden lg:flex items-center justify-center gap-1 pb-3">
        {routes.map((r) =>
          r.isAnchor ? (
            <a
              key={r.path}
              href={r.path}
              className="px-3 py-1 text-sm transition-colors text-gray-600 hover:text-[#5BC0DE]"
            >
              {t(`nav.${r.key}`)}
            </a>
          ) : (
            <NavLink key={r.path} to={r.path} className={navClassName} end={r.path === "/"}>
              {t(`nav.${r.key}`)}
            </NavLink>
          ),
        )}
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="flex flex-col items-center px-4 py-3 gap-0.5">
            {routes.map((r) =>
              r.isAnchor ? (
                <a
                  key={r.path}
                  href={r.path}
                  onClick={closeMobile}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-[#5BC0DE]"
                >
                  {t(`nav.${r.key}`)}
                </a>
              ) : (
                <NavLink
                  key={r.path}
                  to={r.path}
                  end={r.path === "/"}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm ${
                      isActive ? "text-[#5BC0DE]" : "text-gray-600 hover:text-[#5BC0DE]"
                    }`
                  }
                >
                  {t(`nav.${r.key}`)}
                </NavLink>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
