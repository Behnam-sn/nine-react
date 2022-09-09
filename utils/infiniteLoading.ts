import type { IdModel } from '@/models/id.model'

export const uniqueItems = (newItems: IdModel[]) => {
  // const filteredArr = arr.reduce((acc, current) => {
  //     const x = acc.find(item => item.id === current.id);
  //     if (!x) {
  //       return acc.concat([current]);
  //     } else {
  //       return acc;
  //     }
  //   }, []);

  const uniqueIds: number[] = []

  const uniqueItems = newItems.filter(element => {
    const isDuplicate = uniqueIds.includes(element.id)

    if (!isDuplicate) {
      uniqueIds.push(element.id)

      return true
    }

    return false
  })

  return uniqueItems
}
