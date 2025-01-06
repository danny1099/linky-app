import { Avatar, Text } from '@/modules/common/components'

export const LoggedUser = () => {
  const user = 'Danny Alexander'

  return (
    <div className="flex h-11 cursor-pointer flex-row items-center justify-end gap-x-2 rounded-md bg-secondary px-2">
      <div className="flex flex-col">
        <Text className="font-medium tracking-tight text-foreground">{user}</Text>
        <span className="-mt-0.5 text-3xs text-foreground-muted">Free Plan</span>
      </div>
      <Avatar src="/images/img-avatar.png" size="md" />
    </div>
  )
}
