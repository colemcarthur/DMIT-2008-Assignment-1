import Image from 'next/image'
import pepperLogo from "@/public/img/pepper_logo.png"

function Navigation({ children }) {
  return (
    <div className='p-4 px-10 bg-stone-900 font-bold'>
      <div className='flex items-center justify-between max-w-[80rem] m-auto'>
        <div className="flex items-center gap-2">
          <Image src={pepperLogo} alt="Pepper Plus Logo" className='w-[5rem] h-[5rem]' />
          <h1 className="text-red-600 text-xl">Peppers Plus</h1>
        </div>
        <nav>
          <ul className='flex gap-4 items-center text-stone-300'>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export { Navigation }