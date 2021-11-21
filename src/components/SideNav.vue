<template>
  <main>
    <el-row>
      <el-col>
        <div class="grid-content">
          <ul class="list-group navbar-nav">
            <li
              v-for="items in side_nav"
              :key="items"
              class="list-group-item bg-dark text-light nav-item"
            >
              <router-link class="nav-link" :to="items.path">
                <i class="mx-1" :class="'fa ' + items.icon"></i>
                {{ items.value }}
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  data() {
    return {
      side_nav: [
        // { value: "Post", icon: " fa-thumbtack", path: "Post" },
        { value: "All Post", icon: "fa-newspaper", path: "allpost" },
        { value: "Add New", icon: "fa-plus-square", path: "PostBlog" },
        { value: "Categories", icon: "fa-align-justify", path: "Categories" },
        // { value: "Tags", icon: "fa-tags" },
        { value: "Media", icon: "fa-radiation-alt", path: "Media" },
        { value: "Pages", icon: "fa-file-word", path: "Pages" },
        { value: "Comment", icon: "fa-comments", path: "Comment" },
        // { value: "Appearance", icon: "fa-ghost" },
        // { value: "Plugins", icon: "fa-plug" },
        { value: "Users", icon: "fa-users", path: "User" },
        { value: "Tools", icon: "fa-toolbox", path: "Post" },
        { value: "Settings", icon: "fa-cogs", path: "Settings" },
        { value: "About US", icon: "fa-address-card", path: "About" },
      ],
    };
  },
};
</script>

<style>
.nav-link {
  text-decoration: none;
}
</style>