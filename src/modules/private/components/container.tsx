export const Container = ({ children }: Children) => {
  return (
    <main className="col-span-2 col-start-2 row-start-2 size-full flex-1 overflow-y-auto px-4 py-2 md:pl-5 md:pr-20">
      {children}
    </main>
  )
}
