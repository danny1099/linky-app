export interface IPData {
  ip: string
  city: string
  country: string
  country_name: string
  latitude: number
  longitude: number
  languages: string
}

export const useIpData = async () => {
  const response = await fetch('https://ipapi.co/json')
  const result = await response.json()

  return result
}
