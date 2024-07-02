import { GlobalStyle, ContainerApp } from "./styles/global";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContainerApp>
          <Sidebar />
          <div>
            <Header />
            <Home />
          </div>
        </ContainerApp>
      </ThemeProvider>
    </>
  );
}
