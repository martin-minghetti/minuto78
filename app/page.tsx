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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm tracking-widest uppercase text-card mb-4">
      {children}
    </p>
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

export default function Home() {
  return (
    <main className="flex-1">
      {/* score bug */}
      <header className="fixed top-0 inset-x-0 z-50 bg-pitch/95 backdrop-blur-sm border-b chalk">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
          <p className="font-display text-lg tracking-tight">
            MINUTO <span className="text-card">78</span>
          </p>
          <div className="flex items-center gap-5">
            <Clock />
            <a
              href={WA}
              className="hidden sm:block bg-card text-pitch font-bold text-sm px-4 py-2 rounded-md hover:bg-card-2 transition-colors"
            >
              Hablemos
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-24">
        <svg
          className="absolute -top-40 left-1/2 -translate-x-1/2 opacity-[0.07] pointer-events-none"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          aria-hidden="true"
        >
          <circle cx="450" cy="450" r="380" fill="none" stroke="var(--color-line)" strokeWidth="3" />
          <circle cx="450" cy="450" r="8" fill="var(--color-line)" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>Segundo tiempo · minuto 78</Eyebrow>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Los partidos se definen al final.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
            Cualquier herramienta con inteligencia artificial te hace un prototipo: esa parte hoy es
            fácil. Lo difícil es lo que viene después: que los pagos se acrediten, que el stock
            cierre, que los correos lleguen. Nosotros entramos ahí, a cerrar el partido.
          </p>

          {/* tablero de sustitución */}
          <div className="mt-10 max-w-xl border chalk rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 border-b chalk bg-pitch-2">
              <FlechaBaja />
              <p>
                <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                  Sale
                </span>
                el prototipo que nunca está listo
              </p>
            </div>
            <div className="flex items-center gap-4 px-5 py-4 bg-pitch-2">
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
              href={WA}
              className="bg-card text-pitch font-bold px-6 py-3.5 rounded-md hover:bg-card-2 transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href="#demos"
              className="border chalk px-6 py-3.5 rounded-md font-bold hover:bg-pitch-2 transition-colors"
            >
              Probá los demos
            </a>
          </div>
        </div>
      </section>

      {/* 80' problema */}
      <section className="border-t chalk py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>80&apos; · Lo que se rompe</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl max-w-3xl leading-tight">
            El primer 80% hoy es casi gratis. El negocio está en el otro 80%.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            {[
              "El checkout da error y no sabés si el cliente pagó o no.",
              "El stock del local y el de la web nunca coinciden.",
              "La confirmación del pedido llega a spam, o no llega.",
              "Cualquiera que adivina una dirección ve datos de tus clientes.",
            ].map((item) => (
              <p key={item} className="border-l-2 border-redcard pl-5 text-lg text-muted leading-relaxed">
                {item}
              </p>
            ))}
          </div>
          <p className="mt-12 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Nada de esto se ve en una maqueta. Aparece cuando entra el primer pedido real. Ese es el
            partido que jugamos nosotros: lo probamos, lo aseguramos y lo dejamos andando.
          </p>
        </div>
      </section>

      {/* 82' demos */}
      <section id="demos" className="border-t chalk py-24 bg-pitch-2/40">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>82&apos; · Las pruebas</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl max-w-3xl leading-tight">
            No te mostramos pantallas. Te dejamos comprar.
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Estos cinco negocios no existen: son demos que construimos completos, para que pruebes
            el sistema de punta a punta con pagos de prueba. Entrá, comprá, reservá. Todo funciona.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border chalk rounded-lg overflow-hidden bg-pitch hover:border-card transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={`Captura del demo ${d.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {d.vertical}
                  </p>
                  <h3 className="font-display text-xl mt-2">{d.name}</h3>
                  <p className="mt-2 text-muted leading-relaxed">{d.proof}</p>
                  <p className="mt-4 font-bold text-card">Probalo en vivo</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 86' paquetes */}
      <section className="border-t chalk py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>86&apos; · Los paquetes</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl max-w-3xl leading-tight">
            Precio cerrado, plazo en días, sin sorpresas.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {paquetes.map((p) => (
              <div key={p.name} className="border chalk rounded-lg p-6 bg-pitch-2/40">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="font-mono text-card whitespace-nowrap">{p.precio}</p>
                </div>
                <p className="mt-3 text-muted leading-relaxed">{p.desc}</p>
                <p className="mt-5 font-mono text-sm text-muted">
                  Entrega: {p.plazo} · incluye el primer mes del Plan de crecimiento
                </p>
              </div>
            ))}
          </div>

          {/* rescate: tarjeta roja */}
          <div className="mt-6 border-2 border-redcard rounded-lg p-6 sm:p-8 bg-pitch-2/40">
            <div className="flex items-start gap-5">
              <div className="w-10 h-14 bg-redcard rounded-sm shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl">Rescate de prototipo</h3>
                <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                  ¿Te hiciste el sitio con inteligencia artificial, o lo empezó alguien que ya no
                  está, y quedó en el famoso 80%? Lo revisamos y te decimos exactamente qué falta
                  para que funcione de verdad.
                </p>
                <p className="mt-4 font-mono text-card">
                  Diagnóstico en 48 horas · USD 150 · se descuenta del arreglo
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted font-mono">
            Precios para Argentina en pesos al cambio del día. Trabajamos también con España,
            México y Estados Unidos.
          </p>
        </div>
      </section>

      {/* 88' plan de crecimiento */}
      <section className="border-t chalk py-24 bg-pitch-2/40">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>88&apos; · Después de la entrega</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">
              El sitio se entrega. El negocio sigue.
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

      {/* 90' quién juega */}
      <section className="border-t chalk py-24">
        <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row gap-10 items-start">
          <Image
            src="/martin-portrait.jpg"
            alt="Martín Minghetti"
            width={160}
            height={160}
            className="rounded-lg border chalk"
          />
          <div className="max-w-2xl">
            <Eyebrow>90&apos; · Quién juega</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">Martín Minghetti</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Siete años construyendo software a medida para clientes en Europa, desde Bariloche.
              Hoy con inteligencia artificial en el equipo: la uso para jugar los primeros 70
              minutos rápido, y dedico el tiempo a los detalles que definen el partido. Hablás
              directo conmigo, sin intermediarios.
            </p>
          </div>
        </div>
      </section>

      {/* 90'+ cierre */}
      <section className="border-t chalk py-28">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>90&apos;+ · Tiempo de descuento</Eyebrow>
          <h2 className="font-display text-4xl sm:text-6xl">¿Jugamos?</h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Contanos qué necesitás y te respondemos hoy. Si preferís hablar, agendá una llamada de
            20 minutos, sin compromiso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WA}
              className="bg-card text-pitch font-bold px-6 py-3.5 rounded-md hover:bg-card-2 transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="border chalk px-6 py-3.5 rounded-md font-bold hover:bg-pitch-2 transition-colors"
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
