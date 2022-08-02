import { mock } from "mockjs"
import requestlist from "./requestlist"

const isMock = process.env.REACT_APP_MOCK

type listItem = {
  [key: string]: (req: any) => any
}


if (isMock) {
  requestlist.forEach((item: listItem) => {
    for (let key in item) {
      let tempArr = key.split(' ')
      let method = tempArr[0]
      let url = tempArr[1]
      let response = item[key]
      mock(url, method, response)
    }
  })
}
