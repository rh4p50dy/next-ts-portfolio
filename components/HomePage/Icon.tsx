import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icons } from "@/types";
import { Url } from "next/dist/shared/lib/router/router";

function Icon({source}:{source:Icons}) {
  const {icon, link} = source
  return (
    <div className="lg:mx-4 mx-2">
        <Link href={(link as Url)}>
            <p className="border-2 border-accent rounded-full p-2 text-accent hover:bg-accent hover:text-black transition-all duration-200">
                <FontAwesomeIcon className="w-[20px] h-[20px]" icon={icon} />
            </p>
        </Link>
    </div>
  )
}

export default Icon