import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LuSearch, LuMapPin, LuTruck } from "react-icons/lu";
import "./Entregas.css";

type Status = "Aguardando coleta" | "Em rota" | "Entregue";
type Entrega = { codigo: string; origem: string; destino: string; status: Status; progresso: number; previsao: string };

// Dados de exemplo (sem servidor). Troque por uma chamada à API quando ela existir.
const ENTREGAS: Entrega[] = [
  { codigo: "TC-1042", origem: "São Bernardo do Campo, SP", destino: "Caxias do Sul, RS", status: "Em rota", progresso: 62, previsao: "22/11/2026" },
  { codigo: "TC-1041", origem: "São Bernardo do Campo, SP", destino: "Cuiabá, MT", status: "Em rota", progresso: 35, previsao: "24/11/2026" },
  { codigo: "TC-1039", origem: "Campinas, SP", destino: "Curitiba, PR", status: "Aguardando coleta", progresso: 0, previsao: "23/11/2026" },
  { codigo: "TC-1036", origem: "Santos, SP", destino: "Belo Horizonte, MG", status: "Entregue", progresso: 100, previsao: "18/11/2026" },
  { codigo: "TC-1033", origem: "Ribeirão Preto, SP", destino: "Goiânia, GO", status: "Entregue", progresso: 100, previsao: "15/11/2026" },
  { codigo: "TC-1030", origem: "Jales, SP", destino: "Campo Grande, MS", status: "Aguardando coleta", progresso: 0, previsao: "25/11/2026" },
];

const FILTROS: Array<"Todas" | Status> = ["Todas", "Aguardando coleta", "Em rota", "Entregue"];
const classe = (s: Status) => (s === "Em rota" ? "rota" : s === "Entregue" ? "ok" : "espera");

function Entregas() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todas");
  const [aberta, setAberta] = useState<string | null>(null);

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return ENTREGAS.filter(
      (e) =>
        (filtro === "Todas" || e.status === filtro) &&
        (!termo || `${e.origem} ${e.destino} ${e.codigo}`.toLowerCase().includes(termo))
    );
  }, [busca, filtro]);

  return (
    <div className="app-page">
      <div className="app-wrap">
        <h1>Entregas</h1>
        <p className="app-sub">Acompanhe cada carga, da coleta até a chegada.</p>

        <label className="busca">
          <LuSearch aria-hidden="true" />
          <span className="sr-only">Buscar entregas</span>
          <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar por origem, destino ou código" />
        </label>

        <div className="chips" role="group" aria-label="Filtrar por situação">
          {FILTROS.map((f) => (
            <button key={f} className={`chip ${filtro === f ? "chip-on" : ""}`} aria-pressed={filtro === f} onClick={() => setFiltro(f)}>
              {f}
            </button>
          ))}
        </div>

        {lista.length === 0 ? (
          <p className="vazio">Nenhuma entrega encontrada. Tente outro nome de cidade ou limpe o filtro.</p>
        ) : (
          <ul className="entregas">
            {lista.map((e) => (
              <li key={e.codigo} className="entrega">
                <div className="entrega-topo">
                  <div className="ponto"><LuMapPin aria-hidden="true" /><div><small>Origem</small><strong>{e.origem}</strong></div></div>
                  <div className="trilho" aria-label={`${e.progresso}% do trajeto`}>
                    <div className="trilho-cheio" style={{ width: `${e.progresso}%` }} />
                    <LuTruck className="trilho-caminhao" style={{ left: `${e.progresso}%` }} aria-hidden="true" />
                  </div>
                  <div className="ponto"><LuMapPin aria-hidden="true" /><div><small>Destino</small><strong>{e.destino}</strong></div></div>
                  <span className={`status status-${classe(e.status)}`}>{e.status}</span>
                  <button className="detalhes" aria-expanded={aberta === e.codigo} onClick={() => setAberta(aberta === e.codigo ? null : e.codigo)}>
                    {aberta === e.codigo ? "Fechar" : "Ver detalhes"}
                  </button>
                </div>
                {aberta === e.codigo && (
                  <dl className="entrega-det">
                    <div><dt>Código</dt><dd>{e.codigo}</dd></div>
                    <div><dt>Previsão de chegada</dt><dd>{e.previsao}</dd></div>
                    <div><dt>Trajeto concluído</dt><dd>{e.progresso}%</dd></div>
                  </dl>
                )}
              </li>
            ))}
          </ul>
        )}

        <p className="app-nota">Precisa cadastrar o caminhão para receber cargas? <Link to="/veiculo">Registrar veículo</Link></p>
      </div>
    </div>
  );
}

export default Entregas;
