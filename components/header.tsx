import { Logo } from '@/components/ui/logo'
import { Avatar } from '@/components/ui/avatar'

interface HeaderProps {
  user: {
    avatar: string | null
    name: string | null
    id: string
    kindeId: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
}

export const Header = ({ user: { avatar } }: HeaderProps) => {
  return (
    <header className='bg-white'>
      <div className='container mx-auto px-4 py-3 md:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Logo />
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
              <p className='text-gray-600 text-xs -mt-1'>Manage your shortened URLs</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Avatar src={avatar || ''} />
          </div>
        </div>
      </div>
    </header>
  )
}
