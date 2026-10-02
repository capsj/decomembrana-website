import { useEffect, useState } from "react";

const assetPathPrefix = "/assets";
const imgHero = `${assetPathPrefix}/0addd.png`;
const imgHero1 = `${assetPathPrefix}/e9166.png`;
const imgRectangle = `${assetPathPrefix}/55989.png`;
const imgRectangle1 = `${assetPathPrefix}/845a3.png`;
const imgRectangle2 = `${assetPathPrefix}/3e8f5.png`;
const imgRectangle3 = `${assetPathPrefix}/ebcd2.png`;
const imgRectangle4 = `${assetPathPrefix}/d3369.png`;
const imgRectangle5 = `${assetPathPrefix}/ace34.png`;
const imgRectangle6 = `${assetPathPrefix}/1665d.png`;
const imgGroup = `${assetPathPrefix}/0760d.svg`;
const imgShield = `${assetPathPrefix}/588c3.svg`;
const imgStar = `${assetPathPrefix}/51076.svg`;
const imgZap = `${assetPathPrefix}/d741f.svg`;
const imgClock = `${assetPathPrefix}/a58e8.svg`;
const imgLeaf = `${assetPathPrefix}/02a3a.svg`;
const imgMapPin = `${assetPathPrefix}/a3575.svg`;
const imgGrid = `${assetPathPrefix}/9d710.svg`;
const imgAward = `${assetPathPrefix}/b1731.svg`;
const imgGlobe = `${assetPathPrefix}/b51c0.svg`;
const imgPhone = `${assetPathPrefix}/67559.svg`;
const imgMail = `${assetPathPrefix}/e0632.svg`;
const imgMapPin1 = `${assetPathPrefix}/62daf.svg`;
const imgChevronDown = `${assetPathPrefix}/45d62.svg`;
const imgInstagram = `${assetPathPrefix}/a4242.svg`;
const imgFacebook = `${assetPathPrefix}/03c54.svg`;
const imgLinkedin = `${assetPathPrefix}/101e5.svg`;

