import DataItem from "./DataItem"

function DataPart() {
  return (
    <div className='flex lg:flex-row flex-col justify-between mx-[5%] '>
        <DataItem/>
        <DataItem number="5" text1="Projects" text2="Completed"/>
        <DataItem number="10" text1="Awards" text2="Achieved"/>
        <DataItem number="500" text1="Code" text2="Commits"/>
    </div>
  )
}

export default DataPart