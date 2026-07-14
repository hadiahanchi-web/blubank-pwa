import { useEffect, useState } from 'react'
import { IconBack, IconHelp, IconShare, IconDownload } from './Icons'

const avatar = 'SC.webp'
const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))

const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']

function toPersianDate(d: Date) {
  const p = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(d)
  const parts = new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(d)
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? ''
  const mi = parseInt(get('month').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())) - 1
  return `${p} ${weekdays[d.getDay()]}، ${get('day')} ${months[mi]} ${get('year')}`
}

interface Props {
  dest: { name: string; account: string; badge: boolean; blue: boolean }
  amount: string
  onBack: () => void
}

export default function TransferReceiptPage({ dest, amount, onBack }: Props) {
  const [date, setDate] = useState('')
  useEffect(() => setDate(toPersianDate(new Date())), [])

  const docNum = fa(String(Date.now()).slice(-10))

  return (
    <div className="flex flex-col h-full bg-white p-5 overflow-y-auto no-scrollbar">
      <header className="flex items-center justify-between mb-[25px] shrink-0">
        <div className="text-primary cursor-pointer" onClick={onBack}><IconBack /></div>
        <div className="text-[18px] font-medium text-[#2B3441]">رسید</div>
        <div className="text-primary cursor-pointer"><IconHelp /></div>
      </header>

      <section className="flex flex-col items-center text-center mb-5 shrink-0">
        <div className="relative mb-3">
          <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden">
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </div>
          {dest.badge && (
            <div className="absolute bottom-0.5 right-0.5 w-[24px] h-[24px] bg-primary rounded-full flex items-center justify-center text-white text-[12px] font-medium border-2 border-white">
              ب
            </div>
          )}
        </div>
        <h2 className="text-[17px] font-medium text-[#2B3441] mb-1">{dest.name}</h2>
        <p className="text-[13px] text-[#879FB1] direction-ltr">{dest.account}</p>
      </section>

      <div className="text-center mb-5 shrink-0">
        <div className="text-[32px] font-medium text-[#2B3441]">{faComma(amount)} ریال</div>
        <div className="text-[14px] text-[#879FB1] mb-4">مبلغ انتقال</div>
        <div className="inline-flex items-center gap-1.5 bg-[#00A884] text-white px-[20px] py-2 rounded-[14px] text-[14px] font-thin">
          <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center ml-1 bg-white  text-[#00A884]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          انتقال موفق
        </div>
      </div>

      <hr className=" border-t-[2.5px] border-dashed border-[#D2DEE8] w-full mb-4 shrink-0" />

      <div className="flex flex-col w-full mb-8 shrink-0">
        {[
          ['زمان', date],
          ['انتقال دهنده', 'علی آهنچیان'],
          ['روش انتقال', 'بلو به بلو'],
          ['سپرده مبدا', 'IR ۴۹ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۵۲۶ ۳۶۷۸ ۰۱'],
          ['شماره سند', docNum],
        ].map(([label, value], i) => (
          <div key={i} className={`flex justify-between items-center py-3.5 ${i < 4 ? 'border-b border-[#F1F4F8]' : ''}`}>
            <span className="text-[14px] text-[#879FB1]">{label}</span>
            <span className={`text-[14px] font-medium text-[#2B3441] ${label === 'سپرده مبدا' ? 'direction-ltr' : ''}`}>{value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-auto mb-16 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start">
            <span className="text-[22px] font-medium text-[#4A5568] font-sans leading-tight">Transfer</span>
            <span className="text-[13px] text-[#879FB1] font-sans">blubank.com</span>
          </div>
          <img src="/blo-icon.png" alt="" className="w-10 " />
        </div>
      </div>

      <div className="flex gap-[15px] w-full pb-2.5 shrink-0">
        <button className="flex-1 h-[80px] bg-[#F0F5FC] text-primary border-none rounded-xl text-[15px] font-medium flex flex-col items-center justify-center gap-2 cursor-pointer">
          <IconShare size={20} />
          <span>اشتراک‌گذاری</span>
        </button>
        <button className="flex-1 h-[80px] bg-[#F0F5FC] text-primary border-none rounded-xl text-[15px] font-medium flex flex-col items-center justify-center gap-2 cursor-pointer">
          <IconDownload size={20} />
          <span>ذخیره در گالری</span>
        </button>
      </div>
    </div>
  )
}
