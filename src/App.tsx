import { useEffect, useRef, useState } from "react";

const assetPathPrefix = "/assets";
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
const DESIGNS = [
  { img: imgRectangle, key: "Césped", name: "Césped Natural", desc: "Textura orgánica vegetal para terrazas que se sienten jardín." },
  { img: imgRectangle1, key: "Piedra", name: "Piedra Natural", desc: "Acabado mineral premium, frío al tacto y sobrio a la vista." },
  { img: imgRectangle2, key: "Madera", name: "Madera Natural", desc: "Calidez y textura viva sin mantenimiento de deck." },
  { img: imgRectangle3, key: "Ladrillo", name: "Ladrillo Visto", desc: "Estética urbana industrial sobre cualquier cubierta." },
];

const FEATURES = [
  { icon: imgShield, label: "Impermeable", sub: "Protección total" },
  { icon: imgStar, label: "Decorativa", sub: "Estética premium" },
  { icon: imgZap, label: "Resistente", sub: "Alta dureza superficial" },
  { icon: imgClock, label: "Durable", sub: "+10 años garantizados" },
  { icon: imgLeaf, label: "Ecológica", sub: "Material sustentable" },
];

const RATE_PER_M2 = 14; // USD aprox. por m² instalado (referencial)

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Roll({ children }: { children: string }) {
  return (
    <span className="roll" aria-hidden="false">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b6b6b] dark:text-[#9a9a9a]" aria-hidden="true">
      {children}
    </p>
  );
}

const btnDark =
  "group inline-flex items-center gap-2 rounded-full bg-[#111111] dark:bg-white px-6 py-3 font-sans text-sm font-medium text-white dark:text-[#111111] transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]";
const btnGhost =
  "group inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur px-6 py-3 font-sans text-sm font-medium text-[#111111] dark:text-white transition-colors duration-200 hover:bg-white dark:hover:bg-white/10 active:scale-95";
const fieldCls =
  "w-full rounded-control border border-black/10 dark:border-[#383838] bg-white dark:bg-[#222222] px-4 py-3 font-sans text-sm text-[#111111] dark:text-white placeholder:text-[#8a8a8a] focus:border-[#111111] dark:focus:border-white focus:outline-none transition-colors";

// Words light up one by one as the paragraph scrolls through the viewport
function ScrollWords({ text, className }: { text: string; className: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when top enters at 85% of viewport, 1 when bottom reaches 40%
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.45);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`transition-colors duration-300 ${i / words.length < progress ? "text-[#111111] dark:text-white" : "text-[#c9c9c9] dark:text-[#3a3a3a]"}`}
        >
          {w}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

