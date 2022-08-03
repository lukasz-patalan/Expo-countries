import { IUseCountry } from '../api/useCountry'

export const getSortedArray = (array?: IUseCountry[]) => {
  return !!array?.length
    ? [...array]?.sort(function (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    : []
}
