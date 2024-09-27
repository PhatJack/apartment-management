import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface UserDetailProps {
  index: number
  setShowDetail: (index: number | null) => void
}

const UserDetail = ({ index, setShowDetail }: UserDetailProps) => {
  return (
    <div
      onClick={() => setShowDetail(null)}
      className={`fixed top-0 ${
        index ? 'right-0 animate-in fade-in-0 duration-300' : 'right-full'
      } w-full h-screen bg-white/10 z-50 shadow-lg border-l flex justify-end`}>
      <div className="w-1/3 h-full animate-in slide-in-from-right-10 duration-500 relative bg-white shadow-lg border-l">
        {index}
        <Button
          className="absolute top-2 right-2"
          size={'icon'}
          onClick={() => setShowDetail(null)}
          variant={'ghost'}>
          <X size={20} />
        </Button>
      </div>
    </div>
  )
}

export default UserDetail
