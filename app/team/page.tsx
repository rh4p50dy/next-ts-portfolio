import MeetMyTeam from "./MeetMyTeam"
import MemberCard from "./MemberCard"
import {zyh, tko, sitthway, ronald} from "./Member"


function Team() {
  return (
    <div>
      <MeetMyTeam/>
      <div className="flex lg:flex-row h-full items-center flex-col px-[10%]">
        <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:gap-10 lg:mx-[50px]">
          <MemberCard member={sitthway}/>
          <MemberCard member={tko}/>
        </div>
        <div className="flex-grow lg:w-1/2 flex flex-col lg:gap-10">
          <MemberCard member={zyh}/>
          <MemberCard member={ronald}/>
        </div>
      </div>
    </div>
  )
}

export default Team