import { DataStats } from '@/modules/dashboard/types'
import { StatsCard } from '@/modules/dashboard/components'

interface StatsProps {
  data: DataStats[]
}

/* prettier-ignore */
export const Stats = ({ data }: StatsProps) => {
  return (
    <div className="bg-secondary flex h-[4.5rem] w-full flex-row items-center justify-between space-x-2 rounded-lg overflow-x-auto">
      {data.map(({ title, icon, render }, index) => (
        <StatsCard 
          key={index} 
          title={title} 
          value={render.value} 
          icon={icon} 
          badge={render.badge}
        />
      ))}
    </div>
  )
}
