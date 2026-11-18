import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";

function Login() {
  function entrar(e: FormEvent) {
    e.preventDefault();
    // TODO: enviar e-mail e senha para a API quando o login estiver pronto
  }

  return (
    <AuthLayout
      title="Entrar"
      subtitle="Acesse sua conta para acompanhar cargas e entregas."
      footer={<>Ainda não tem conta? <Link to="/escolha-cadastro">Criar conta</Link></>}
    >
      <form onSubmit={entrar}>
        <label className="field">E-mail
          <input type="email" name="email" placeholder="voce@empresa.com.br" autoComplete="email" required />
        </label>
        <label className="field">Senha
          <input type="password" name="senha" placeholder="Digite sua senha" autoComplete="current-password" required />
        </label>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </AuthLayout>
  );
}

export default Login;
