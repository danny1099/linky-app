import { APP_NAME } from '@/config/constants'
import { Heading, Text, Checkbox, Icon, Divider, Button } from '@/modules/common/components'
import { LinkUrl } from '@/modules/links/types'

export const LinkCard = ({ title, short_url, slug, original_url, qr_url, timeLapse }: LinkUrl) => {
  return (
    <li className="flex w-full flex-row gap-x-2 rounded-md border border-border px-3 py-2 shadow-sm">
      <Checkbox className="border-input" />
      <div className="flex h-28 w-full flex-1 flex-col gap-1 px-2 py-1 md:px-4">
        <Heading type="h3" className="text-xl leading-none tracking-tight hover:underline">
          {title}
        </Heading>
        <Text className="font-medium text-tertiary">{`${APP_NAME.toLowerCase()}/${slug || short_url}`}</Text>
        <Text className="mt-1 line-clamp-1 w-40 text-ellipsis text-2xs text-foreground-muted md:w-[55%]">
          {original_url}
        </Text>

        <div className="mt-auto flex flex-row items-center gap-x-4">
          <Icon name="clipboard" className="size-4" />
          {qr_url && <Icon name="qr-code-scan" className="size-4" />}
          {timeLapse && <Icon name="clock-history" className="size-4" />}
          <Divider type="vertical" className="h-5" />
          <Icon name="tags" className="size-4" />
        </div>
      </div>

      <div className="flex h-full w-10 flex-row justify-end gap-x-2 p-1 md:w-auto">
        <Button variant="outline" size="sm" slot="start" icon="pencil-square" className="hidden md:flex">
          Edit
        </Button>
        <Button variant="ghost" size="icon" icon="trash" className="hidden size-8 md:flex" />
        <Button variant="ghost" size="icon" icon="three-dots-vertical" className="size-8 md:hidden" />
      </div>
    </li>
  )
}
