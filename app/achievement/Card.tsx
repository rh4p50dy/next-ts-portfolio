import { Blog } from "@/types"

function Card({ Achievement }: { Achievement: Blog }) {
    const  { image, title, content , org } = Achievement
  return (
    <div className='transition ease-in-out duration-[2000ms]'>
        <div className='max-h-[600px] border-s-2 border-[#18171744] hover:border-accent bg-[#18171744] hover:bg-[#222222] px-[5%] py-[3%] flex flex-col items-center'>
            <div className=" w-full overflow-hidden z-1">
                <img src={`/achievement/${image}`} alt="" className="w-full z-10"/>
            </div>
            <div className="mt-[3%]">
                <h1 className="lg:text-xl text-lg text-accent font-600 mt-[2%]">{title}</h1>
                <p className="lg:text-sm text-xs opacity-50">Issued By {org}</p>
                <p className="lg:mt-[2%] mt-[4%] opacity-80 leading-[22px] text-sm lg:text-base lg:text-start text-justify">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default Card