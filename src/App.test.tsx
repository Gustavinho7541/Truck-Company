import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login/Login";

test("mostra a tela de login dentro do layout do site", () => {
  const router = createMemoryRouter(
    [{ path: "/", element: <App />, children: [{ path: "login", element: <Login /> }] }],
    { initialEntries: ["/login"] }
  );
  render(<RouterProvider router={router} />);
  expect(screen.getByRole("heading", { name: /entrar/i })).toBeInTheDocument();
});
