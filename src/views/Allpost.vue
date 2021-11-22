<template>
  <main>
    <el-row>
      <el-col :span="5">
        <SideNav style="position: sticky; top: 70px" />
      </el-col>
      <el-col :span="19">
        <div
          v-for="(items, index) in allBlog"
          :key="items.author"
          class="bg-light m-1"
        >
          <router-link :to="'/MoreBlogs/' + items.id" class="router_link">
            <div class="d-flex">
              <div>
                {{ index }}
                <img
                  :src="items.image"
                  alt=""
                  style="width: 100%; height: 150px"
                />
              </div>
              <div>
                <h2>hello wold</h2>
                <div class="d-flex justify-content-between">
                  <h3>{{ items.title }}</h3>
                  <div
                    class="p-1 option_buttons"
                    v-if="what == index"
                    v-click-away="onClickAway"
                  >
                    <ul class="list-group navbar-nav">
                      <li class="list-group-item">
                        <button class="btn btn-secondary btn-sm">
                          <i class="fas fa-edit"></i>
                          <small>Edit</small>
                        </button>
                      </li>
                      <li class="list-group-item">
                        <button
                          class="btn btn-danger btn-sm"
                          @click="_delete(items.id)"
                        >
                          <i class="fas fa-trash-alt"></i>
                          <small class="ms-2">Del</small>
                        </button>
                      </li>
                      <li class="list-group-item">
                        <router-link class="btn btn-sm">
                          <small class="fw-bold">... see more</small>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <button
                    class="btn btn-sm"
                    style="border-radius: 80%"
                    @click="what = index"
                    id="optButt"
                  >
                    <i class="fas fa-ellipsis-h fs-4"></i>
                  </button>
                </div>
                <span v-html="items.content"></span>
                <div class="d-flex justify-content-around">
                  <h5>{{ items.author }}</h5>
                  <small class="fw-bold"
                    >Date :
                    <small>{{ items.created_at }}</small>
                  </small>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import { deletePost } from "../service/allPost";
import { allPost } from "../service/allPost";
import SideNav from "../components/SideNav.vue";
import { directive } from "vue3-click-away";
export default {
  components: { SideNav },
  directives: {
    ClickAway: directive,
  },
  data() {
    return {
      allBlog: [],
      id: {},
      show: false,
      elemt: null,
      what: "a",
    };
  },

  methods: {
    onClickAway() {
      console.log("hello");
      this.what = "r";
    },
    _delete(id) {
      let post_id = { id: id };
      deletePost(post_id)
        .then((res) => {
          res = post_id;
          console.log(res);
        })
        // console.log(post_id);
        .catch((err) => {
          console.log(err);
        });
    },

    // blogOptions(index) {
    //   this.elemt = index;
    // },
  },

  mounted() {
    allPost()
      .then((res) => {
        this.allBlog = res.data.posts;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.router_link {
  text-decoration: none;
}
.option_buttons {
  /* display: none; */
  position: absolute;
  right: 50px;
  transition: 0.3s ease-out;
}
</style>