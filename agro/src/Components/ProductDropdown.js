import Link from 'next/link'

export default function ProductDropdown() {
  return (
    <div className="absolute z-10 mt-2 w-48 bg-white rounded shadow-lg py-2">
      <Link href="/products/rent-your-land" className="block px-4 py-2 text-green-800 hover:bg-green-100">
        Rent Your Land
      </Link>
      <Link href="/products/buy-plants" className="block px-4 py-2 text-green-800 hover:bg-green-100">
        Buy Plants
      </Link>
      <Link href="/products/sell-harvest" className="block px-4 py-2 text-green-800 hover:bg-green-100">
        Sell Harvest
      </Link>
      <Link href="/products/lectures" className="block px-4 py-2 text-green-800 hover:bg-green-100">
        Lectures
      </Link>
      <Link href="/products/partnership" className="block px-4 py-2 text-green-800 hover:bg-green-100">
        Partnership
      </Link>
    </div>
  )
}
