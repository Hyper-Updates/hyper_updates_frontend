import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { features } from 'process';
import { SiNextdotjs } from "react-icons/si";


type feature = {
  key: number;
  name: string;
  description: string;
  icon: string;
}
export default function Home() {
  const features: feature[] = [
    {
      key:1,
      name: "Feature name",
      description: " Some Feature description will come here",
      icon: "SiNextdotjs"
    },
    {
      key:1,
      name: "Feature name",
      description: " Some Feature description will come here",
      icon: "SiNextdotjs"
    }, {
      key:1,
      name: "Feature name",
      description: " Some Feature description will come here",
      icon: "SiNextdotjs"
    }, {
      key:1,
      name: "Feature name",
      description: " Some Feature description will come here",
      icon: "SiNextdotjs"
    }, {
      key:1,
      name: "Feature name",
      description: " Some Feature description will come here",
      icon: "SiNextdotjs"
    },
  ]
  return (

    <main className=''>
      <div className='flex flex-row px-40 h-screen'>
        <Image src='/image.png' alt='' fill className='-z-0 opacity-30' />
        <div className='flex flex-col mt-auto mb-14 z-30'>
          <div className='flex flex-col gap-4'>
            <button className='bg-slate-200 w-fit -mb-2 px-4 py-1 text-sm rounded-full'>Like our project on devpost</button>
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
      <div className='flex flex-wrap items-center justify-center gap-10 lg:px-60 py-40 bg-[#181c2e] text-white' style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 90%, 0 100%)' }}>

        <div className='w-80'>
          <p className='text-4xl font-bold leading-relaxed'>Explore What <span className='text-[#E84142]'>Hyper Updates</span> Provides</p>
        </div>
        {features.map((data) => (
          <div key={data.key} className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-[1.02]'>
            <div className='flex flex-col z-10  w-80 h-60 rounded p-5 bg-[#181c2e]' style={{ clipPath: 'polygon(0 0,calc(100% - 80.00px) 0,100% 80.00px,100% 100%,0 100%)' }}>
              <div className='text-5xl pb-5'>
                <SiNextdotjs />
              </div>
              <p className='font-bold text-2xl pb-6'>{data.name}</p>
              <p>{data.description}</p>
            </div>
          </div>
        ))}

      </div>
      <div className=' px-40 flex flex-row gap-10 items-center justify-center py-20'>
        <p className='text-5xl font-bold'>Built on</p>
        <div className='relative w-40 h-40'>
          <Image src="/avalanche-avax-logo.png" alt="" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </main>
  )
}
