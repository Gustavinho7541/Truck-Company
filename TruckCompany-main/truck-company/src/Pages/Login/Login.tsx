import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import { useAuth } from "../../Auth/AuthContext";

function Login() {
  const { entrar, aviso } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [carregando, setCarregando] = useState(false);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email"));
    setCarregando(true);
    // Sucesso de mentira: troque por uma chamada à API quando ela existir
    window.setTimeout(() => {
      const nome = email.split("@")[0];
      entrar({ nome: nome.charAt(0).toUpperCase() + nome.slice(1), email, tipo: "empresa" });
      aviso("Login realizado com sucesso");
      navigate((location.state as { de?: string } | null)?.de ?? "/entregas", { replace: true });
    }, 700);
  }

  return (
    <AuthLayout
      title="Entrar"
      subtitle="Acesse sua conta para acompanhar cargas e entregas."
      footer={<>Ainda não tem conta? <Link to="/escolha-cadastro">Criar conta</Link></>}
    >
      <form onSubmit={enviar}>
        <label className="field">E-mail
          <input type="email" name="email" placeholder="voce@empresa.com.br" autoComplete="email" required />
        </label>
        <label className="field">Senha
          <input type="password" name="senha" placeholder="Digite sua senha" autoComplete="current-password" required />
        </label>
        <button type="submit" className="btn btn-primary" disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </AuthLayout>
  );
}

export default Login;
