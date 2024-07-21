import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

interface Links {
    name: string
    path: string
}

interface Icons {
    icon: IconDefinition
    link: String
}

interface TeamMate {
    name: string
    role: string
    src: string
    des: string
    icons: Icons[]
}

interface Blog {
    image: string
    title: string
    content: string
    org: string
}
export type { Links, Icons, TeamMate , Blog}