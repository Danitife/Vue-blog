<template>
  <main>
    <span>fghjkjhfdgghjkljh</span>
    <h1>{{ each_blog.author }}</h1>
  </main>
</template>

<script>
import { getPost } from "../service/allPost";
export default {
  data() {
    return {
      id: "",
      eachBlog: {},
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.$route.params.id);
    getPost(this.id)
      .then((res) => {
        this.eachBlog = res.data.posts;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>