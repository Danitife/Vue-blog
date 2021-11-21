<template>
  <main>
    <small class="fw-bold">{{ latest_news.title }}</small>
    <div class="card">
      <img
        class="card-image-top"
        :src="this.latest_news.urlToImage"
        alt=""
        style="width: 100%; height: 300px"
      />
    </div>
    <h3>{{ latest_news.description }}</h3>
  </main>
</template>

<script>
import { getLatestNews } from "../service/post";
import { getTargetNews } from "../service/post";
import { getFacebook } from "../service/post";
import { getManU } from "../service/post";
import { getCelebrity } from "../service/post";
import { getTinubu } from "../service/post";
export default {
  data() {
    return {
      latest_news: {},
      my_news: "",
    };
  },
  methods: {
    moreNews(title) {
      getLatestNews(title)
        .then((res) => {
          this.latest_news = res.data.articles[1];
          console.log(this.latest_news);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    let prams = this.$route.params;
    this.my_news = prams.title;
    console.log(prams);
    this.moreNews(prams.title);
    console.log(this.moreNews(prams.title));
  },
};
</script>

<style>
</style>