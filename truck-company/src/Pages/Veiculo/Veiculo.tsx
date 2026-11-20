import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { LuImagePlus } from "react-icons/lu";
import { useAuth } from "../../Auth/AuthContext";
import "../Entregas/Entregas.css";
import "./Veiculo.css";

type Dados = { tipo: string; marca: string; modelo: string; ano: string; eixos: string; cor: string };
const VAZIO: Dados = { tipo: "", marca: "", modelo: "", ano: "", eixos: "", cor: "" };
const CHAVE = "truck-veiculo";

function Veiculo() {
  const { aviso } = useAuth();
  const [dados, setDados] = useState<Dados>(VAZIO);
  const [foto, setFoto] = useState("");
  const [salvando, setSalvando] = useState(false);

  // Se já registrou antes, preenche os campos de novo (a foto não é guardada)
  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) setDados({ ...VAZIO, ...JSON.parse(salvo) });
    } catch {
      /* sem dados salvos */
    }
  }, []);

  useEffect(() => () => { if (foto) URL.revokeObjectURL(foto); }, [foto]);

  const mudar = (campo: keyof Dados) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setDados((d) => ({ ...d, [campo]: e.target.value }));

  function escolherFoto(e: ChangeEvent<HTMLInputElement>) {
    const arquivo = e.target.files?.[0];
    setFoto(arquivo ? URL.createObjectURL(arquivo) : "");
  }

  function registrar(e: FormEvent) {
    e.preventDefault();
    setSalvando(true);
    // Sucesso de mentira: troque por uma chamada à API quando ela existir
    window.setTimeout(() => {
      localStorage.setItem(CHAVE, JSON.stringify(dados));
      setSalvando(false);
      aviso("Veículo registrado com sucesso");
    }, 700);
  }

  return (
    <div className="app-page">
      <div className="app-wrap">
        <h1>Dados do veículo</h1>
        <p className="app-sub">Cadastre o caminhão para receber cargas compatíveis.</p>

        <form className="veiculo" onSubmit={registrar}>
          <div className="veiculo-campos">
            <label className="campo">Tipo de unidade
              <select value={dados.tipo} onChange={mudar("tipo")} required>
                <option value="" disabled>Selecione</option>
                <option>Caminhão toco</option>
                <option>Caminhão truck</option>
                <option>Carreta</option>
                <option>Bitrem</option>
              </select>
            </label>
            <label className="campo">Marca
              <input value={dados.marca} onChange={mudar("marca")} placeholder="Ex: Scania" required />
            </label>
            <label className="campo">Modelo
              <input value={dados.modelo} onChange={mudar("modelo")} placeholder="Digite o modelo" required />
            </label>
            <div className="campo-linha">
              <label className="campo">Ano
                <input value={dados.ano} onChange={mudar("ano")} placeholder="AAAA" inputMode="numeric" pattern="[0-9]{4}" title="Informe 4 números, como 2022" required />
              </label>
              <label className="campo">Eixos
                <input value={dados.eixos} onChange={mudar("eixos")} placeholder="Ex: 3" inputMode="numeric" pattern="[0-9]{1,2}" title="Informe só números" required />
              </label>
            </div>
            <label className="campo">Cor
              <input value={dados.cor} onChange={mudar("cor")} placeholder="Digite a cor" required />
            </label>
          </div>

          <div className="foto">
            <span className="foto-rotulo">Foto do caminhão</span>
            <label className="foto-area">
              {foto ? <img src={foto} alt="Prévia da foto do caminhão" /> : (
                <>
                  <LuImagePlus aria-hidden="true" />
                  <span>Clique para escolher uma imagem</span>
                </>
              )}
              <input type="file" accept="image/*" onChange={escolherFoto} />
            </label>
          </div>

          <div className="veiculo-fim">
            <button type="submit" className="btn btn-primary" disabled={salvando}>
              {salvando ? "Registrando..." : "Registrar veículo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Veiculo;
