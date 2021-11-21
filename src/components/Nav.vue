
<template>
  <main>
    <nav class="navbar container">
      <!-- <div class="bg-danger"> -->
      <router-link to="/" class="navbar-brand">
        <h3>Blog</h3>
      </router-link>
      <!-- </div> -->
      <div>
        <ul class="nav">
          <li class="nav-item" v-for="item in menus" :key="item">
            <router-link class="nav-link" :to="item.path">{{
              item.value
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "daniel",
      menus: [
        { value: "Login", path: "/login" },
        { value: "PostBlog", path: "/postBlog" },
        { value: "SignUp", path: "/signup" },
      ],
    };
  },
};
</script>

<style>
</style>