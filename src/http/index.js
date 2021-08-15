import axios from "axios"

export const getList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = {
        users: [
          { userId: "239", userName: "黄珊1", bbCode: "BB00116", employeeCode: "10000029" }
        ]
      };
      // let list
      // if (label) {
      //   list = res.filter(item => item.label === label)
      // } else {
      //   list = res
      // }
      resolve({
        data: res
      })
    }, 3000)
  })
}

export const testApi = (keyword) => {
  return axios({
    method: 'post',
    url: `https://cloud-api.ibaibu.com/authManage/user/search/${keyword}?currentUserId=721&workerId=721&currentUserName=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&currentUserCode=BB00000`,
    headers: {
      'current-department-id': 112,
      'current-user-id': 721,
      'current-user-name': '%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98'
    }
  })
}