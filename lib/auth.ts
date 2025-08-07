import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { prisma } from './prisma'

export async function getCurrentUser() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  
  if (!kindeUser?.id) {
    return null
  }

  let user = await prisma.user.findUnique({
    where: { kindeId: kindeUser.id }
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        kindeId: kindeUser.id,
        email: kindeUser.email!,
        name: kindeUser.given_name && kindeUser.family_name 
          ? `${kindeUser.given_name} ${kindeUser.family_name}` 
          : kindeUser.given_name || kindeUser.email!.split('@')[0],
        avatar: kindeUser.picture,
      }
    })
  }

  return user
}