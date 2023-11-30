import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (

    <main className=' min-h-screen'>
      <div className='flex flex-row px-40 h-screen'>
        <Image src='/image.png' alt='' fill className='-z-0 opacity-60'/>
        <div className='flex flex-col mt-auto mb-14 z-30'>
          <div className='flex flex-col gap-4'>
            <p className='text-5xl font-semibold'>Decentralized Powers</p>
            <p className='text-5xl font-semibold'>Effortless Update</p>
            <p className='text-xl flex flex-col'><span>Revolutionize your software experience with decentralized updates.</span> <span>Trust, security, and seamless evolution — all in one platform.</span></p>
          </div>
          <Button className='w-fit mt-5'>New Project</Button>
        </div>
        <div className='relative w-[70vh] ml-auto'>
          {/* <Image src='/blockchain_doodle_cricle-removebg-preview.png' alt='' fill
            quality={100}
            style={{
              objectFit: 'contain',
            }}
            className='' /> */}
        </div>
      </div>
    </main>
  )
}
