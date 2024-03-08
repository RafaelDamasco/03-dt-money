import * as Dialog  from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal() {
  return (
      <Dialog.Portal>
        <Overlay/>

        <Content>
          <Dialog.Title >New transaction</Dialog.Title>

          <CloseButton>
            <X size={24}/>
          </CloseButton>

          <form action="">
            <input type="text" required placeholder="Description"/>
            <input type="number" required placeholder="Price"/>
            <input type="text" required placeholder="Category"/>


            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24}/>
                Entry
              </TransactionTypeButton>
              <TransactionTypeButton variant="outcome" value='outcome'>
                <ArrowCircleDown size={24}/>
                Output
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Register</button>
          </form>
        </Content>
      </Dialog.Portal>
  )
}