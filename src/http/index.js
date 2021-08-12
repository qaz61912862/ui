export const getList = (label = '') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = [
        {
          label: 'A',
          value: 'a',
        },
        {
          label: 'B',
          value: 'b',
        },
        {
          label: 'C',
          value: 'c',
        },
        {
          label: 'D',
          value: 'd',
        }
      ]
      let list
      if (label) {
        list = res.filter(item => item.label === label)
      } else {
        list = res
      }
      resolve({
        data: list
      })
    }, 3000)
  })
}