<template>
  <main>
    <div class="row p-3 m-auto shadow">
      <div class="col p-4 text-center">
        <img :src="require('@/assets/blog_sign_up_image1.jpg')" />
        <div>
          <router-link to="/Signup/">
            <small class="fs-5">create an account</small>
          </router-link>
        </div>
      </div>

      <div class="col p-5">
        <form action="" method="post" @submit.prevent="login()">
          <h4 class="fw-bold">Sign In</h4>
          <div class="border-bottom inp_div form-group">
            <i class="fas fa-envelope"></i>
            <input
              v-model="state.FormData.email"
              class="border-0 p-3 inmp"
              type="email"
              placeholder="Type email here"
            /><br />
            <span class="text-danger" v-if="v$.FormData.email.$error">{{
              v$.FormData.email.$errors[0].$message
            }}</span>
          </div>
          <div class="border-bottom inp_div">
            <i class="fas fa-lock"></i>
            <input
              v-model="state.FormData.password"
              class="border-0 p-3 inmp"
              type="password"
              placeholder="Input password here"
            /><br />
            <span class="text-danger" v-if="v$.FormData.password.$error">{{
              v$.FormData.password.$errors[0].$message
            }}</span>
          </div>
          <div class="form-group mt-2">
            <input class="m-1 p-1" type="checkbox" />
            <small>Remember me</small>
          </div>
          <div>
            <button type="submit" class="btn btn-info fw-bold">Sign In</button>
          </div>

          <div class="mt-4">
            <span>or log in with</span>
            <span>
              <i
                class="
                  fab
                  fa-facebook
                  bg-primary
                  text-white
                  fs-5
                  rounded
                  p-2
                  m-2
                "
              ></i>
              <i
                class="
                  fab
                  fa-twitter
                  bg-warning
                  text-secondary
                  fs-5
                  rounded
                  p-2
                  m-2
                "
              ></i>
              <i class="fab fa-google bg-danger rounded fs-5 p-2 m-2"></i>
            </span>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
 
<script>
import { log_in } from "../service/login.service";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import store from "../store";
export default {
  setup() {
    const state = reactive({
      FormData: {
        email: "",
        password: "",
        // confirm_password: ''
      },
    });

    const rules = computed(() => {
      return {
        FormData: {
          email: { required, email },
          password: { required },
        },
      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },

  methods: {
    login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push({ path: "/Allpost" });
        log_in(this.state.FormData)
          .then((res) => {
            console.log(res);
            localStorage.setItem("_token", res.data.token);

            this.$notify({
              title: "log_in",
              message: res.data.message,
              type: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            this.$notify({
              title: "log_in",
              message: err.response.data.message,
              type: "warning",
            });
          });
        console.log(this.state.FormData);
      }
    },
  },
};
</script>

<style>
.inmp {
  width: 300px;
  caret-color: aqua;
}
.inp_div {
  width: fit-content;
  margin: 0;
}
input {
  outline: none;
}
</style>