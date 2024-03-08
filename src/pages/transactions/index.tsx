import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/search-form";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";


interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  const getTransactions = async() => {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();
    setTransactions(data)
  }

  useEffect(() => {
    getTransactions();
  }, []);
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