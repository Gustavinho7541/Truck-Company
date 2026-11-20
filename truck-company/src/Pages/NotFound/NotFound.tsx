import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound">
    <h1>Página não encontrada</h1>
    <p>O endereço que você abriu não existe ou foi movido.</p>
    <Link to="/" className="btn btn-primary">Voltar ao início</Link>
  </div>
);

export default NotFound;
