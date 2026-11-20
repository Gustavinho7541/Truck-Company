import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RequireAuth } from "../Auth/AuthContext";
import HomePage from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EscolhaCadastro from "../Pages/EscolhaCadastro/EscolhaCadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/CadastroEmpresa";
import CadastroCaminhoneiro from "../Pages/CadastroCaminhoneiro/CadastroCaminhoneiro";
import Entregas from "../Pages/Entregas/Entregas";
import Veiculo from "../Pages/Veiculo/Veiculo";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "escolha-cadastro", element: <EscolhaCadastro /> },
      { path: "cadastro-empresa", element: <CadastroEmpresa /> },
      { path: "cadastro-caminhoneiro", element: <CadastroCaminhoneiro /> },
      { path: "entregas", element: <RequireAuth><Entregas /></RequireAuth> },
      { path: "veiculo", element: <RequireAuth><Veiculo /></RequireAuth> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
