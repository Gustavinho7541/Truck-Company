import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="lane" aria-hidden="true" />
    <div className="footer-container">
      <div className="footer-brand">
        <h2>Truck Company</h2>
        <p>Inteligência em movimento. Transporte de cargas com tecnologia, segurança e acompanhamento da entrega.</p>
      </div>

      <nav className="footer-column" aria-label="Navegação">
        <h3>Navegação</h3>
        <Link to="/#sobre">Sobre</Link>
        <Link to="/#servicos">Serviços</Link>
        <Link to="/login">Entrar</Link>
      </nav>

      <nav className="footer-column" aria-label="Cadastro">
        <h3>Criar conta</h3>
        <Link to="/cadastro-empresa">Sou empresa</Link>
        <Link to="/cadastro-caminhoneiro">Sou caminhoneiro</Link>
      </nav>

      <div className="footer-column">
        <h3>Contato</h3>
        <p>(11) 99999-9999</p>
        <p>contato@truckcompany.com.br</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Truck Company. Todos os direitos reservados.</p>
      <p>CNPJ 00.000.000/0001-00</p>
    </div>
  </footer>
);

export default Footer;
