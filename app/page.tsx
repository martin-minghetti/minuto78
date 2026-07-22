import Image from "next/image";
import Clock from "./components/Clock";

const WA = "https://wa.me/5492241622290?text=Hola%2C%20vengo%20del%20sitio%20de%20Minuto%2078";
const CAL = "https://cal.com/martin-minghetti";

const demos = [
  {
    name: "Bosque",
    vertical: "Chocolatería · tienda online",
    proof:
      "Catálogo, carrito, envíos por zona y un panel con estadísticas. Todo lo que necesita un comercio para vender sin pagar comisión por venta.",
    url: "https://bosque-three.vercel.app",
    img: "/demos/bosque.jpg",
  },
  {
    name: "Cumbre",
    vertical: "Cervecería · tienda + trastienda",
    proof:
      "Además de vender, lleva el negocio por dentro: lotes con trazabilidad, stock real, compras a proveedores y caja diaria.",
    url: "https://cumbre-three.vercel.app",
    img: "/demos/cumbre.jpg",
  },
  {
    name: "Norhaven Lodge",
    vertical: "Cabañas · reservas",
    proof:
      "Calendario con disponibilidad real, seña online y confirmación por correo. Sin dobles reservas y sin planilla de papel.",
    url: "https://norhaven-lodge.vercel.app",
    img: "/demos/norhaven.jpg",
  },
  {
    name: "Sur41",
    vertical: "Excursiones · reservas en 3 idiomas",
    proof:
      "Cupos por fecha, pago online y correos en español, inglés y portugués. Pensado para turismo que vende afuera.",
    url: "https://sur41.vercel.app",
    img: "/demos/sur41.jpg",
  },
  {
    name: "Cohere",
    vertical: "Club de trabajo · membresías",
    proof:
      "Suscripciones con cobro mensual automático. El socio se anota una vez y el sistema cobra solo, mes a mes.",
    url: "https://cohere-six.vercel.app",
    img: "/demos/cohere.jpg",
  },
];

const paquetes = [
  {
    name: "Presencia",
    desc: "Sitio institucional con tu propio panel: cambiás textos, fotos y precios sin depender de nadie.",
    precio: "desde USD 500",
    plazo: "7 días",
  },
  {
    name: "Tienda propia",
    desc: "Catálogo, carrito, pagos y envíos. Vendés desde tu sitio, sin comisión por venta.",
    precio: "desde USD 900",
    plazo: "14 días",
  },
  {
    name: "Reservas",
    desc: "Calendario, señas y recordatorios para cabañas, turnos, clases o excursiones.",
    precio: "desde USD 900",
    plazo: "14 días",
  },
  {
    name: "Membresías",
    desc: "Cuotas y suscripciones con cobro automático. Se termina perseguir socios por WhatsApp.",
    precio: "desde USD 900",
    plazo: "14 días",
  },
];

const ticker = [
  "Pagos que se acreditan",
  "Stock que cierra",
  "Correos que llegan",
  "Panel propio",
  "Precio cerrado",
  "Entrega en días",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm tracking-widest uppercase text-card mb-4 flex items-center gap-3">
      <span className="inline-block w-8 h-px bg-card/60" aria-hidden="true" />
      {children}
    </p>
  );
}

/* numeral de minuto gigante, señaletica de estadio */
function Minuto({ n }: { n: string }) {
  return (
    <span
      className="minuto-outline hidden lg:block absolute -left-10 top-10 font-display text-[13rem] leading-none select-none pointer-events-none"
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

function FlechaSube() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      <path d="M11 3 L19 13 H14 V19 H8 V13 H3 Z" fill="var(--color-card)" />
    </svg>
  );
}

function FlechaBaja() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      <path d="M11 19 L3 9 H8 V3 H14 V9 H19 Z" fill="var(--color-redcard)" />
    </svg>
  );
}

