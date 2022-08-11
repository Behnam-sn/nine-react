import { formatDistance } from 'date-fns'

export const dateTimeDistanceFilter = (dateValue: string): string => {
  return formatDistance(new Date(dateValue), Date.now(), {
    addSuffix: true
  })
}
