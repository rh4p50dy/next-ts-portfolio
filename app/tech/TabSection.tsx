import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function TabSection({child1, child2}:{child1:React.ReactNode, child2:React.ReactNode}) {
  return (
    <div className="">
      <div className="flex flex-col items-center mx-auto">
        <div className="text-[20px] text-accent font-[600] my-[1%]">Skills and Education</div>
        <div className="opacity-70 text-center text-sm lg:w-[70%] leading-6 lg:leading-loose lg:text-base">I possess expertise in both development and security domains, complemented by my educational background.</div>
      </div>
      <Tabs defaultValue="account" className="py-[2%]">
      <TabsList className="bg-inherit flex justify-center lg:w-[30%] w-[80%] mx-auto transition-all">
          <TabsTrigger value="account" className="lg:text-xl w-1/2 transition-all">Development</TabsTrigger>
          <TabsTrigger value="password" className="lg:text-xl w-1/2 transition-all">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="account">{child1}</TabsContent>
      <TabsContent value="password">{child2}</TabsContent>
      </Tabs>
    </div>
  )
}

export default TabSection