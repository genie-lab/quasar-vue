<template>
  <q-layout view="lHh Lpr lFf"> login 구현예정 </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import SignInForm from "src/components/auth/SignInForm.vue";
import userApi from "src/apis/userApi";

window.onpopstate = function () {
  history.go(1);
};

export default defineComponent({
  components: { SignInForm },
  name: "Logiin",
  data() {
    return {
      form: null,
      isLoading: false,
    };
  },
  methods: {
    async cbCheckId(id) {
      const field = "mb_id";
      const value = id;
      const result = await userApi.duplicateCheck(
        `/duplicateCheck/${field}/${value}`
      );
      return result;
    },
    async cbCheckEmail(email) {
      const field = "mb_email";
      const value = email;
      const result = await userApi.duplicateCheck(
        `/duplicateCheck/${field}/${value}`
      );
      return result;
    },
    async save(form) {
      const result = await userApi.create(form);
      if (result.status == 200) {
        this.$q.notify({
          type: "info",
          message: `${result.data.mb_id}님 환영합니다.`,
        });
        this.$router.push("/login");
      }
    },
  },
});
</script>

<style lang="scss">
.my-container {
  margin: 0 auto;
}
.my-login {
  width: 100vw;
  height: 100vh;
  background: rgb(255, 221, 192);
}
</style>