/* pizarra tactica: media cancha en trazo blueprint */
function Pizarra() {
  return (
    <svg
      className="absolute top-16 right-[-120px] w-[560px] h-[820px] opacity-[0.08] pointer-events-none hidden lg:block"
      viewBox="0 0 560 820"
      fill="none"
      stroke="var(--color-line)"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="20" y="20" width="520" height="780" />
      <line x1="20" y1="410" x2="540" y2="410" />
      <circle cx="280" cy="410" r="90" />
      <circle cx="280" cy="410" r="4" fill="var(--color-line)" />
      <rect x="120" y="20" width="320" height="130" />
      <rect x="200" y="20" width="160" height="55" />
      <path d="M 200 150 A 90 90 0 0 0 360 150" />
      <circle cx="280" cy="115" r="3" fill="var(--color-line)" />
      <rect x="120" y="670" width="320" height="130" />
      <rect x="200" y="745" width="160" height="55" />
      <path d="M 200 670 A 90 90 0 0 1 360 670" />
      <circle cx="280" cy="705" r="3" fill="var(--color-line)" />
    </svg>
  );
}

/* barra de posesion 80/20 */
function Posesion() {
  return (
    <div className="mt-12 max-w-4xl">
      <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-muted mb-3">
        <span>Hacer el prototipo</span>
        <span>Hacer que funcione</span>
      </div>
      <div className="flex h-3 rounded-sm overflow-hidden border chalk">
        <div className="w-[80%] bg-pitch-3" />
        <div className="w-[20%] bg-card" />
      </div>
      <div className="flex justify-between font-mono text-sm mt-3">
        <span className="text-muted">80% · lo hace cualquiera</span>
        <span className="text-card">20% · acá se gana</span>
      </div>
    </div>
  );
}

