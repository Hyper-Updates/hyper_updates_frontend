import Image from 'next/image'

export default function Home() {
  return (

    <main className=' min-h-screen'>
      <div className='flex flex-row px-40 h-screen'>
          <div className='flex flex-col'>

          </div>
          <div className='ml-auto my-auto'>
            <Image src='/blockchain_doodle_cricle-removebg-preview.png' alt='' width='100' height='100'/>
          </div>
      </div>
    </main>
  )
}
