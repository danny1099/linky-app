export const baseColors = {
  red: ['text-red-700', 'bg-red-500', 'bg-red-50'],
  green: ['text-green-700', 'bg-green-500', 'bg-green-100'],
  blue: ['text-blue-700', 'bg-blue-500', 'bg-blue-50'],
  yellow: ['text-yellow-700', 'bg-yellow-500', 'bg-yellow-50'],
  purple: ['text-purple-700', 'bg-purple-500', 'bg-purple-50'],
  pink: ['text-pink-700', 'bg-pink-500', 'bg-pink-50'],
  gray: ['text-gray-700', 'bg-gray-500', 'bg-gray-50'],
  orange: ['text-orange-700', 'bg-orange-500', 'bg-orange-50'],
  cyan: ['text-cyan-600', 'bg-cyan-500', 'bg-cyan-50']
}

export type BaseColors = keyof typeof baseColors
