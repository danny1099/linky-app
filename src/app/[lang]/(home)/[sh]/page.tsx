interface ShortenProps extends Children {
  params: { sh: string }
}

export default async function Shorten({ params }: ShortenProps) {
  const { sh: shortenUrl } = await params

  return (
    <section>
      <h1>Shorten</h1>
      <p>{shortenUrl}</p>
    </section>
  )
}
