<template>
  <div>
    login
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    // 登录
    login() {
      const user = {
        userId: "admin",
        userPassword: "admin123",
      }
      this.$store.dispatch('user/login', user).then(() => {
        this.$router.push('/')
      })
    },
  },
};
</script>

<style></style>
