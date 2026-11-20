import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AuthProvider, RequireAuth } from "./Auth/AuthContext";
import Login from "./Pages/Login/Login";
import Entregas from "./Pages/Entregas/Entregas";

function abrir(rota: string) {
  window.scrollTo = jest.fn();
  localStorage.clear();
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          { path: "login", element: <Login /> },
          { path: "entregas", element: <RequireAuth><Entregas /></RequireAuth> },
        ],
      },
    ],
    { initialEntries: [rota] }
  );
  render(<AuthProvider><RouterProvider router={router} /></AuthProvider>);
}

test("quem não fez login é levado para a tela de entrar", () => {
  abrir("/entregas");
  expect(screen.getByRole("heading", { name: /entrar/i })).toBeInTheDocument();
});

test("login de mentira leva para a lista de entregas", async () => {
  abrir("/login");
  await userEvent.type(screen.getByLabelText(/e-mail/i), "gustavo@teste.com");
  await userEvent.type(screen.getByLabelText(/senha/i), "123456");
  await userEvent.click(screen.getByRole("button", { name: /^entrar$/i }));
  expect(await screen.findByRole("heading", { name: /entregas/i }, { timeout: 3000 })).toBeInTheDocument();
});
