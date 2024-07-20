import Icon from "@/components/HomePage/Icon"
import { TeamMate } from "@/types"


function MemberCard({member}:{member:TeamMate}) {
  const {name, role, src, des, icons} = member
  return (
    <div className="lg:flex-grow w-full p-3 m-3 opacity-70 hover:opacity-100 transition-opacity ">
        <div className="flex flex-col lg:px-[30px] lg:pt-[30px] px-[5%] pt-[3%]">
            <div className="flex lg:mb-[30px] mb-[10px] lg:items-start items-center">
                <p className="lg:text-[30px] text-[20px] text-accent lg:w-1/2 w-3/4 lg:pt-[32%] pt-[16%] font-bold">{name}<span className="hidden lg:block text-lg ms-[3px] font-semibold text-white">{role}</span></p>
                <div className={`border-2 mx-auto border-accent border-dashed custom-border rounded-full lg:h-[240px] lg:w-[240px] h-[120px] w-[120px]`}>
                    <div className={`rounded-full mx-[9px] my-[9px] lg:my-[20px] lg:mx-auto lg:h-[200px] lg:w-[200px] h-[100px] w-[100px] overflow-hidden`}>
                        <img className={`lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]`} src={src} alt="my profile" />
                    </div>
                </div>
            </div>
            <div className=" lg:text-[15px] text-[12px] lg:mb-[30px] mb-[30px] text-justify">
            <div className="lg:hidden text-[16px] font-semibold text-white">{role}</div>
                <div className="opacity-50">{des}</div>
            </div>
            <div className="text-center flex lg:justify-center justify-between">
            {
                icons.map((icon, index) => (
                    <Icon key={index} source={icon}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default MemberCard