import React from 'react'
import CustomButton from '../CustomButton'

const Home = () => {
  return (
    <div className="flex flex-col gap-2">

      <header className='ml-4'>
        <h1 className="text-3xl font-bold">
          Encontre o melhor café para você
        </h1>
        <p className="text-xl">do forte ao Premium aqui, você encontra tudo!</p>
        <CustomButton 
          title="saiba mais"
          styles="bg-orange-400 text-amber-100 mt-2 px-4 py-2 rounded-full"  
        />
      </header>
      <div>

        <div className="w-full h-[590px] overflow-hidden relative ">
          <img 
            className=" absolute top-0 rotate-90 translate-x-[200px]"
            src="./blob.svg" 
            alt="efeito blob" 
          />
          <img
            className="absolute max-w-[800px]" 
            src="./coffee-bg.png" 
            alt="xicara de café" 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
