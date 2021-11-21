<template>
  <main>
    <el-row class="bg-light">
      <el-col :span="4">
        <!-- <div class="grid-content">
          <ul class="list-group">
            <li
              v-for="items in side_nav"
              :key="items"
              class="list-group-item bg-dark text-light"
            >
              <i class="mx-1" :class="'fa ' + items.icon"></i>
              {{ items.value }}
            </li>
          </ul>
        </div> -->
        <SideNav />
      </el-col>

      <el-col :span="14">
        <div class="grid-content m-1 p-2">
          <h2>Add a Blog</h2>
          <form action="" @submit.prevent="publish()">
            <input
              v-model="publish_blog.title"
              class="w-100 m-1"
              type="text"
              placeholder="Enter Title Here"
            />

            <div class="d-flex justify-content-between">
              <input
                v-model="publish_blog.author"
                class="w-100 m-1"
                type="text"
                placeholder="Author's name"
              />

              <!-- <input
                class="form-control m-1"
                type="file"
                accept="image/*"
                name="fileToUpload"
                id="fileToUpload"
                ref="inputs"
                @change="change()"
              /> -->

              <input
                v-model="publish_blog.image"
                class="form-control m-1"
                placeholder="Image link"
                type="text"
              />
            </div>
            <!-- <img :src="imgs" alt="" /> -->
            <div class="mt-4 text-center">
              <button class="btn btn-sm btn-dark m-1" @click="Bold()">B</button>
              <button class="btn btn-sm btn-dark m-1" @click="Italics()">
                I
              </button>
              <button class="btn btn-sm btn-dark m-1" @click="Underline()">
                U
              </button>
              <button class="btn btn-sm btn-dark m-1" @click="subScript()">
                ▾
              </button>
              <button class="btn btn-sm btn-dark m-1" @click="superScript()">
                ▴
              </button>
            </div>
            <div
              id="edit_div"
              class="bg-white"
              style="width: 100%; height: 200px"
              contenteditable="true"
            ></div>

            <div class="card bg-light py-2">
              <button type="submit" class="btn btn-sm btn-primary w-50 m-1">
                <small class="fw-bold">Publish</small>
              </button>
            </div>
          </form>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <h6 class="text-secondary m-2">Publish</h6>
          <div class="card card-body mt-4">
            <div class="d-flex justify-content-between">
              <button class="btn btn-outline-secondary btn-sm">
                Save Draft
              </button>
              <button class="btn btn-outline-secondary btn-sm">Preview</button>
            </div>

            <div>
              <ul class="p-0">
                <li class="list-unstyled mt-2">
                  <i class="fas fa-thermometer-three-quarters"></i>
                  <span class="m-1">Status</span>
                </li>
                <li class="list-unstyled my-1">
                  <i class="fas fa-eye-slash fa-sm"></i>
                  <span class="m-1">Visibility</span>
                </li>
                <li class="list-unstyled">
                  <i class="fas fa-upload fa-sm"></i>
                  <span class="m-1">Publish</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </main>
</template>


<script>
import SideNav from "../components/SideNav.vue";
import { addPost } from "../service/login.service";
export default {
  components: {
    SideNav,
  },
  data() {
    return {
      publish_blog: {
        title: "",
        content: "",
        image: "",
        author: "",
      },
      img: "",
      imgs: "",
    };
  },

  methods: {
    Bold() {
      document.execCommand("bold");
    },
    Italics() {
      document.execCommand("italic");
    },
    Underline() {
      document.execCommand("underline");
    },
    subScript() {
      document.execCommand("subscript");
    },
    superScript() {
      document.execCommand("superscript");
    },
    publish() {
      // console.log(document.getElementById('ediv_div').innerHTML);
      this.publish_blog.content = document.getElementById("edit_div").innerHTML;
      console.log(this.publish_blog.content);
      addPost(this.publish_blog)
        .then((res) => {
          console.log(res);
          this.$notify({
            title: "log_in",
            message: res.data.message,
            type: "success",
          });
          this.$router.push({ path: "/Allpost" });
        })
        .catch((err) => {
          console.log(err);
          this.$notify({
            title: "log_in",
            message: err.response.data.message,
            type: "warning",
          });
        });
    },

    change() {
      // console.log(this.$refs.inputs.files[0].name);
      this.imgs = `C:/Users/USER/Pictures/8aeeaabbc77c460b8529ff994d593b23-removebg-preview (1).png`;
      //this.$refs.inputs.files[0].name;
    },
  },

  mounted() {
    // console.log(this.$refs.inputs.files);
  },
};
</script>

<style>
</style>