import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import { useAuth } from "../../Auth/AuthContext";

const CadastroCaminhoneiro = () => {
  const { entrar, aviso } = useAuth();
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);

  function criarConta(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    setCarregando(true);
    // Sucesso de mentira: troque por uma chamada à API quando ela existir
    window.setTimeout(() => {
      entrar({ nome: String(dados.get("nome")), email: String(dados.get("email")), tipo: "caminhoneiro" });
      aviso("Conta criada com sucesso");
      navigate("/entregas", { replace: true });
    }, 700);
  }

  return (
    <AuthLayout
      title="Criar conta de caminhoneiro"
      subtitle="Encontre e negocie as melhores opções de frete em todo o Brasil."
      footer={<>Já tem conta? <Link to="/login">Entrar</Link></>}
    >
      <form onSubmit={criarConta}>
        <label className="field">Nome completo
          <input type="text" name="nome" placeholder="Seu nome" autoComplete="name" required />
        </label>
        <div className="field-row">
          <label className="field">E-mail
            <input type="email" name="email" placeholder="voce@email.com" autoComplete="email" required />
          </label>
          <label className="field">Telefone
            <input type="tel" name="telefone" placeholder="(00) 00000-0000" autoComplete="tel" required />
          </label>
        </div>
        <label className="field">Senha
          <input type="password" name="senha" placeholder="Crie uma senha" autoComplete="new-password" required />
        </label>
        <button type="submit" className="btn btn-primary" disabled={carregando}>
          {carregando ? "Criando conta..." : "Criar conta"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default CadastroCaminhoneiro;
