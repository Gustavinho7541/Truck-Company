import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";

const CadastroEmpresa = () => {
  function criarConta(e: FormEvent) {
    e.preventDefault();
    // TODO: enviar os dados para a API quando o cadastro estiver pronto
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
        <button type="submit" className="btn btn-primary">Criar conta</button>
      </form>
    </AuthLayout>
  );
};

export default CadastroEmpresa;
