
import Header from "./Header"
import Particles from "./Particles"


export default function Projects() {
  return (
   
    <div className="grid grid-rows pt-24 items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Header/>
  
   <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={360}
      />
       
  <div className="sm:py-6">
 
<div className="grid grid-cols-1 sm:grid-cols-1 gap-9 place-items-center">
    
  <a href="https://livedocs-lol.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer gap-3 text-center" >
    <p className="text-lg font-semibold text-blue-500">
      LiveDocs
    </p>
    <p className="text-sm text-gray-400 italic"> NextJs, Typescript, Tailwind, ShadCN</p>
  </a>
  <a href="https://github.com/kunal8597/passop" target="_blank" rel="noopener noreferrer" className="cursor-pointer gap-3 text-center">
    <p className="text-lg font-semibold text text-red-500">
     PassOP

    </p>
    <p className="text-sm text-gray-400 italic">React, Tailwind, MongoDB, Express </p>
  </a>
  <a href="https://github.com/kunal8597/pixelquest" target="_blank" rel="noopener noreferrer" className="cursor-pointer gap-3 text-center">
    <p className="text-lg font-semibold text-green-500">
        PixelQuest</p>
    <p className="text-sm text-gray-400 italic"> HTML, CSS, Javascript, Firebase</p>
  </a>
  <a href="https://github.com/kunal8597/http-server" target="_blank" rel="noopener noreferrer" className="cursor-pointer gap-3 text-center">
    <p className="text-lg font-semibold text-yellow-500">
     HTTP Server
    </p>
    <p className="text-sm text-gray-400 italic">Java</p>
  </a>

</div>
</div>
</div>
  )}