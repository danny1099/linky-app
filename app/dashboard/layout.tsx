import { getCurrentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Header } from '@/components/header'

export default async function Layout({ children }: Children) {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/api/auth/login')
  }

  return (
    <div className='h-screen bg-gray-50 flex flex-col'>
      <Header user={user} />
      {children}
    </div>
  )
}
