import Mock from "mockjs"
import { getUserInfo } from './response/user'

Mock.mock('http://localhost:3000/getUserInfo', 'post', getUserInfo)
Mock.setup({
  timeout: 500
})
export default Mock
