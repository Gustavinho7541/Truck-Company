import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EscolhaCadastro from "../Pages/EscolhaCadastro/EscolhaCadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/CadastroEmpresa";
import CadastroCaminhoneiro from "../Pages/CadastroCaminhoneiro/CadastroCaminhoneiro";
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
      { path: "*", element: <NotFound /> },
    ],
  },
]);
