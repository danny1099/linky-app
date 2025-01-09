export interface LinkUrl {
  id: string
  title: string
  slug: string | null
  qr_url: string
  original_url: string
  short_url: string
  owner_id: string
  timeLapse: Date | null
  createdAt: Date
  updatedAt: Date
  tags: string | null
}

export type LinkUrlKeys = keyof LinkUrl
