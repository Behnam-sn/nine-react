import { formatDistance } from 'date-fns'

const dateTimeDistanceFilter = (dateValue: string): string => {
  return formatDistance(new Date(dateValue), Date.now(), {
    addSuffix: true
  })
}

interface DateDistanceProps {
  date: string
}

export const DateDistance = ({ date }: DateDistanceProps) => {
  return (
    <div className="text-xs font-light text-primary-800 transition-colors duration-300 dark:text-primary-200">
      {dateTimeDistanceFilter(date)}
    </div>
  )
}
