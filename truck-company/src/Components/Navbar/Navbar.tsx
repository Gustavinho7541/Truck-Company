import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import T from "./T (1).png";
import { useAuth } from "../../Auth/AuthContext";

const Navbar = () => {
  const { usuario, sair, aviso } = useAuth();
  const navigate = useNavigate();

  function aoSair() {
    sair();
    aviso("Você saiu da conta");
    navigate("/");
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" aria-label="Truck Company, página inicial">
        <img src={T} alt="" />
        <span>Truck Company</span>
      </Link>

      <nav className={`navbar-links ${usuario ? "navbar-links-app" : ""}`} aria-label="Principal">
        {usuario ? (
          <>
            <NavLink to="/entregas">Entregas</NavLink>
            <NavLink to="/veiculo">Meu veículo</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/" end>Início</NavLink>
            <Link to="/#sobre">Sobre</Link>
            <Link to="/#servicos">Serviços</Link>
          </>
        )}
      </nav>

      <div className="navbar-actions">
        {usuario ? (
          <>
            <span className="navbar-user" title={usuario.email}>{usuario.nome}</span>
            <button className="btn btn-ghost navbar-cta" onClick={aoSair}>Sair</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-login">Entrar</Link>
            <Link to="/escolha-cadastro" className="btn btn-primary navbar-cta">Criar conta</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
