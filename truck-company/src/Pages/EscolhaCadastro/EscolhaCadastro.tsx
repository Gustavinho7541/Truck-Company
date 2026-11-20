import { Link } from "react-router-dom";
import { LuTruck, LuBuilding2 } from "react-icons/lu";
import "./EscolhaCadastro.css";

const EscolhaCadastro = () => (
  <div className="escolha">
    <h1>Como você quer usar a Truck Company?</h1>
    <p className="escolha-sub">Escolha o tipo de conta. Você pode mudar de ideia depois.</p>

    <div className="escolha-cards">
      <Link to="/cadastro-caminhoneiro" className="escolha-card">
        <LuTruck aria-hidden="true" />
        <h2>Sou caminhoneiro</h2>
        <p>Encontre e negocie as melhores opções de frete em todo o Brasil.</p>
        <span className="escolha-go">Criar conta de caminhoneiro</span>
      </Link>

      <Link to="/cadastro-empresa" className="escolha-card">
        <LuBuilding2 aria-hidden="true" />
        <h2>Sou empresa</h2>
        <p>Anuncie seus fretes e encontre motoristas de forma rápida e segura.</p>
        <span className="escolha-go">Criar conta de empresa</span>
      </Link>
    </div>
  </div>
);

export default EscolhaCadastro;
