import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";
import { site, type ServiceId } from "@/content/site";
import { whatsAppUrl } from "@/lib/whatsapp";

const greeting = whatsAppUrl(site.waGreeting);
const instagramUrl = "https://www.instagram.com/_rzwebdesign/";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
      />
    </svg>
  );
}

const formServices: readonly { id: ServiceId; label: string }[] = [
  { id: "institutional", label: "Site institucional" },
  { id: "store", label: "Loja online" },
  { id: "landing", label: "Landing page" },
  { id: "redesign", label: "Reformulação de site" },
];

function briefMessage(service: ServiceId, name: string) {
  if (service === "institutional") {
    return `Olá! Meu nome é ${name} e tenho interesse em criar um site institucional. Gostaria de saber mais sobre os serviços e como podemos começar.`;
  }
  if (service === "store") {
    return `Olá! Meu nome é ${name} e tenho interesse em criar uma loja online. Gostaria de saber mais sobre os serviços e como podemos começar.`;
  }
  if (service === "landing") {
    return `Olá! Meu nome é ${name} e tenho interesse em criar uma landing page. Gostaria de saber mais sobre os serviços e como podemos começar.`;
  }
  return `Olá! Meu nome é ${name} e tenho interesse em reformular meu site. Gostaria de saber mais sobre os serviços e como podemos começar.`;
}

function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export function SitePage() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        {site.skip}
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Why />
        <Process />
        <Contact />
      </main>
      <a className="float-cta" href={greeting} target="_blank" rel="noopener noreferrer">
        {site.book}
      </a>
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header on-dark">
      <div className="wrap header-bar">
        <a href="#topo" className="logo" onClick={() => setOpen(false)}>
          <strong>RZ</strong> design
        </a>
        <nav className="desktop-nav" aria-label="RZ design">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-book" href={greeting} target="_blank" rel="noopener noreferrer">
            {site.book}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            className="ig-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da RZ design"
          >
            <InstagramIcon />
          </a>
        </nav>
        <div className="header-end">
          <a
            className="ig-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da RZ design"
          >
            <InstagramIcon />
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
            <span className="sr-only">{open ? site.menuClose : site.menuOpen}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="menu-mobile" className="wrap mobile-nav" aria-label="RZ design">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={greeting} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            {site.book}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="hero on-dark" aria-label={site.hero.join(" ")}>
      <img className="hero-photo" src="/hero.jpg" alt="" />
      <div className="hero-shade" />
      <div className="wrap hero-copy">
        <h1 className="display display-hero">
          <Lines lines={site.hero} />
        </h1>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="band" aria-labelledby="sobre-titulo">
      <div className="wrap about-grid">
        <div className="about-copy">
          <h2 id="sobre-titulo" className="display display-section">
            <Lines lines={site.about.title} />
          </h2>
          <p className="prose">{site.about.body}</p>
        </div>
        <div className="mark-card" aria-hidden="true">
          <p className="mark-letters">RZ</p>
          <p className="mark-caption">RZ design</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="band night-band on-dark" aria-labelledby="servicos-titulo">
      <div className="wrap">
        <div className="services-head">
          <h2 id="servicos-titulo" className="display display-section display-light">
            <Lines lines={site.services.title} />
          </h2>
          <p className="services-lede">{site.services.lede}</p>
        </div>
        <ul className="service-grid">
          {site.services.items.map((item) => (
            <li key={item.id} className="service-card">
              <h3 className="subtitle">{item.title}</h3>
              <p>{item.body}</p>
              <a className="card-link" href={whatsAppUrl(item.message)} target="_blank" rel="noopener noreferrer">
                {item.cta}
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="porque" className="band" aria-labelledby="porque-titulo">
      <div className="wrap why-grid">
        <div>
          <h2 id="porque-titulo" className="display display-section">
            <Lines lines={site.why.title} />
          </h2>
          <p className="why-note">{site.why.note}</p>
        </div>
        <ul className="why-list">
          {site.why.items.map((item) => (
            <li key={item.title}>
              <Check className="why-check" size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3 className="subtitle">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="band" aria-labelledby="processo-titulo">
      <div className="wrap">
        <div className="process-head">
          <h2 id="processo-titulo" className="display display-section">
            <Lines lines={site.process.title} />
          </h2>
          <p className="process-lede">{site.process.lede}</p>
        </div>
        <ol className="process-map">
          {site.process.steps.map((step) => (
            <li key={step.n}>
              <span className="step-node">{step.n}</span>
              <div className="step-copy">
                <h3 className="step-title">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="band slate-band on-dark" aria-labelledby="contato-titulo">
      <div className="wrap contact-grid">
        <h2 id="contato-titulo" className="display display-section display-light">
          <Lines lines={site.contact.title} />
        </h2>
        <div className="contact-copy">
          <p className="contact-lede">{site.contact.lede}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState<ServiceId | "">("");
  const [tried, setTried] = useState(false);

  const cleanName = name.trim().replace(/\s+/g, " ");
  const nameInvalid = tried && cleanName.length === 0;
  const serviceInvalid = tried && service === "";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!cleanName || !service) {
      setTried(true);
      return;
    }
    window.location.assign(whatsAppUrl(briefMessage(service, cleanName)));
  }

  return (
    <form className="brief-form" onSubmit={onSubmit} noValidate>
      <label className="brief-field" htmlFor="brief-nome">
        <span>{site.contact.form.name}</span>
        <input
          id="brief-nome"
          className="brief-control"
          name="nome"
          type="text"
          autoComplete="name"
          maxLength={80}
          placeholder={site.contact.form.namePlaceholder}
          value={name}
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? "brief-nome-erro" : undefined}
          onChange={(event) => setName(event.target.value)}
          required
        />
        {nameInvalid ? (
          <p id="brief-nome-erro" className="brief-error">
            {site.contact.form.nameError}
          </p>
        ) : null}
      </label>

      <label className="brief-field" htmlFor="brief-servico">
        <span>{site.contact.form.service}</span>
        <span className="brief-select-wrap">
          <select
            id="brief-servico"
            className={service ? "brief-control brief-select" : "brief-control brief-select is-empty"}
            name="servico"
            value={service}
            aria-invalid={serviceInvalid}
            aria-describedby={serviceInvalid ? "brief-servico-erro" : undefined}
            onChange={(event) => setService(event.target.value as ServiceId | "")}
            required
          >
            <option value="">{site.contact.form.servicePlaceholder}</option>
            {formServices.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <ChevronDown className="brief-chevron" size={18} strokeWidth={1.75} aria-hidden="true" />
        </span>
        {serviceInvalid ? (
          <p id="brief-servico-erro" className="brief-error">
            {site.contact.form.serviceError}
          </p>
        ) : null}
      </label>

      <button className="brief-submit" type="submit">
        {site.contact.form.submit}
      </button>
    </form>
  );
}
