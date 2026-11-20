import type { ReactNode } from "react";
import "./AuthLayout.css";
import heroTruck from "../../Pages/Home/caminhao.png";

type Props = { title: string; subtitle: string; children: ReactNode; footer?: ReactNode };

const AuthLayout = ({ title, subtitle, children, footer }: Props) => (
  <div className="auth">
    <aside className="auth-visual" style={{ backgroundImage: `url(${heroTruck})` }} aria-hidden="true">
      <p>Inteligência em movimento.</p>
    </aside>
    <section className="auth-panel">
      <div className="auth-box">
        <h1>{title}</h1>
        <p className="auth-sub">{subtitle}</p>
        {children}
        {footer && <p className="auth-footer">{footer}</p>}
      </div>
    </section>
  </div>
);

export default AuthLayout;
