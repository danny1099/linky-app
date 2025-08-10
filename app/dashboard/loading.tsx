import { Loader } from 'lucide-react'

export default async function Loading() {
  return (
    <div className='bg-background flex h-screen flex-row items-center justify-center'>
      <Loader className='animate-spin mr-2' />
      <div className='flex flex-col'>
        <h5 className='text-foreground text-sm font-medium'>Please wait...</h5>
        <p className='-mt-0.5 text-xs'>We are organizing some things for you</p>
      </div>
    </div>
  )
}
