import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

const Index = () => {
  const filterBar: string[] = ['All', 'Not Collected', 'Collected']
  const date = new Date()
  const formattedDate =
    ('0' + date.getDate()).slice(-2) +
    '/' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    date.getFullYear()
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-100 overflow-hidden">
      <div className="w-full px-4 pt-4">
        <Breadcrumb className="p-4 font-medium bg-white rounded-md">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Package</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full h-full p-4 flex gap-4 overflow-hidden">
        <div className="w-full h-full flex flex-col p-4 bg-white rounded-md">
          <div className="w-full flex justify-between items-center">
            <div className="w-fit rounded-md flex bg-zinc-200 overflow-hidden">
              {filterBar.map((item, index) => (
                <span
                  key={index}
                  className="font-medium px-4 py-2 bg-transparent hover:bg-primary transition-all cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
            <Select defaultValue={'apple'}>
              <SelectTrigger className="w-[180px] h-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 w-full h-full overflow-y-auto flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-md w-full flex flex-col bg-white border cursor-pointer hover:bg-zinc-100 transition-all`}>
                <div className="w-full flex flex-col p-4">
                  <h1 className="text-lg font-medium">P-A10{index}-Sep-2024</h1>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">Owner:</span>
                    <span className="">Bui Hong Bao</span>
                  </div>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">Apartment:</span>
                    <span className="">A.10{index}</span>
                  </div>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="">{formattedDate}</span>
                  </div>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">From:</span>
                    <span className="">Bui Hong Bao</span>
                  </div>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">To:</span>
                    <span className="">Bui Hong Bao</span>
                  </div>
                  <div className="w-full grid grid-cols-[100px_auto] text-sm">
                    <span className="text-muted-foreground">Description:</span>
                    <span className="">Bui Hong Bao</span>
                  </div>
                </div>
                <Separator />
                <div className="w-full flex justify-end py-2 px-4">
                  <span className="text-lg text-red-600 font-medium">
                    Not Collected
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full p-4 bg-white rounded-md lg:block hidden">
          123
        </div>
      </div>
    </div>
  )
}

export default Index
