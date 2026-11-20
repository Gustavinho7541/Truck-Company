import { Link } from "react-router-dom";
import { LuShieldCheck, LuGauge, LuUsers, LuTruck, LuPackage, LuMapPin, LuClipboardCheck } from "react-icons/lu";
import "./Home.css";
import heroTruck from "./caminhao.png";

const principios = [
  { icon: LuShieldCheck, title: "Segurança", text: "Cuidado e proteção em cada entrega." },
  { icon: LuGauge, title: "Agilidade", text: "Processos eficientes para resultados reais." },
  { icon: LuUsers, title: "Compromisso", text: "Parceria, transparência e excelência sempre." },
];

const servicos = [
  { icon: LuTruck, title: "Transporte rodoviário", text: "Eficiência e pontualidade em todo o Brasil." },
  { icon: LuPackage, title: "Armazenagem", text: "Estrutura completa para armazenar com segurança." },
  { icon: LuMapPin, title: "Distribuição", text: "Soluções sob medida para chegar mais longe." },
  { icon: LuClipboardCheck, title: "Gestão logística", text: "Planejamento inteligente para otimizar resultados." },
];

function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroTruck})` }}>
        <div className="hero-content">
          <h1>Inteligência em movimento</h1>
          <p>Soluções logísticas completas para conectar destinos e impulsionar o seu negócio.</p>
          <div className="hero-buttons">
            <Link to="/escolha-cadastro" className="btn btn-primary">Criar conta</Link>
            <a href="#servicos" className="btn btn-ghost">Ver serviços</a>
          </div>
        </div>
        <div className="hero-road" aria-hidden="true" />
      </section>

      <section className="about" id="sobre">
        <h2>Movemos mais que cargas. Movemos possibilidades.</h2>
        <p>
          A Truck Company nasceu para tornar a logística mais simples, segura e inteligente. Com tecnologia,
          planejamento e uma equipe comprometida, entregamos mais valor em cada quilômetro percorrido.
        </p>
        <div className="principios">
          {principios.map(({ icon: Icon, title, text }) => (
            <div className="principio" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="services-head">
          <h2>Soluções logísticas para cada desafio</h2>
          <Link to="/escolha-cadastro" className="btn btn-primary">Começar agora</Link>
        </div>
        <div className="services-grid">
          {servicos.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Tem uma carga para levar ou um caminhão disponível?</h2>
        <div className="cta-buttons">
          <Link to="/cadastro-empresa" className="btn btn-dark">Sou empresa</Link>
          <Link to="/cadastro-caminhoneiro" className="btn btn-dark">Sou caminhoneiro</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