const NAV_LINKS = [
  { label: "Inicio", id: "inicio" },
  { label: "Diseños", id: "diseños" },
  { label: "Aplicaciones", id: "aplicaciones" },
  { label: "Garantía", id: "garantía" },
  { label: "Contacto", id: "contacto" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const ratios: Record<string, number> = {};
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios[id] = entry.intersectionRatio;
          const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
          if (best && best[1] > 0) setActive(best[0]);
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "-60px 0px -30% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function App() {
  const sectionIds = NAV_LINKS.map((l) => l.id);
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Sync dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, menuOpen ? 300 : 0);
  };

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="bg-[#f8fafc] dark:bg-[#111111] flex flex-col items-start w-full min-h-screen transition-colors duration-300">

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#111111] focus:text-white dark:focus:bg-white dark:focus:text-[#111111] font-['Inter'] text-sm font-medium">Saltar al contenido</a>

      {/* ── Nav ── */}
      <nav
        className="bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl backdrop-saturate-150 border-black/5 dark:border-white/[0.06] border-b flex h-[64px] items-center justify-between px-5 md:px-[80px] w-full shrink-0 sticky top-0 z-50 transition-colors duration-300"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "inicio")}
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80] rounded-control"
          aria-label="Inicio — Techomax"
        >
          <span className="relative block w-[79px] h-[34px] md:w-[96px] md:h-[41px]">
            <span className="absolute left-0 top-0 flex flex-col items-center w-[685px] h-[296px] origin-top-left scale-[0.115] md:scale-[0.14]">
              <img src={imgGroup} alt="" className="block w-[382.425px] h-[196.137px] max-w-none" />
              <span className="mt-[52px] font-['Lexend_Zetta:Bold'] font-bold text-[83px] leading-[48px] text-[blue] whitespace-nowrap">TECHOMAX</span>
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-[32px] items-center shrink-0" role="list">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                role="listitem"
                onClick={(e) => handleNavClick(e, id)}
                className={[
                  "relative font-['Inter'] font-medium text-sm whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4ade80] rounded-control",
                  isActive
                    ? "text-[#0f172a] dark:text-white"
                    : "text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
                <span
                  className={[
                    "absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-1 h-1 bg-[#4ade80] rounded-full transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0",
                  ].join(" ")}
                  style={{ transformOrigin: "center" }}
                  aria-hidden="true"
                />
              </a>
            );
          })}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
            className="bg-[#111111] dark:bg-white flex items-center px-[16px] py-[7px] rounded-full shrink-0 font-['Inter'] font-medium text-white dark:text-[#111111] text-sm whitespace-nowrap transition-all duration-200 hover:bg-[#4ade80] hover:text-[#0a0f1a] dark:hover:bg-[#4ade80] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]"
          >
            Consultar Ahora
          </a>
        </div>

        {/* Right controls: dark toggle + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
            className="flex items-center justify-center w-9 h-9 rounded-full text-[#64748b] dark:text-[#94a3b8] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
          >
            <span className={`transition-all duration-300 ${dark ? "opacity-100 rotate-0" : "opacity-0 rotate-90 absolute"}`}>
              <SunIcon />
            </span>
            <span className={`transition-all duration-300 ${!dark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 absolute"}`}>
              <MoonIcon />
            </span>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-5 h-[1.5px] bg-[#0f172a] dark:bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#0f172a] dark:bg-white rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#0f172a] dark:bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-[64px] left-0 right-0 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/[0.06] flex flex-col transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}>
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={[
                  "px-6 py-4 font-['Inter'] font-medium text-base transition-colors duration-150",
                  isActive ? "text-[#0f172a] dark:text-white" : "text-[#64748b] dark:text-[#94a3b8]",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
          <div className="p-5">
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="bg-[#111111] dark:bg-white flex items-center justify-center w-full px-[20px] py-[12px] rounded-full font-['Inter'] font-medium text-white dark:text-[#111111] text-sm transition-all duration-200 hover:bg-[#4ade80] hover:text-[#0a0f1a] active:scale-95"
            >
              Consultar Ahora
            </a>
          </div>
        </div>
      </div>

      <main id="main" className="w-full flex flex-col items-start">
      {/* ── Hero ── */}
      <section
        id="inicio"
        className="bg-white flex flex-col justify-end md:justify-center overflow-hidden px-5 md:px-[80px] pb-10 pt-16 md:py-0 relative w-full min-h-[480px] md:h-[620px]"
        aria-label="Bienvenida"
      >
        <img alt="Vista aérea de techo con membrana decorativa" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 md:bg-none md:bg-gradient-to-r md:from-white md:to-[rgba(255,255,255,0)] md:to-1/2 dark:!bg-none dark:!from-transparent" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero1} />
          <div className="absolute bg-gradient-to-l from-[rgba(10,15,26,0)] inset-0 to-[rgba(10,15,26,0.82)]" />
        </div>
        <div className="flex flex-col gap-5 md:gap-[28px] items-start relative w-full md:w-[560px]">
          <div className="bg-[#ecfdf5]/90 border border-[rgba(74,222,128,0.3)] flex items-center px-[12px] py-[5px] rounded-full shrink-0">
            <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase whitespace-nowrap tracking-wider">Deco-Membrana</p>
          </div>
          <div className="flex flex-col gap-[4px] items-start">
            <h1 className="font-['Inter'] font-extrabold text-4xl sm:text-[48px] md:text-[56px] text-white leading-tight">Impermeabilización</h1>
            <span className="font-['Inter'] font-extrabold text-4xl sm:text-[48px] md:text-[56px] text-[#4ade80] leading-tight block">con Diseño</span>
          </div>
          <p className="font-['Inter'] font-normal text-white/80 text-sm md:text-base max-w-[460px] leading-relaxed">
            La primera membrana que además de proteger, transforma las superficies en espacios decorativos. Tecnología premium con terminación estética.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a href="#diseños" onClick={(e) => handleNavClick(e, "diseños")}
              className="bg-[#4ade80] flex items-center px-6 py-3 md:px-[28px] md:py-[14px] rounded-full font-['Inter'] font-bold text-[#0a0f1a] text-sm whitespace-nowrap transition-all duration-200 hover:bg-[#22c55e] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]">
              Ver Diseños
            </a>
            <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}
              className="bg-white/20 backdrop-blur-sm border border-white/40 flex items-center px-6 py-3 md:px-[28px] md:py-[14px] rounded-full font-['Inter'] font-semibold text-white text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/30 hover:shadow-md hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]">
              Solicitar Cotización
            </a>
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <div
        className="bg-white dark:bg-[#1a1a1a] border-[#e2e8f0] dark:border-[#2e2e2e] border-b border-t flex flex-wrap gap-x-6 gap-y-5 items-start justify-between px-5 md:px-[80px] py-6 md:py-[32px] w-full transition-colors duration-300"
        aria-label="Características principales"
      >
        {[
          { icon: imgShield, label: "Impermeable", sub: "Protección total", alt: "Escudo" },
          { icon: imgStar, label: "Decorativa", sub: "Estética premium", alt: "Estrella" },
          { icon: imgZap, label: "Resistente", sub: "Alta dureza superficial", alt: "Rayo" },
          { icon: imgClock, label: "Durable", sub: "+10 años garantizados", alt: "Reloj" },
          { icon: imgLeaf, label: "Ecológica", sub: "Material sustentable", alt: "Hoja" },
        ].map(({ icon, label, sub, alt }) => (
          <div key={label} className="flex gap-3 items-center w-[calc(50%-12px)] sm:w-auto">
            <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex flex-col items-center justify-center rounded-control shrink-0 size-[36px]" aria-hidden="true">
              <img src={icon} alt={alt} className="block size-[18px]" />
            </div>
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-['Inter'] font-bold text-[#0f172a] dark:text-white text-sm whitespace-nowrap">{label}</p>
              <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs whitespace-nowrap">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Designs ── */}
      <section
        id="diseños"
        className="bg-white dark:bg-[#111111] flex flex-col gap-8 md:gap-[48px] items-center px-5 py-10 md:p-[80px] w-full transition-colors duration-300"
        aria-labelledby="designs-heading"
      >
        <div className="flex flex-col gap-3 items-center text-center">
          <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex items-center px-[12px] py-[5px] rounded-full" aria-hidden="true">
            <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">Catálogo</p>
          </div>
          <h2 id="designs-heading" className="font-['Inter'] font-extrabold text-[#0f172a] dark:text-white text-[28px] md:text-[40px]">
            Diseños Disponibles
          </h2>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm md:text-base max-w-md">
            Cuatro terminaciones decorativas que se adaptan a cualquier proyecto
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[20px] w-full" role="list" aria-label="Catálogo de diseños">
          {[
            { img: imgRectangle, badge: "Césped", name: "Césped Natural", desc: "Textura orgánica vegetal" },
            { img: imgRectangle1, badge: "Piedra", name: "Piedra Natural", desc: "Acabado mineral premium" },
            { img: imgRectangle2, badge: "Madera", name: "Madera Natural", desc: "Calidez y textura viva" },
            { img: imgRectangle3, badge: "Ladrillo", name: "Ladrillo Visto", desc: "Estética urbana industrial" },
          ].map(({ img, badge, name, desc }) => (
            <article
              key={name}
              role="listitem"
              className="bg-white dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#2e2e2e] flex flex-col items-start overflow-hidden rounded-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#4ade80] dark:hover:border-[#4ade80] group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
              tabIndex={0}
              aria-label={`${name} — ${desc}`}
            >
              <div className="relative w-full h-[140px] md:h-[200px] overflow-hidden bg-[#f8fafc] dark:bg-[#222222]">
                <img alt={`${name}: ${desc}`} className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-105" src={img} />
                <div className="absolute bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(26,26,26,0.85)] border border-[rgba(74,222,128,0.25)] flex items-center left-[10px] px-[8px] py-[3px] rounded-full top-[10px]">
                  <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">{badge}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] flex flex-col gap-1 items-start p-3 md:p-[16px] w-full">
                <p className="font-['Inter'] font-bold text-[#0f172a] dark:text-white text-sm md:text-sm">{name}</p>
                <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Product info ── */}
      <section
        className="bg-white dark:bg-[#1a1a1a] flex flex-col md:flex-row overflow-hidden w-full transition-colors duration-300"
        aria-labelledby="product-heading"
      >
        <div className="relative w-full md:w-[580px] h-[280px] md:h-[520px] shrink-0 overflow-hidden group bg-[#f8fafc] dark:bg-[#222222]">
          <img alt="Rollo de Deco-Membrana decorativo" className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgRectangle4} />
        </div>
        <div className="flex flex-1 flex-col gap-5 md:gap-[24px] items-start min-w-0 px-5 py-8 md:pl-[64px] md:pr-[80px] md:py-[64px]">
          <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex items-center px-[12px] py-[5px] rounded-full shrink-0" aria-hidden="true">
            <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">Producto</p>
          </div>
          <h2 id="product-heading" className="font-['Inter'] font-extrabold text-[#0f172a] dark:text-white text-2xl md:text-4xl leading-tight">
            Rollos decorativos listos para una nueva categoría de impermeabilización.
          </h2>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">
            DECO-MEMBRANA combina la funcionalidad de la membrana asfáltica con terminaciones visuales premium. Una solución pensada para carreteros, distribuidores, arquitectos y constructoras que buscan diferenciarse.
          </p>
          <div className="flex gap-6 md:gap-[32px] items-start w-full" aria-label="Estadísticas del producto">
            <div className="flex flex-col gap-1 items-start">
              <p className="font-['Inter'] font-extrabold text-[#4ade80] text-2xl md:text-[28px]" aria-label="Más de 10 años de vida útil">10+</p>
              <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs">Años de vida útil</p>
            </div>
            <div className="bg-[#e2e8f0] dark:bg-[#1e293b] h-[40px] md:h-[48px] shrink-0 w-px" aria-hidden="true" />
            <div className="flex flex-col gap-1 items-start">
              <p className="font-['Inter'] font-extrabold text-[#4ade80] text-2xl md:text-[28px]" aria-label="4 terminaciones premium">4</p>
              <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs">Terminaciones premium</p>
            </div>
            <div className="bg-[#e2e8f0] dark:bg-[#1e293b] h-[40px] md:h-[48px] shrink-0 w-px" aria-hidden="true" />
            <div className="flex flex-col gap-1 items-start">
              <p className="font-['Inter'] font-extrabold text-[#4ade80] text-2xl md:text-[28px]" aria-label="100% de estanqueidad garantizada">100%</p>
              <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs">Estanqueidad garantizada</p>
            </div>
          </div>
          <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}
            className="bg-[#4ade80] flex items-center px-6 py-3 md:px-[24px] md:py-[12px] rounded-full shrink-0 font-['Inter'] font-bold text-[#0a0f1a] text-sm whitespace-nowrap transition-all duration-200 hover:bg-[#22c55e] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]">
            Ver más
          </a>
        </div>
      </section>

      {/* ── Applications ── */}
      <section
        id="aplicaciones"
        className="bg-white dark:bg-[#111111] flex flex-col gap-8 md:gap-[48px] items-center px-5 py-10 md:p-[80px] w-full transition-colors duration-300"
        aria-labelledby="apps-heading"
      >
        <div className="flex flex-col gap-3 items-center text-center">
          <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex items-center px-[12px] py-[5px] rounded-full" aria-hidden="true">
            <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">Usos</p>
          </div>
          <h2 id="apps-heading" className="font-['Inter'] font-extrabold text-[#0f172a] dark:text-white text-[28px] md:text-[40px]">Aplicaciones</h2>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm md:text-base max-w-md">
            Ideal para terrazas, techos, balcones, agotes y proyectos arquitectónicos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[24px] w-full" role="list" aria-label="Aplicaciones del producto">
          {[
            { img: imgRectangle5, icon: imgMapPin, iconAlt: "Ubicación", badge: "Aplicación", name: "Ladrillo en Terraza", desc: "Acabado ladrillo visto sobre superficie horizontal con máxima protección hidrófuga." },
            { img: imgRectangle6, icon: imgGrid, iconAlt: "Grilla", badge: "Línea Completa", name: "Línea Completa", desc: "Toda la gama Deco-Membrana disponible para distribuidores y proyectos de gran escala." },
          ].map(({ img, icon, iconAlt, badge, name, desc }) => (
            <article
              key={name}
              role="listitem"
              className="bg-white dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#2e2e2e] flex flex-col items-start overflow-hidden rounded-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#4ade80] dark:hover:border-[#4ade80] group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
              tabIndex={0}
              aria-label={`${name}: ${desc}`}
            >
              <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden">
                <img alt={`${name} — imagen de aplicación`} className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-105" src={img} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#0f172a]" aria-hidden="true" />
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] flex flex-col gap-2 items-start pb-5 pt-4 px-5 md:pb-[24px] md:pt-[20px] md:px-[24px] w-full">
                <div className="flex gap-2 items-center">
                  <img src={icon} alt={iconAlt} className="block size-[14px]" />
                  <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">{badge}</p>
                </div>
                <p className="font-['Inter'] font-bold text-[#0f172a] dark:text-white text-base md:text-lg">{name}</p>
                <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Warranty ── */}
      <section
        id="garantía"
        className="bg-white dark:bg-[#1a1a1a] border-[#e2e8f0] dark:border-[#2e2e2e] border-b border-t flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start px-5 py-10 md:px-[80px] md:py-[72px] w-full transition-colors duration-300"
        aria-labelledby="warranty-heading"
      >
        <div className="flex flex-col gap-5 items-start w-full lg:w-[480px] lg:shrink-0">
          <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex items-center px-[12px] py-[5px] rounded-full shrink-0" aria-hidden="true">
            <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">Garantía</p>
          </div>
          <h2 id="warranty-heading" className="font-['Inter'] font-extrabold text-[#0f172a] dark:text-white text-[28px] md:text-[40px] leading-tight">
            Garantía de<br />Durabilidad
          </h2>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">
            DECO-MEMBRANA es un desarrollo de Rolhas SAS, producido bajo estándares de calidad orientados a la durabilidad, resistencia exterior y estabilidad visual del laminado decorativo.
          </p>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">
            El producto incorpora materiales seleccionados para aplicaciones en techos y superficies exteriores, ofreciendo una terminación estética premium con alta resistencia al intemperie y exposición UV.
          </p>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">
            La garantía cubre defectos técnicos, adherencia superficial, estanqueidad y durabilidad del acabado decorativo bajo condiciones normales de uso e instalación adecuada.
          </p>
          <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}
            className="bg-transparent dark:bg-transparent border border-[#4ade80] flex items-center px-6 py-3 rounded-full shrink-0 font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-sm whitespace-nowrap transition-all duration-200 hover:bg-[#4ade80] hover:text-[#0a0f1a] hover:shadow-md hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]">
            Condiciones de Garantía
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            { stat: "10+", title: "Años de durabilidad", desc: "Garantizado bajo uso normal" },
            { stat: "UV", title: "Resistencia solar", desc: "Protección UV certificada" },
            { stat: "100%", title: "Estanqueidad", desc: "Impermeable total garantizado" },
            { stat: null, title: "Calidad Certificada", desc: "Rolhas SAS — Argentina", icon: imgAward },
          ].map(({ stat, title, desc, icon }) => (
            <div
              key={title}
              className="bg-white dark:bg-[#222222] border border-[#e2e8f0] dark:border-[#2e2e2e] flex flex-col gap-2 items-start p-5 md:p-[28px] rounded-card transition-all duration-300 hover:shadow-lg hover:border-[#4ade80] dark:hover:border-[#4ade80] hover:-translate-y-0.5"
            >
              {stat ? (
                <p className="font-['Inter'] font-extrabold text-[#4ade80] text-4xl md:text-[40px]">{stat}</p>
              ) : (
                <img src={icon} alt="Premio" className="block size-[20px]" />
              )}
              <p className="font-['Inter'] font-semibold text-[#0f172a] dark:text-white text-sm md:text-sm">{title}</p>
              <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contacto"
        className="bg-white dark:bg-[#111111] flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start px-5 py-10 md:p-[80px] w-full transition-colors duration-300"
        aria-labelledby="contact-heading"
      >
        <div className="flex flex-col gap-8 items-start w-full lg:w-[480px] lg:shrink-0">
          <div className="flex flex-col gap-4 items-start">
            <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex items-center px-[12px] py-[5px] rounded-full shrink-0" aria-hidden="true">
              <p className="font-['Inter'] font-semibold text-[#15803d] dark:text-[#4ade80] text-xs uppercase tracking-wider">Contacto</p>
            </div>
            <h2 id="contact-heading" className="font-['Inter'] font-extrabold text-[#0f172a] dark:text-white text-[28px] md:text-4xl leading-tight">
              Solicitá información<br />para tu zona.
            </h2>
            <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm leading-relaxed">
              Recibirá al forma técnica, precios, disponibilidad y condiciones para distribuidores, arquitectos y constructoras.
            </p>
          </div>
          <address className="flex flex-col gap-5 items-start w-full not-italic">
            {[
              { icon: imgGlobe, alt: "Sitio web", text: "www.techomax.com.ar" },
              { icon: imgPhone, alt: "Teléfono", text: "+54 9 11 2187-9069" },
              { icon: imgMail, alt: "Email", text: "techomaxargentina@gmail.com" },
              { icon: imgMapPin1, alt: "Dirección", text: "Aroz 2470 · Berazategui · Buenos Aires · Argentina" },
            ].map(({ icon, alt, text }) => (
              <div key={text} className="flex gap-3 items-center">
                <div className="bg-[#ecfdf5] dark:bg-[#1f2f1f] flex flex-col items-center justify-center rounded-control shrink-0 size-[36px]">
                  <img src={icon} alt={alt} className="block size-[16px]" />
                </div>
                <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm break-all">{text}</p>
              </div>
            ))}
          </address>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#2e2e2e] flex flex-1 flex-col gap-4 items-start min-w-0 p-6 md:p-[40px] rounded-card w-full transition-colors duration-300">
          <h3 className="font-['Inter'] font-bold text-[#0f172a] dark:text-white text-lg">Envianos tu consulta</h3>
          <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-sm">Completá el formulario y te respondemos a la brevedad.</p>
          <form className="flex flex-col gap-4 w-full" aria-label="Formulario de contacto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
                <label htmlFor="nombre" className="font-['Inter'] font-semibold text-[#64748b] dark:text-[#94a3b8] text-xs uppercase tracking-wider">Nombre y Apellido</label>
                <input id="nombre" type="text" placeholder="Tu nombre completo" autoComplete="name"
                  className="bg-white dark:bg-[#222222] border border-[#cbd5e1] dark:border-[#383838] h-[42px] px-[14px] rounded-control w-full font-['Inter'] text-[#0f172a] dark:text-white text-sm placeholder:text-[#94a3b8] dark:placeholder:text-[#475569] transition-colors duration-200 hover:border-[#94a3b8] dark:hover:border-[#555555] focus:border-[#4ade80] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/20" />
              </div>
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
                <label htmlFor="email" className="font-['Inter'] font-semibold text-[#64748b] dark:text-[#94a3b8] text-xs uppercase tracking-wider">Email</label>
                <input id="email" type="email" placeholder="correo@ejemplo.com" autoComplete="email"
                  className="bg-white dark:bg-[#222222] border border-[#cbd5e1] dark:border-[#383838] h-[42px] px-[14px] rounded-control w-full font-['Inter'] text-[#0f172a] dark:text-white text-sm placeholder:text-[#94a3b8] dark:placeholder:text-[#475569] transition-colors duration-200 hover:border-[#94a3b8] dark:hover:border-[#555555] focus:border-[#4ade80] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/20" />
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-start w-full">
              <label htmlFor="telefono" className="font-['Inter'] font-semibold text-[#64748b] dark:text-[#94a3b8] text-xs uppercase tracking-wider">Teléfono / Celular</label>
              <input id="telefono" type="tel" placeholder="+54 9 ..." autoComplete="tel"
                className="bg-white dark:bg-[#222222] border border-[#cbd5e1] dark:border-[#383838] h-[42px] px-[14px] rounded-control w-full font-['Inter'] text-[#0f172a] dark:text-white text-sm placeholder:text-[#94a3b8] dark:placeholder:text-[#475569] transition-colors duration-200 hover:border-[#94a3b8] dark:hover:border-[#555555] focus:border-[#4ade80] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/20" />
            </div>
            <div className="flex flex-col gap-[6px] items-start w-full">
              <label htmlFor="zona" className="font-['Inter'] font-semibold text-[#64748b] dark:text-[#94a3b8] text-xs uppercase tracking-wider">Zona</label>
              <div className="relative w-full">
                <select id="zona" defaultValue=""
                  className="appearance-none bg-white dark:bg-[#222222] border border-[#cbd5e1] dark:border-[#383838] h-[42px] px-[14px] rounded-control w-full font-['Inter'] text-[#94a3b8] dark:text-[#475569] text-sm transition-colors duration-200 hover:border-[#94a3b8] dark:hover:border-[#555555] focus:border-[#4ade80] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/20 cursor-pointer">
                  <option value="" disabled>Provincia / Localidad</option>
                  <option value="buenos-aires">Buenos Aires</option>
                  <option value="caba">Ciudad Autónoma de Buenos Aires</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="santa-fe">Santa Fe</option>
                  <option value="otra">Otra</option>
                </select>
                <img src={imgChevronDown} alt="" aria-hidden="true" className="absolute right-[14px] top-1/2 -translate-y-1/2 block size-[14px] pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-start w-full">
              <label htmlFor="mensaje" className="font-['Inter'] font-semibold text-[#64748b] dark:text-[#94a3b8] text-xs uppercase tracking-wider">Consulta sobre el proyecto o producto</label>
              <textarea id="mensaje" placeholder="Contanos sobre tu proyecto, aplicación o necesidad..." rows={4}
                className="bg-white dark:bg-[#222222] border border-[#cbd5e1] dark:border-[#383838] p-[14px] rounded-control w-full font-['Inter'] text-[#0f172a] dark:text-white text-sm placeholder:text-[#94a3b8] dark:placeholder:text-[#475569] transition-colors duration-200 hover:border-[#94a3b8] dark:hover:border-[#555555] focus:border-[#4ade80] focus:outline-none focus:ring-2 focus:ring-[#4ade80]/20 resize-none" />
            </div>
            <button type="submit"
              className="bg-[#4ade80] flex h-[48px] items-center justify-center rounded-full w-full font-['Inter'] font-bold text-[#0a0f1a] text-sm transition-all duration-200 hover:bg-[#22c55e] hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e] cursor-pointer">
              Primer Contacto
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      </main>

      <footer className="bg-white dark:bg-[#1a1a1a] border-[#e2e8f0] dark:border-[#2e2e2e] border-t flex flex-col sm:flex-row gap-4 items-center justify-between px-5 md:px-[80px] py-5 md:py-[24px] w-full transition-colors duration-300">
        <p className="font-['Inter'] font-normal text-[#64748b] dark:text-[#94a3b8] text-xs text-center sm:text-left">
          DECO-MEMBRANA | Rolhas SAS · Techomax Argentina SAS — Innovación en impermeabilización decorativa
        </p>
        <nav aria-label="Redes sociales" className="flex gap-5 items-center shrink-0">
          {[
            { href: "https://instagram.com", src: imgInstagram, label: "Instagram" },
            { href: "https://facebook.com", src: imgFacebook, label: "Facebook" },
            { href: "https://linkedin.com", src: imgLinkedin, label: "LinkedIn" },
          ].map(({ href, src, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="block transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80] rounded-control">
              <img src={src} alt={label} className="block size-[16px] dark:invert dark:opacity-60" />
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
