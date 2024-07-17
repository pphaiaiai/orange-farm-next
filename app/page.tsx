import Image from 'next/image'
import Login from '@/components/form/login' // Correctly import the Login component

import logo from '../public/assets/orange-farm-logo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        src={logo}
        alt="OrangeFarm Logo"
        width={100}
        height={100}
        className="mb-4"
      />
      <div className="flex item-center">
        <h1 className="text-4xl font-bold px-2 text-orange-main">Orange</h1>
        <h1 className="text-4xl font-bold px-2">Farm</h1>
      </div>
      <Login />
    </main>
  )
}
