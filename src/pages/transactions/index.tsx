import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { SearchForm } from "./components/search-form";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { useContext } from "react";



export function Transactions() {
  const {transactions} = useContext(TransactionsContext)
  return (
  <div>
    <Header />
    <Summary />
    <TransactionContainer>
    <SearchForm />
      <TransactionTable>
        <tbody>
          {transactions?.map(transaction => (
          <tr key={transaction.id}>
            <td width="50%">{transaction.description}</td>
            <td>
              <PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  </div>
  )
}