import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/globals'
import { Transactions } from './pages/transactions'
import { TransactionsProvider } from './contexts/transactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
