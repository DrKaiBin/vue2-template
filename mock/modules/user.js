
const idCards = {
  // 超级管理员
  admin: {
    token: 'admin-token',
    password: 'admin123'
  }
}

const users = {
  'admin': {
    name: 'Super Admin'
  }
}

module.exports = [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { userId, userPassword } = config.body
      const idCard = idCards[userId]
      // mock error
      if (!idCard || userPassword !== idCard.password) {
        return {
          code: 60204,
          message: '账号或密码错误'
        }
      }

      return {
        code: 20000,
        data: idCard.token
      }
    }
  },

  // get user info
  {
    url: '/user/info',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/parameter/query',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          result: 666
        }
      }
    }
  }
]
