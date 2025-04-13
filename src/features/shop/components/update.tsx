import { Loader } from 'lucide-react'

export default function Update() {
  return (
    <div className='flex h-full items-center justify-center gap-2'>
      <Loader className='animate-spin text-primary' size={14} />
      <span className='text-primary text-xs'>Chức năng hiện chưa phát triển!</span>
      <Loader className='animate-spin text-primary' size={14} />
    </div>
  )
}
