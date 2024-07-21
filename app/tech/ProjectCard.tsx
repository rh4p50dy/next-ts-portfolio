import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Links } from "@/types"


function ProjectCard({ source }: { source: Links }) {
    let { name, path } = source
    return (
      <Card className="bg-[#181717cc] border-0 hover:bg-[#222222]">
        <CardHeader>
          <CardTitle className="text-accent h-3/4 lg:p-[20%] p-[5px] mx-auto">
            <img src={"/tech" + path} alt="project" />
          </CardTitle>
          <CardTitle className="text-center text-white"><p className="lg:text-base text-[10px]">{name}</p></CardTitle>
        </CardHeader>
      </Card>
    )
}

export default ProjectCard