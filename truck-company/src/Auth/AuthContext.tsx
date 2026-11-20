import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "./Auth.css";

// Login "de mentira": não existe servidor ainda, então guardamos o usuário no navegador.
export type Usuario = { nome: string; email: string; tipo: "empresa" | "caminhoneiro" };

type AuthValue = {
  usuario: Usuario | null;
  entrar: (u: Usuario) => void;
  sair: () => void;
  aviso: (texto: string) => void;
};

const CHAVE = "truck-usuario";
const AuthContext = createContext<AuthValue | null>(null);

function lerUsuario(): Usuario | null {
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as Usuario) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(lerUsuario);
  const [mensagem, setMensagem] = useState("");
  const timer = useRef<number | undefined>(undefined);

  const aviso = useCallback((texto: string) => {
    setMensagem(texto);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMensagem(""), 3500);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const entrar = useCallback((u: Usuario) => {
    localStorage.setItem(CHAVE, JSON.stringify(u));
    setUsuario(u);
  }, []);

  const sair = useCallback(() => {
    localStorage.removeItem(CHAVE);
    setUsuario(null);
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair, aviso }}>
      {children}
      <div className={`toast ${mensagem ? "toast-on" : ""}`} role="status" aria-live="polite">
        {mensagem}
      </div>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider");
  return ctx;
}

// Páginas que só abrem depois do login
export function RequireAuth({ children }: { children: ReactNode }) {
  const { usuario } = useAuth();
  const location = useLocation();
  if (!usuario) return <Navigate to="/login" replace state={{ de: location.pathname }} />;
  return <>{children}</>;
}
