<template>
  <main>
    <h5>Login works !!!</h5>
    <div class="row p-3 m-auto shadow">
      <div class="col p-5 shadow-sm">
        <form action="" method="post" @submit.prevent="signUp()">
          <h4 class="fw-bold">Sign Up</h4>
          <div class="border-0 inp_div form-group m-2">
            <i class="fas fa-user fs-5"></i>
            <input
              v-model="state.FormData.name"
              class="border-0 p-2 border-bottom inmp fs-5"
              type="text"
              placeholder="Username"
            /><br />
            <small class="text-danger" v-if="v$.FormData.email.$error">{{
              v$.FormData.name.$errors[0].$message
            }}</small>
          </div>
          <div class="inp_div form-group m-2">
            <i class="fas fa-envelope fs-5"></i>
            <input
              v-model="state.FormData.email"
              class="border-0 border-bottom p-2 inmp fs-5"
              type="email"
              placeholder="Type email here"
            /><br />
            <small class="text-danger" v-if="v$.FormData.email.$error">{{
              v$.FormData.email.$errors[0].$message
            }}</small>
          </div>
          <div class="inp_div form-group m-2">
            <i class="fas fa-lock fs-5"></i>
            <input
              v-model="state.FormData.password"
              class="border-0 border-bottom p-2 inmp fs-5"
              type="password"
              placeholder="Password"
            /><br />
            <span class="text-danger" v-if="v$.FormData.password.$error">{{
              v$.FormData.password.$errors[0].$message
            }}</span>
          </div>
          <div class="inp_div form-group m-2">
            <i class="fas fa-lock fs-5"></i>
            <input
              v-model="state.FormData.confirm_password"
              class="border-0 border-bottom p-2 inmp fs-5"
              type="password"
              placeholder="Confirm password"
            /><br />
            <span
              class="text-danger"
              v-if="v$.FormData.confirm_password.$error"
              >{{ v$.FormData.confirm_password.$errors[0].$message }}</span
            >
          </div>
          <div class="form-group mt-2">
            <input class="m-1 p-1" type="checkbox" />
            <small>Agree to terms and condition</small>
          </div>
          <div class="m-2 text-center">
            <button class="btn btn-info fw-bold">Register</button>
          </div>
        </form>
      </div>
      <div class="col p-4 text-center">
        <img :src="require('@/assets/blog_form_image1.jpg')" />
      </div>
    </div>
  </main>
</template>

<script>
import { register } from "../service/login.service";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      FormData: {
        name: "",
        email: "",
        password: "",
        // confirm_password: ''
      },
    });

    const rules = computed(() => {
      return {
        FormData: {
          name: { required },
          email: { required, email },
          password: { required, minLength: minLength(6) },
          confirm_password: {
            required,
            sameAs: sameAs(state.FormData.password),
          },
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
    signUp() {
      console.log(this.state.FormData);
      this.v$.$validate();
      if (!this.v$.$error) {
        register(this.state.FormData)
          .then((res) => {
            console.log(res);
            console.log(this.state.FormData);
            this.$router.push({ path: "/Login/" });
          })
          .catch((err) => {
            console.log(err);
          });
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