import { Links } from '@/types'
import ProjectCard from "./ProjectCard"

function Section({ SectionName , Text1 = "Tech " ,Text2= "Stack", start}: { SectionName: Links[] , Text1?:string, Text2?:string, start?:string }) {
  return (
    <>
    <h1 className={`lg:text-2xl mt-[4%] mb-[2%] text-xl font-semibold`}>
                    
                    <span className="text-accent">{Text1}</span>
                    {Text2}
                    
    </h1>
    <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-[50px] gap-[20px]">
            {
                SectionName.map((icon, index)=>(
                    <ProjectCard key={index} source={icon}/>
                ))
            }
    </div>
    </>
  )
}

export default Section