import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/globals";
import { Transactions } from "./pages/transactions";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  )
}