/* cartel LED perimetral */
function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="border-y chalk bg-pitch-2/60 overflow-hidden py-3" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono uppercase tracking-[0.25em] text-sm text-card whitespace-nowrap px-6"
          >
            {t} <span className="text-muted px-4">///</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* grano de transmision */}
      <div className="grain fixed inset-0 z-[60] pointer-events-none opacity-[0.05]" aria-hidden="true" />

      {/* score bug */}
      <header className="fixed top-0 inset-x-0 z-50 bg-pitch/90 backdrop-blur-md border-b chalk">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
          <p className="font-display text-xl tracking-wide">
            MINUTO <span className="text-card">78</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 border chalk rounded-sm px-3 py-1.5 bg-pitch-2 font-mono text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-card animate-pulse" aria-hidden="true" />
              <span className="text-muted uppercase text-xs tracking-widest hidden sm:inline">
                En vivo
              </span>
              <Clock />
            </div>
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              className="hidden sm:block bg-card text-pitch font-bold text-sm px-4 py-2 rounded-sm hover:bg-card-2 transition-colors"
            >
              Hablemos
            </a>
          </div>
        </div>
        {/* barra de tiempo de descuento: avanza con el scroll */}
        <div className="match-progress absolute bottom-0 left-0 h-0.5 w-full bg-card" aria-hidden="true" />
      </header>

      {/* hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div
          className="absolute inset-x-0 top-0 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 50% 0%, color-mix(in srgb, var(--color-card) 6%, transparent), transparent)",
          }}
          aria-hidden="true"
        />
        <Pizarra />
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>Segundo tiempo · minuto 78</Eyebrow>
          <h1 className="font-display uppercase text-[17vw] sm:text-8xl lg:text-[9.5rem] leading-[0.92] tracking-wide max-w-5xl">
            Los partidos
            <br />
            se definen
            <br />
            <span className="text-card">al final.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
            Cualquier herramienta con inteligencia artificial te hace un prototipo: esa parte hoy es
            fácil. Lo difícil es lo que viene después: que los pagos se acrediten, que el stock
            cierre, que los correos lleguen. Nosotros entramos ahí, a cerrar el partido.
          </p>

          {/* tablero de sustitución */}
          <div className="mt-10 max-w-xl border chalk rounded-md overflow-hidden bg-pitch-2/80 backdrop-blur-sm">
            <div className="px-5 py-2 border-b chalk font-mono text-xs uppercase tracking-widest text-muted">
              Cambio · tablero del cuarto árbitro
            </div>
            <div className="flex items-center gap-4 px-5 py-4 border-b chalk">
              <FlechaBaja />
              <p>
                <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                  Sale
                </span>
                el prototipo que nunca está listo
              </p>
            </div>
            <div className="flex items-center gap-4 px-5 py-4">
              <FlechaSube />
              <p>
                <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                  Entra
                </span>
                un sistema que cobra, factura y no se cae
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              className="bg-card text-pitch font-bold px-6 py-3.5 rounded-sm hover:bg-card-2 transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href="#demos"
              className="border chalk px-6 py-3.5 rounded-sm font-bold glow-card hover:border-card/60"
            >
              Probá los demos
            </a>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 80' problema */}
      <section className="relative overflow-hidden py-24">
        <Minuto n="80" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>80&apos; · Lo que se rompe</Eyebrow>
          <h2 className="font-display uppercase text-4xl sm:text-6xl max-w-3xl leading-[1.02] tracking-wide">
            El primer 80% hoy es casi gratis. El negocio está en el{" "}
            <span className="text-card">20% que falta.</span>
          </h2>
          <Posesion />
          <div className="mt-16 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              Incidencias del segundo tiempo
            </p>
            <div className="border-l chalk">
              {[
                { tipo: "amarilla", label: "Falta", txt: "El checkout da error y no sabés si el cliente pagó o no." },
                { tipo: "amarilla", label: "Falta", txt: "El stock del local y el de la web nunca coinciden." },
                { tipo: "amarilla", label: "Falta", txt: "La confirmación del pedido llega a spam, o no llega." },
                { tipo: "roja", label: "Roja directa", txt: "Cualquiera que adivina una dirección ve datos de tus clientes." },
              ].map((f, i, arr) => (
                <div key={f.txt} className={`relative pl-10 ${i < arr.length - 1 ? "pb-10" : ""}`}>
                  <span
                    className={`absolute -left-[11px] top-0.5 w-[22px] h-[30px] rounded-[3px] rotate-[8deg] shadow-lg ${
                      f.tipo === "roja" ? "bg-redcard" : "bg-card"
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`font-mono text-xs uppercase tracking-widest mb-1 ${
                      f.tipo === "roja" ? "text-redcard" : "text-muted"
                    }`}
                  >
                    {f.label}
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed">{f.txt}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Nada de esto se ve en una maqueta. Aparece cuando entra el primer pedido real. Ese es el
            partido que jugamos nosotros: lo probamos, lo aseguramos y lo dejamos andando.
          </p>
        </div>
      </section>

      {/* 82' demos */}
      <section id="demos" className="relative overflow-hidden border-t chalk py-24 bg-pitch-2/50 mowing">
        <Minuto n="82" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>82&apos; · Las pruebas</Eyebrow>
          <h2 className="font-display uppercase text-4xl sm:text-6xl max-w-3xl leading-[1.02] tracking-wide">
            No te mostramos pantallas.{" "}
            <span className="text-card">Te dejamos comprar.</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Estos cinco negocios no existen: son demos que construimos completos, para que pruebes
            el sistema de punta a punta con pagos de prueba. Entrá, comprá, reservá. Todo funciona.
          </p>
          <div className="mt-20 space-y-20 lg:space-y-28">
            {demos.map((d, i) => (
              <div
                key={d.name}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[1280/577] overflow-hidden rounded-md border chalk glow-card group-hover:border-card/60">
                    <Image
                      src={d.img}
                      alt={`Captura del demo ${d.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </a>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="minuto-outline font-display text-6xl sm:text-7xl leading-none block select-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mt-4">
                    {d.vertical}
                  </p>
                  <h3 className="font-display uppercase text-4xl sm:text-5xl tracking-wide mt-2">
                    {d.name}
                  </h3>
                  <p className="mt-4 text-lg text-muted leading-relaxed">{d.proof}</p>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 font-mono text-sm uppercase tracking-widest text-card hover:text-card-2"
                  >
                    Probalo en vivo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 86' paquetes */}
      <section className="relative overflow-hidden border-t chalk py-24">
        <Minuto n="86" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>86&apos; · Los paquetes</Eyebrow>
          <h2 className="font-display uppercase text-4xl sm:text-6xl max-w-3xl leading-[1.02] tracking-wide">
            Precio cerrado, plazo en días,{" "}
            <span className="text-card">sin sorpresas.</span>
          </h2>
          <div className="mt-16 border-t chalk">
            {paquetes.map((p) => (
              <div
                key={p.name}
                className="grid sm:grid-cols-12 gap-4 items-baseline border-b chalk py-9 pl-4 border-l-2 border-l-transparent hover:border-l-card hover:bg-pitch-2/40 transition-colors"
              >
                <h3 className="sm:col-span-4 font-display uppercase text-3xl sm:text-4xl tracking-wide">
                  {p.name}
                </h3>
                <p className="sm:col-span-5 text-muted leading-relaxed sm:pr-8">{p.desc}</p>
                <div className="sm:col-span-3 sm:text-right">
                  <p className="font-mono text-card text-lg whitespace-nowrap">{p.precio}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">
                    entrega {p.plazo}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-sm text-muted">
            Todos los paquetes incluyen el primer mes del Plan de crecimiento.
          </p>

          {/* rescate: tarjeta roja */}
          <div className="mt-14 border border-redcard/70 rounded-md p-6 sm:p-10 bg-pitch-2/50 shadow-[0_0_40px_rgba(229,72,77,0.12)]">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="w-12 h-16 bg-redcard rounded-[3px] shrink-0 rotate-6 shadow-lg" aria-hidden="true" />
              <div>
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-wide">
                  Rescate de prototipo
                </h3>
                <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
                  ¿Te hiciste el sitio con inteligencia artificial, o lo empezó alguien que ya no
                  está, y quedó en el famoso 80%? Lo revisamos y te decimos exactamente qué falta
                  para que funcione de verdad.
                </p>
                <p className="mt-5 font-mono text-card">
                  Diagnóstico en 48 horas · USD 150 · se descuenta del arreglo
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted font-mono">
            Precios para Argentina en pesos al cambio del día. Trabajamos también con España,
            México y Estados Unidos.
          </p>
        </div>
      </section>

      {/* 88' plan de crecimiento */}
      <section className="relative overflow-hidden border-t chalk py-24 bg-pitch-2/50">
        <Minuto n="88" />
        <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>88&apos; · Después de la entrega</Eyebrow>
            <h2 className="font-display uppercase text-4xl sm:text-6xl leading-[1.02] tracking-wide">
              El sitio se entrega. <span className="text-card">El negocio sigue.</span>
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-lg text-muted leading-relaxed">
              Todos los paquetes siguen con el Plan de crecimiento: nos ocupamos del servidor, las
              copias de seguridad, la seguridad y los cambios del mes. Y cada mes te llega un
              reporte de lo que no se ve: ataques bloqueados, velocidad del sitio, qué mejoramos.
            </p>
            <p className="mt-6 font-mono text-card">desde USD 60 por mes · lo pausás cuando quieras</p>
          </div>
        </div>
      </section>

      {/* 90'+ cierre: pantalla amarilla */}
      <section className="relative overflow-hidden bg-card text-pitch py-28">
        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <p className="font-mono text-sm tracking-widest uppercase mb-4">
            90&apos;+ · Tiempo de descuento
          </p>
          <h2 className="font-display uppercase text-[16vw] sm:text-8xl lg:text-[10rem] leading-none tracking-wide">
            ¿Empezamos?
          </h2>
          <p className="mt-8 text-lg max-w-xl mx-auto leading-relaxed">
            Contanos qué necesitás y te respondemos hoy. Si preferís hablar, agendá una llamada de
            20 minutos, sin compromiso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              className="bg-pitch text-card font-bold px-6 py-3.5 rounded-sm hover:bg-pitch-2 transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pitch px-6 py-3.5 rounded-sm font-bold hover:bg-card-2 transition-colors"
            >
              Agendá una llamada
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t chalk py-10">
        <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row justify-between gap-4 font-mono text-sm text-muted">
          <p>
            MINUTO <span className="text-card">78</span> · Bariloche, Argentina
          </p>
          <p>Los demos son demostraciones funcionales, no clientes reales.</p>
        </div>
      </footer>
    </main>
  );
}
