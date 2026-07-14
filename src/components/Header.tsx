import { IconHelp, IconBell, IconSearch, IconDropdown, IconEye, IconReport, IconPulse, IconPlusFilled } from './Icons'

export default function Header() {
  return (
    <header className="relative w-full pt-[30px] text-white" style={{ background: 'linear-gradient(2deg, rgb(3 50 121) 0%, rgb(29 107 221) 100%)' }}>
      {/* Top row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-0">
        <div className="header-icon cursor-pointer">

        </div>
        <div className="flex items-center gap-[15px]">
          <div className="header-icon cursor-pointer">
            <IconSearch />

          </div>
          <div className="header-icon cursor-pointer">
            <IconBell />
          </div>
          <div className="header-icon cursor-pointer">

            <IconHelp />
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="mt-6 mb-6 text-center">
        <div className="text-[32px] font-medium leading-none mb-3">
          ۱۵,۰۲۲,۰۰۰ ریال
        </div>
        <div className="flex items-center justify-center gap-3 text-[14px] opacity-80">
          <div className="cursor-pointer">
            <IconEye />
          </div>
          <div>موجودی</div>
          <div className="cursor-pointer">
            <IconDropdown />
          </div>
        </div>
      </div>

      {/* Quick action circles */}
      <div className="flex justify-around items-start text-center px-4 pb-10">
        {/* شارژ حساب */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="menu-action-icon-circle w-[70px] h-[70px] rounded-full flex items-center justify-center mb-2 bg-white text-[#3E8BFF] font-bold text-[32px]">
            <IconPlusFilled size={14} />
          </div>
          <span className="text-[14px]">شارژ حساب</span>
        </div>


        {/* باکس */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="menu-action-icon-circle menu-icon-blue w-[70px] h-[70px] rounded-full flex items-center justify-center mb-2">
            <IconPulse size={30} />
          </div>
          <span className="text-[14px]">باکس</span>
        </div>

        {/* گزارش مالی */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="menu-action-icon-circle menu-icon-blue w-[70px] h-[70px] rounded-full flex items-center justify-center mb-2">
            <IconReport size={30} />
          </div>
          <span className="text-[14px]">گزارش مالی</span>
        </div>
      </div>
    </header>
  )
}
