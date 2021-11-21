<template>
  <main>
    <div class="d-flex" style="flex-wrap: wrap">
      <div
        v-for="items in celeb"
        :key="items"
        class="card m-1 mx-auto"
        style="width: 24%"
      >
        <h6 class="small">{{ items.author }}</h6>
        <div>
          <img :src="items.urlToImage" alt="" class="card-image-top myImage" />
        </div>
        <span class="small fw-bold">{{ items.description }}</span>
      </div>
    </div>
  </main>
</template>

<script>
import { getCeleb } from "../service/post";
export default {
  data() {
    return {
      celeb: [],
    };
  },
  methods: {},
  mounted() {
    getCeleb()
      .then((res) => {
        this.celeb = res.data.articles;
        console.log(this.celeb);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.myImage {
  width: 100%;
  height: 200px;
}
</style>