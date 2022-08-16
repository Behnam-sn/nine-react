import { formatDistance } from 'date-fns'

const dateTimeDistanceFilter = (dateValue: string): string => {
  return formatDistance(new Date(dateValue), Date.now(), {
    addSuffix: true
  })
}

interface Props {
  date: string
}

export const DateDistance = ({ date }: Props) => {
  return (
    <div className="text-xs font-light">{dateTimeDistanceFilter(date)}</div>
  )
}
