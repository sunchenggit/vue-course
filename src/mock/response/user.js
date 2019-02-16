import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (config) => {
  const template = {
    'str|2-4': 'sun',
    'name|5': 'cheng',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool1|1-9': true,
    'obj|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': ['a','b','c','d','e','f'],
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[0-9][a-z]/,
    'email': Random.email(),
    'emaila': Mock.mock('@email'),
    'img': Random.image('200x200','#ff0000','#ffffff','jpg','suncheng'),
    'rang': Random.range(3,9,2),
    'date': Random.date('yyyy-MM-dd'),
    img_base64: Random.dataImage('200x300', 'cuncheng'),
    color: Random.color(),
    cqord: Random.cword('按时大撒大撒', 2,5)
  }
  /*let i = 3
  let arr = []
  while (i--) {
    arr.push(template)
  }*/
  return Mock.mock(template)
}
