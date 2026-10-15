const services = [
  { number: "01", title: "Diseño con intención", text: "Una identidad visual clara que cuenta tu historia y conecta con las personas correctas.", icon: "◇" },
  { number: "02", title: "Desarrollo web", text: "Sitios rápidos, intuitivos y adaptados a cualquier pantalla. Cada detalle tiene un propósito.", icon: "↗" },
  { number: "03", title: "Ideas que crecen", text: "Una base simple y flexible para que tu presencia digital evolucione junto a tu proyecto.", icon: "✳" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="navigation wrap">
        <a className="brand" href="#inicio" aria-label="X, inicio"><span className="brand-symbol">✳</span> X<span className="brand-dot">.</span></a>
        <nav aria-label="Navegación principal"><a href="#servicios">Qué hacemos</a><a href="#proceso">Cómo trabajamos</a></nav>
        <a className="nav-cta" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <section className="hero wrap" id="inicio">
          <div className="hero-copy"><p className="eyebrow"><span /> ESTUDIO DIGITAL INDEPENDIENTE</p>
            <h1>Las grandes ideas<br />empiezan con<br /><em>algo simple.</em></h1>
            <p className="intro">Transformamos tu idea en una experiencia digital que se siente bien, funciona mejor y deja huella.</p>
            <a className="button button-dark" href="#contacto">Dale forma a tu idea <span aria-hidden="true">↗</span></a>
            <p className="hero-note">Diseño pensado para personas. Hecho para crecer.</p>
          </div>
          <div className="hero-art" role="img" aria-label="Composición abstracta de órbitas verdes sobre un fondo lavanda">
            <div className="art-top"><span>UNA NUEVA PERSPECTIVA</span><span>↗</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit-core" />
            <div className="art-bottom"><span>Ideas en movimiento.</span><span>© X</span></div>
            <span className="art-tag">Menos ruido.<br /><strong>Más esencia.</strong></span>
          </div>
        </section>
        <div className="principles"><div className="wrap"><span>ESTRATEGIA</span><span aria-hidden="true">✳</span><span>DISEÑO</span><span aria-hidden="true">✳</span><span>DESARROLLO</span><span aria-hidden="true">✳</span><span>BUENAS IDEAS</span></div></div>
        <section className="services wrap" id="servicios"><div className="section-heading"><p className="eyebrow">LO QUE HACEMOS</p><h2>Todo lo que necesitas.<br /><span>Sin complicarlo.</span></h2></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>
        <section className="process wrap" id="proceso"><div><p className="eyebrow">DE LA IDEA A LA REALIDAD</p><h2>Un buen proyecto<br />empieza escuchando.</h2><p>Nos involucramos en lo que quieres construir y avanzamos contigo, un paso a la vez.</p></div><ol><li><span>01</span><div><h3>Conversamos</h3><p>Entendemos tu idea, tus objetivos y lo que te hace diferente.</p></div></li><li><span>02</span><div><h3>Le damos forma</h3><p>Convertimos lo esencial en una propuesta clara y funcional.</p></div></li><li><span>03</span><div><h3>Lo hacemos realidad</h3><p>Cuidamos los detalles y preparamos tu proyecto para salir al mundo.</p></div></li></ol></section>
        <section className="contact wrap" id="contacto"><p className="eyebrow">EL SIGUIENTE PASO ES TUYO</p><h2>Tu próxima gran idea<br />merece un buen comienzo.</h2><p>Cuéntanos qué tienes en mente. Empecemos por una conversación.</p><a className="button button-dark" href="mailto:hola@x.example">Conversemos <span aria-hidden="true">↗</span></a><small>Demo de estudio digital · Correo de ejemplo</small></section>
      </main>
      <footer className="footer wrap"><a className="brand" href="#inicio"><span className="brand-symbol">✳</span> X.</a><p>Ideas simples. Posibilidades infinitas.</p><a href="#inicio">Volver arriba ↑</a></footer>
    </div>
  );
}
