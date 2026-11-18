import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import T from "./T (1).png";

const Navbar = () => (
  <header className="navbar">
    <Link to="/" className="navbar-logo" aria-label="Truck Company, página inicial">
      <img src={T} alt="" />
      <span>Truck Company</span>
    </Link>

    <nav className="navbar-links" aria-label="Principal">
      <NavLink to="/" end>Início</NavLink>
      <Link to="/#sobre">Sobre</Link>
      <Link to="/#servicos">Serviços</Link>
    </nav>

    <div className="navbar-actions">
      <Link to="/login" className="navbar-login">Entrar</Link>
      <Link to="/escolha-cadastro" className="btn btn-primary navbar-cta">Criar conta</Link>
    </div>
  </header>
);

export default Navbar;
