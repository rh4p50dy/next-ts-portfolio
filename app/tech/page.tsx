import TabSection from "./TabSection"
import TechSection from "./TechSection"
import SecuritySection from "./SecuritySection"


function page() {
  return (
    <div className="px-[10%]">
        <TabSection child1={<TechSection/>} child2={<SecuritySection/>}/>
    </div>
  )
}

export default page