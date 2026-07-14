import { IconTransfer, IconDeposit } from './Icons'

const transactionIconMap = {
  transfer: IconTransfer,
  deposit: IconDeposit,
} as const

export interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  iconKey: 'transfer' | 'deposit'
}

interface Props {
  transactions: Transaction[]
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-white">
      {/* Handle bar */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-10 h-1 rounded-full bg-[#E0E0E0]" />
      </div>

      <div className="px-5">
        {transactions.map((tx) => {
          const Icon = transactionIconMap[tx.iconKey]
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between py-[15px]"
            >
              {/* Right: icon + details */}
              <div className="flex items-center gap-[15px] flex-grow">
                {/* Icon circle */}
                <div className="flex-shrink-0 w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#f1f3f7] text-[#b0b0b0]">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <div className="flex flex-col items-start">
                  <div className="text-[16px] font-[400] text-[#333333] mb-1">
                    {tx.title}
                  </div>
                  <div className="text-[12px] text-[#AAAAAA] text-left">
                    {tx.date}
                  </div>
                </div>
              </div>

              {/* Left: amount */}
              <div className="text-[16px] font-[400] text-[#333333] whitespace-nowrap flex-shrink-0">
                {tx.amount}
              </div>
            </div>
          )
        })}

        {/* Extra spacer items for scroll */}
        <div className="h-16" />
        <div className="h-16" />
      </div>
    </div>
  )
}
