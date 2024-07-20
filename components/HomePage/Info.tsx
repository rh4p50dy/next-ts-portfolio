import { Download } from "lucide-react"
import { faFacebook, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Icon from "./Icon";
import { Icons } from "@/types";



function Info() {
    const icons: Icons[] = [
        {
            icon: faGithub,
            link: "https://github.com/rh4p50dy",
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/minsittpaingmhuu/",
        },
        {
            icon: faFacebook,
            link: "https://www.facebook.com/matias.smith27",
        },
        {
            icon: faTelegram,
            link: "https://t.me/minnsitt",
        }
    ]
  return (
    <div className='container flex lg:flex-row flex-col items-center'>
        <div className='flex-grow lg:w-1/2'>
            <div className="flex flex-col">
                <div className="font-[600] hidden lg:block">CyberSecurity Student</div>
                <div className="lg:text-[60px] text-[35px] font-[600] lg:mt-[2%] mt-[5%] lg:leading-[60px] leading-[35px]">Hello I'm</div>
                <div className="lg:text-[60px] text-[35px] font-[600] text-accent lg:mt-[2%] lg:leading-[60px] mt-[5%] leading-[35px]">Minn Sitt <span className="hidden lg:inline">Paing</span></div>
                <div className="text-[60px] font-[600] text-accent mt-[2%] leading-[60px] hidden lg:block"> Mhuu...</div>
                <div className="lg:mt-[2%] mt-[5%] text-[15px] opacity-50 lg:w-[75%] text-justify">I am a 19-year-old Cyber Security student with a passion for exploring the intricacies of digital security. My journey in this field has been marked by notable achievements, including representing my nation at the ASEAN Cyber Seagame 2023. Additionally, I am proud to have secured the 1st runner-up position in the Myanmar CyberSecurity Challenge 2023 (MSCS 2023). These experiences have not only honed my technical skills but also fueled my ambition to contribute meaningfully to the cybersecurity landscape. I am eager to continue learning and applying my knowledge to safeguard digital environments and mitigate emerging threats.</div>
                <div className="flex lg:flex-row flex-col justify-between items-center mt-[5%] lg:w-[75%] w-full">
                    <div className="flex-grow lg:w-1/2">
                        <button className="bg-inherit border-2 border-accent text-accent px-6 py-3 rounded-full  hover:bg-accent hover:text-black transition-all duration-200">
                            <p className="items-center">
                            Download CV <Download className="inline w-[20px] h-[20px]"/>
                            </p>
                        </button>
                    </div>
                    <div className="flex-grow lg:w-2/3 lg:mt-0 mt-5">
                        <div className="flex flex-row w-full">
                        {
                            icons.map((icon, index) => (
                                <Icon key={index} source={icon}/>
                            ))
                        }
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className='flex-grow lg:w-1/2 items-center'>
            <div className={`border-2 my-[30px] mx-auto border-accent border-dashed custom-border rounded-full lg:h-[600px] lg:w-[600px] h-[340px] w-[340px]`}>
                <div className={`rounded-full mx-auto lg:my-[50px] my-[20px] lg:h-[500px] lg:w-[500px] h-[300px] w-[300px] overflow-hidden `}>
                    <img className={`lg:h-[500px] lg:w-[500px] h-[300px] w-[300px]`} src='/profile.jpg' alt="my profile" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info