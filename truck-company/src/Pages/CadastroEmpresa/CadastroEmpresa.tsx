import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import { useAuth } from "../../Auth/AuthContext";

const CadastroEmpresa = () => {
  const { entrar, aviso } = useAuth();
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);

  function criarConta(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    setCarregando(true);
    // Sucesso de mentira: troque por uma chamada à API quando ela existir
    window.setTimeout(() => {
      entrar({ nome: String(dados.get("nome")), email: String(dados.get("email")), tipo: "empresa" });
      aviso("Conta criada com sucesso");
      navigate("/entregas", { replace: true });
    }, 700);
  }

  return (
    <AuthLayout
      title="Criar conta de empresa"
      subtitle="Anuncie seus fretes e encontre motoristas de forma rápida e segura."
      footer={<>Já tem conta? <Link to="/login">Entrar</Link></>}
    >
      <form onSubmit={criarConta}>
        <label className="field">Nome da empresa
          <input type="text" name="nome" placeholder="Nome da empresa" autoComplete="organization" required />
        </label>
        <label className="field">E-mail
          <input type="email" name="email" placeholder="voce@empresa.com.br" autoComplete="email" required />
        </label>
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

export default CadastroEmpresa;
