'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Particles from "@/components/Particles";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2700); 
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="grid grid-rows pt-24 items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Header/>
   
   <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className={`text-3xl sm:text-3xl font-[family-name:var(--font-geist-mono)] text-green-600 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          kunal mathur
        </div>
        
          <p className=" text-s sm:text-s font-[family-name:var(--font-geist-mono)]">
            hello 🙋🏻‍♂️, I am kunal - a programmer lol. Proficient in web development but also likes to explore other domains of tech.
            
            </p>
           
            
           
            
          < p className="font-[family-name:var(--font-geist-mono)]">
         Apart from coding, I watch sports (a lot), especially cricket 🏏. I write sometimes, do checkout my articles below.
          </p>
       

        

        

        <div className="flex gap-4 items-center  sm:flex-row">
              <div className="items-right">resume  → </div>
          <a
            className="rounded-full border border-solid border-black dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-3 sm:px-5 sm:min-w-35.5"
            href="https://drive.google.com/file/d/1oHhOEKe8IQVLvtjrUml83OAx-XBW0JxK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >  
            <Image
              className="dark"
              src="/images/resume-business-cv-work-job-curriculum-svgrepo-com.svg"
              alt="Resume icon"
              width={22}
              height={20}
              style={{ filter: "brightness(0) invert(1)" }}
  
            />
            
            
          </a>
         
         
        </div>
        
      </main>
       
      <Footer/>
     
    </div>
  );
}
