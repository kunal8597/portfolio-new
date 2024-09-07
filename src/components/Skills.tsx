import Header from "./Header"
import Particles from "./Particles"


export default function Projects() {
  return (
   
    <div className="grid grid-rows pt-24 items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Header/>
  
   <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={460}
      />
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 place-items-center ">
      <p>
        <strong className="text-orange-400 italic">Languages</strong>
        <br /> 
        Java, Javascript, Typescript, SQL, Python
        
      </p>
      <p>
        <strong className="text-cyan-500 italic font-semibold">
            Technologies/Frameworks</strong>
        <br/> React, Next.Js, Node.Js, Express, MongoDB, PostgreSQL
      </p>
      <p>
        <strong className="text-fuchsia-700 italic font-semibold">Developer Tools</strong>
        <br />Amazon Web Services, VS Studio, Git, Github
      </p>
      <p className="text-left mb-7">
        <strong className="text-indigo-400 italic font-semibold ">Miscellaneous</strong>
        <br /> Figma, Postman, Tailwind, APIs
      </p>
    
    </div>
    
    </div>
  )}