export default function App() {
  const sectionIds = NAV_LINKS.map((l) => l.id);
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [tab, setTab] = useState(0);
  const [area, setArea] = useState(120);
  useReveal();

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

  const rolls = Math.ceil(area / 10);
  const years = 10;

  return (
    <div className="min-h-screen w-full bg-[#fbfaf8] dark:bg-[#111111] font-sans text-[#111111] dark:text-white transition-colors duration-300 selection:bg-[#111111] selection:text-white dark:selection:bg-white dark:selection:text-[#111111]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#111111] focus:text-white dark:focus:bg-white dark:focus:text-[#111111] text-sm font-medium">Saltar al contenido</a>

      {/* ── Nav (floating pill) ── */}
      <header className="fixed inset-x-0 top-3 z-50 px-3 md:px-6">
        <nav aria-label="Navegación principal" className="mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-full border border-black/5 dark:border-white/[0.07] bg-white/70 dark:bg-[#1a1a1a]/70 pl-5 pr-2 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
          <a href="#inicio" onClick={(e) => handleNavClick(e, "inicio")} className="flex items-center shrink-0 rounded-control" aria-label="Inicio — Techomax">
            <span className="relative block w-[79px] h-[34px]">
              <span className="absolute left-0 top-0 flex flex-col items-center w-[685px] h-[296px] origin-top-left scale-[0.115]">
                <img src={imgGroup} alt="" className="block w-[382.425px] h-[196.137px] max-w-none" />
                <span className="mt-[52px] font-['Lexend_Zetta:Bold'] font-bold text-[83px] leading-[48px] text-[blue] whitespace-nowrap">TECHOMAX</span>
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  aria-current={activeSection === id ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? "bg-black/[0.06] dark:bg-white/10 text-[#111111] dark:text-white"
                      : "text-[#5c5c5c] dark:text-[#a3a3a3] hover:text-[#111111] dark:hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#5c5c5c] dark:text-[#a3a3a3] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")} className={`${btnDark} hidden md:inline-flex !py-2.5 !px-5`}>
              <Roll>Cotizar</Roll>
            </a>
            <button
              className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={`block h-[1.5px] w-5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
            </button>
          </div>
        </nav>

        <div className={`md:hidden mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-card border border-black/5 dark:border-white/[0.07] bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
          {NAV_LINKS.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className={`block px-6 py-4 font-display text-2xl ${activeSection === id ? "text-[#111111] dark:text-white" : "text-[#7a7a7a]"}`}>
              {label}
            </a>
          ))}
        </div>
      </header>

      <main id="main">
        {/* ── Hero ── */}
        <section id="inicio" aria-labelledby="hero-heading" className="mesh relative overflow-hidden px-5 pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="mx-auto max-w-[1200px] text-center">
            <div className="reveal mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              <span className="text-xs font-medium text-[#3d3d3d] dark:text-[#cfcfcf]">Deco-Membrana · Nueva categoría</span>
            </div>
            <h1 id="hero-heading" className="reveal mx-auto mt-6 max-w-[14ch] font-display text-[44px] sm:text-[64px] md:text-[88px] font-medium leading-[0.98] tracking-[-0.035em]">
              Impermeabilización <span className="text-[#8a8a8a] dark:text-[#7a7a7a]">con diseño.</span>
            </h1>
            <p className="reveal mx-auto mt-6 max-w-[52ch] text-base md:text-lg leading-relaxed text-[#4a4a4a] dark:text-[#b5b5b5]">
              La primera membrana que además de proteger, transforma las superficies en espacios decorativos. Tecnología premium con terminación estética.
            </p>
            <div className="reveal mt-9 flex flex-wrap justify-center gap-3">
              <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")} className={btnDark}><Roll>Solicitar cotización</Roll></a>
              <a href="#diseños" onClick={(e) => handleNavClick(e, "diseños")} className={btnGhost}><Roll>Ver diseños</Roll></a>
            </div>
          </div>

          {/* Tabbed showcase */}
          <div className="reveal mx-auto mt-16 md:mt-20 max-w-[1100px]">
            <div role="tablist" aria-label="Terminaciones" className="mx-auto mb-4 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-1 backdrop-blur">
              {DESIGNS.map((d, i) => (
                <button
                  key={d.key}
                  role="tab"
                  aria-selected={tab === i}
                  aria-controls="showcase-panel"
                  onClick={() => setTab(i)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${tab === i ? "bg-[#111111] text-white dark:bg-white dark:text-[#111111]" : "text-[#5c5c5c] dark:text-[#a3a3a3] hover:text-[#111111] dark:hover:text-white"}`}
                >
                  {d.key}
                </button>
              ))}
            </div>
            <div id="showcase-panel" role="tabpanel" className="relative overflow-hidden rounded-[24px] border border-white/60 dark:border-white/10 bg-[#e9e7e2] dark:bg-[#222222] p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[16/8] overflow-hidden rounded-[18px]">
                {DESIGNS.map(({ img, name }, i) => (
                  <img key={img} src={img} alt={i === tab ? `Terminación ${name}` : ""} className={`absolute inset-0 size-full object-cover transition-all duration-700 ${tab === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`} />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 md:p-8 text-left">
                  <p className="font-display text-xl md:text-3xl font-medium text-white">{DESIGNS[tab].name}</p>
                  <p className="mt-1 text-sm text-white/80">{DESIGNS[tab].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features strip ── */}
        <section aria-label="Características principales" className="border-y border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#1a1a1a]">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-5">
            {FEATURES.map(({ icon, label, sub }, i) => (
              <li key={label} className={`flex items-center gap-3 px-5 py-6 ${i ? "md:border-l" : ""} border-black/[0.06] dark:border-white/[0.06]`}>
                <img src={icon} alt="" className="size-5 dark:invert" />
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Mission ── */}
        <section aria-label="Propuesta" className="px-5 py-24 md:py-36">
          <ScrollWords
            className="mx-auto max-w-[1000px] font-display text-3xl md:text-[52px] font-medium leading-[1.12] tracking-[-0.025em]"
            text="DECO-MEMBRANA combina la funcionalidad de la membrana asfáltica con terminaciones visuales premium — pensada para distribuidores, arquitectos y constructoras que buscan diferenciarse."
          />
        </section>

        {/* ── Designs ── */}
        <section id="diseños" aria-labelledby="designs-heading" className="px-5 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <Eyebrow>Catálogo</Eyebrow>
                <h2 id="designs-heading" className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">Diseños disponibles</h2>
              </div>
              <p className="max-w-sm text-[#5c5c5c] dark:text-[#a3a3a3]">Cuatro terminaciones decorativas que se adaptan a cualquier proyecto.</p>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {DESIGNS.map(({ img, key, name, desc }, i) => (
                <li key={key} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-[#ecebe7] dark:bg-[#222222]">
                    <img src={img} alt={`${name}: ${desc}`} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 dark:bg-black/60 px-2.5 py-1 text-[11px] font-medium backdrop-blur">0{i + 1}</span>
                  </div>
                  <p className="mt-4 font-display text-lg font-medium">{name}</p>
                  <p className="mt-1 text-sm text-[#6b6b6b] dark:text-[#9a9a9a]">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Product: alternating feature blocks ── */}
        <section aria-labelledby="product-heading" className="bg-white dark:bg-[#1a1a1a] px-5 py-24 md:py-32 border-y border-black/[0.06] dark:border-white/[0.06]">
          <div className="mx-auto max-w-[1200px] space-y-24 md:space-y-32">
            <div className="text-center">
              <Eyebrow>Producto</Eyebrow>
              <h2 id="product-heading" className="mx-auto mt-3 max-w-[20ch] font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">Rollos decorativos para una nueva categoría.</h2>
            </div>
            {[
              { img: imgRectangle4, alt: "Rollo de Deco-Membrana decorativo", title: "Listo para instalar, como una membrana convencional", body: "Se aplica con el mismo proceso que la membrana asfáltica: sin capacitación extra para el instalador y con una terminación que no necesita pintura ni revestimiento.", tag: "Instalación" },
              { img: imgRectangle5, alt: "Ladrillo visto aplicado en terraza", title: "Ladrillo en terraza", body: "Acabado ladrillo visto sobre superficie horizontal con máxima protección hidrófuga. Ideal para terrazas, techos, balcones y proyectos arquitectónicos.", tag: "Aplicaciones", id: "aplicaciones" },
              { img: imgRectangle6, alt: "Línea completa de Deco-Membrana", title: "Línea completa para distribuidores", body: "Toda la gama Deco-Membrana disponible para distribuidores y proyectos de gran escala, con stock y condiciones comerciales por zona.", tag: "Línea completa" },
            ].map((b, i) => (
              <div key={b.title} id={b.id} className={`reveal grid items-center gap-10 md:gap-16 md:grid-cols-2 scroll-mt-28 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="mesh rounded-[24px] p-3 md:p-5">
                  <img src={b.img} alt={b.alt} className="aspect-[4/3] w-full rounded-[16px] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]" />
                </div>
                <div>
                  <Eyebrow>{b.tag}</Eyebrow>
                  <h3 className="mt-3 font-display text-3xl md:text-[40px] font-medium leading-tight tracking-[-0.02em]">{b.title}</h3>
                  <p className="mt-5 max-w-md leading-relaxed text-[#5c5c5c] dark:text-[#a3a3a3]">{b.body}</p>
                  <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")} className={`${btnDark} mt-8`}><Roll>Pedir información</Roll></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Estimator ── */}
        <section aria-labelledby="calc-heading" className="px-5 py-24 md:py-32">
          <div className="mesh reveal mx-auto grid max-w-[1200px] gap-10 rounded-[28px] p-8 md:p-14 md:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <Eyebrow>Estimador</Eyebrow>
              <h2 id="calc-heading" className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-[-0.03em]">¿Cuánta superficie querés transformar?</h2>
              <label htmlFor="area" className="mt-10 flex items-baseline justify-between text-sm text-[#4a4a4a] dark:text-[#b5b5b5]">
                Superficie <span className="font-display text-3xl text-[#111111] dark:text-white">{area} m²</span>
              </label>
              <input id="area" type="range" min={10} max={1000} step={10} value={area} onChange={(e) => setArea(+e.target.value)} className="mt-4 w-full accent-[#111111] dark:accent-white" />
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {[
                { k: "Rollos (10 m²)", v: rolls.toString() },
                { k: "Inversión ref.", v: `US$ ${(area * RATE_PER_M2).toLocaleString("es-AR")}` },
                { k: "Vida útil", v: `${years}+ años` },
                { k: "Estanqueidad", v: "100%" },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-card bg-white/70 dark:bg-black/30 p-5 backdrop-blur">
                  <dt className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">{k}</dt>
                  <dd className="mt-2 font-display text-2xl md:text-3xl font-medium tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Warranty / results ── */}
        <section id="garantía" aria-labelledby="warranty-heading" className="bg-[#111111] dark:bg-[#0b0b0b] px-5 py-24 md:py-32 text-white">
          <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">Garantía</p>
              <h2 id="warranty-heading" className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">Garantía de durabilidad.</h2>
              <div className="mt-8 space-y-4 leading-relaxed text-[#b5b5b5]">
                <p>DECO-MEMBRANA es un desarrollo de Techomax, producido bajo estándares de calidad orientados a la durabilidad, resistencia exterior y estabilidad visual del laminado decorativo.</p>
                <p>La garantía cubre defectos técnicos, adherencia superficial, estanqueidad y durabilidad del acabado decorativo bajo condiciones normales de uso e instalación adecuada.</p>
              </div>
              <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")} className="group mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] active:scale-95 transition-transform"><Roll>Condiciones de garantía</Roll></a>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-white/10">
              {[
                { stat: "10+", title: "Años de durabilidad", desc: "Garantizado bajo uso normal" },
                { stat: "UV", title: "Resistencia solar", desc: "Protección UV certificada" },
                { stat: "100%", title: "Estanqueidad", desc: "Impermeable total garantizado" },
                { stat: null, title: "Calidad certificada", desc: "Techomax — Argentina" },
              ].map(({ stat, title, desc }) => (
                <li key={title} className="reveal flex flex-col justify-between gap-10 bg-[#111111] dark:bg-[#0b0b0b] p-6 md:p-8">
                  {stat ? <p className="font-display text-5xl md:text-7xl font-medium tracking-[-0.04em]">{stat}</p> : <img src={imgAward} alt="Premio" className="size-12 invert" />}
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="mt-1 text-sm text-[#9a9a9a]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contacto" aria-labelledby="contact-heading" className="mesh px-5 py-24 md:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2 id="contact-heading" className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">Solicitá información para tu zona.</h2>
              <p className="mt-6 max-w-md text-[#4a4a4a] dark:text-[#b5b5b5]">Recibí la ficha técnica, precios, disponibilidad y condiciones para distribuidores, arquitectos y constructoras.</p>
              <address className="mt-10 space-y-4 not-italic">
                {[
                  { icon: imgGlobe, alt: "Sitio web", text: "www.techomax.com.ar" },
                  { icon: imgPhone, alt: "Teléfono", text: "+54 9 11 2187-9069" },
                  { icon: imgMail, alt: "Email", text: "techomaxargentina@gmail.com" },
                  { icon: imgMapPin1, alt: "Dirección", text: "Aroz 2470 · Berazategui · Buenos Aires · Argentina" },
                ].map(({ icon, alt, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/70 dark:bg-white/10"><img src={icon} alt={alt} className="size-4 dark:invert" /></span>
                    {text}
                  </div>
                ))}
              </address>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-[24px] border border-white/70 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/85 p-6 md:p-8 backdrop-blur-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] space-y-4">
              <div>
                <h3 className="font-display text-2xl font-medium">Envianos tu consulta</h3>
                <p className="mt-1 text-sm text-[#6b6b6b] dark:text-[#9a9a9a]">Completá el formulario y te respondemos a la brevedad.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="nombre" className="mb-1.5 block text-xs font-medium">Nombre y Apellido</label><input id="nombre" type="text" placeholder="Tu nombre completo" autoComplete="name" className={fieldCls} /></div>
                <div><label htmlFor="email" className="mb-1.5 block text-xs font-medium">Email</label><input id="email" type="email" placeholder="correo@ejemplo.com" autoComplete="email" className={fieldCls} /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="telefono" className="mb-1.5 block text-xs font-medium">Teléfono / Celular</label><input id="telefono" type="tel" placeholder="+54 9 ..." autoComplete="tel" className={fieldCls} /></div>
                <div>
                  <label htmlFor="zona" className="mb-1.5 block text-xs font-medium">Zona</label>
                  <select id="zona" defaultValue="" className={fieldCls}>
                    <option value="" disabled>Provincia / Localidad</option>
                    <option value="buenos-aires">Buenos Aires</option>
                    <option value="caba">Ciudad Autónoma de Buenos Aires</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="santa-fe">Santa Fe</option>
                    <option value="otra">Otra</option>
                  </select>
                </div>
              </div>
              <div><label htmlFor="mensaje" className="mb-1.5 block text-xs font-medium">Consulta sobre el proyecto o producto</label><textarea id="mensaje" rows={4} placeholder="Contanos sobre tu proyecto, aplicación o necesidad..." className={`${fieldCls} resize-none`} /></div>
              <button type="submit" className={`${btnDark} w-full justify-center`}><Roll>Enviar consulta</Roll></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#fbfaf8] dark:bg-[#111111] px-5 pt-16 pb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <p className="max-w-sm font-display text-2xl font-medium tracking-[-0.02em]">Innovación en impermeabilización decorativa.</p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="text-[#5c5c5c] dark:text-[#a3a3a3] hover:text-[#111111] dark:hover:text-white">{label}</a></li>
              ))}
            </ul>
            <nav aria-label="Redes sociales" className="flex gap-2 md:justify-end items-start">
              {[
                { href: "https://instagram.com", src: imgInstagram, label: "Instagram" },
                { href: "https://facebook.com", src: imgFacebook, label: "Facebook" },
                { href: "https://linkedin.com", src: imgLinkedin, label: "LinkedIn" },
              ].map(({ href, src, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex size-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  <img src={src} alt="" className="size-4 dark:invert" />
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-16 border-t border-black/[0.06] dark:border-white/[0.06] pt-6 text-xs text-[#6b6b6b] dark:text-[#8a8a8a]">
            DECO-MEMBRANA | Techomax — © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
