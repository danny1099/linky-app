export interface DataStats {
  title: string
  icon: string
  render: {
    value: string
    badge?: string
  }
  className?: string
}

export const dataStats: DataStats[] = [
  {
    title: 'Links',
    icon: 'link',
    render: {
      value: '50',
      badge: '+10%'
    }
  },
  {
    title: 'Clicks',
    icon: 'mouse',
    render: {
      value: '1.200',
      badge: '-13%'
    }
  },
  {
    title: 'Countries',
    icon: 'globe2',
    render: {
      value: '20',
      badge: '+3%'
    },
    className: 'max-sm:hidden'
  }
]
