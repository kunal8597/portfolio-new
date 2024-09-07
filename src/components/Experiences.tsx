
import Header from "./Header";
import Particles from "./Particles";

export default function Experiences() {
  return (
    <div className="grid grid-rows pt-24 items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Header/>
   
    <Particles
         className="absolute inset-0 -z-10 animate-fade-in"
         quantity={360}
       />
  <div className="sm:py-6">
<div className="grid grid-cols-1 gap-10">
  
  <div>
    <p className="text-lg font-semibold text-teal-500 ">The Lantern Tribe</p>
    <p className="text-xs md:text-sm text-gray-400">January 2023 – Februrary 2023 | Content Writer| New Delhi, India</p>
    <ul className="list-disc list-inside mt-2 md:text-base text-sm font-[family-name:var(--font-geist-mono)] ">
    <li>Edited and proofread articles for accuracy and clarity, ensuring quality and consistency in the published content.</li>
    <li>Researched and wrote stories that generated public awareness and discussion on important social issues.</li>
    <li>Collaborated with cross-functional teams to ensure content alignment with brand guidelines.</li>
    </ul>
  </div>


</div>
</div>
</div>
  )}