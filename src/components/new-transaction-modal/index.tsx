import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/transactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data
    await createTransaction({
      category,
      description,
      price,
      type,
    })
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register('description')}
            type="text"
            required
            placeholder="Description"
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            required
            placeholder="Price"
          />
          <input
            {...register('category')}
            type="text"
            required
            placeholder="Category"
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entry
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Output
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
