 <template>
  <div class="w-50 mx-auto shadow-sm border p-3 mt-5">
    <h3 class="p-3">Danitife</h3>
    <form action="" method="post" @submit.prevent="login()">
      <div class="form-group">
        <input v-model="post.email" type="email" class="form-control" />
      </div>
      <div class="form-group mt-2">
        <input v-model="post.password" type="password" class="form-control" />
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-success w-100">
          <span>LOGIN</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const http = axios.create({
  baseURL: "localhost:9000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  data() {
    return {
      post: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      http.post("/test", this.post).then((res) => {
        console.log(res);
      });
      console.log(this.post);
    },
  },
};
</script>

<style>
</style>