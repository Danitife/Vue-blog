<template>
  <main class="container-fluid">
    <section>
      <div class="row bg-light m-auto">
        <div class="col">
          <h1 class="text1">Welcome to</h1>
          <h3 class="text2">Developer Daniel's Blog</h3>
          <p>
            Developer Dan Blog: An open, crowded-sourced platform of information
            from around the world ...
          </p>
        </div>

        <div class="col text-end">
          <img
            :src="require('@/assets/landin_blog_pics.png')"
            alt=""
            width="400"
          />
        </div>
      </div>
    </section>

    <el-divider class="w-75 mx-auto"></el-divider>

    <section>
      <h3 class="top_stories">Top Stories</h3>
      <section>
        <div class="d-flex justify-content-around">
          <div
            v-for="itemz in latest_news"
            :key="itemz"
            class="card m-1 effect"
            style="width: 33%"
          >
            <router-link class="router_link" :to="'/SeeMore/' + itemz.title">
              <h6 class="text-dark">{{ itemz.title }}</h6>
              <div class="card card-body p-0">
                <img
                  :src="itemz.urlToImage"
                  alt=""
                  class="myImage card-image-top"
                />
              </div>
              <div class="card-body">
                <strong class="text-secondary">
                  {{ itemz.description.slice(0, 75) + "..." }}
                </strong>
                <small>see more</small>
                <h6 class="small text-dark">{{ itemz.author }}</h6>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </section>

    <el-divider class="w-75 mx-auto"></el-divider>

    <main class="row m-1">
      <section class="col-sm p-0 m-1">
        <section class="bg-light">
          <h3>More Blogs</h3>
          <router-link class="router_link" :to="''">
            <div v-for="items in celeb" :key="items" class="row">
              <div class="col-sm-4">
                <img :src="items.urlToImage" alt="" class="myImage" />
              </div>
              <div class="col">
                <h6>{{ items.description }}</h6>
                <!-- <div class="row"> -->
                <div class="col-2">
                  <div class="d-flex">
                    <div class="d-flex m-2">
                      <button class="btn btn-sm m-1 p-0">
                        <i class="fas fa-heart"></i>
                      </button>
                      <span class="p-1">12</span>
                    </div>
                    <div class="d-flex m-2">
                      <button class="btn btn-sm m-1 p-0">
                        <i class="fas fa-comment"></i>
                      </button>
                      <span class="p-1">1k</span>
                    </div>
                    <div class="d-flex m-2">
                      <button class="btn btn-sm m-1 p-0">
                        <i class="fas fa-thumbs-up"></i>
                      </button>
                      <span class="p-1">3k</span>
                    </div>
                  </div>
                </div>
                <!-- <div class="col"></div> -->
                <!-- </div> -->
              </div>
              <div>
                <el-divider class="w-75 mx-auto"></el-divider>
              </div>
            </div>
          </router-link>
        </section>
      </section>

      <section class="col-sm-3 p-0 m-1">
        <div
          v-for="iteems in facebook"
          :key="iteems"
          class="card card-body mb-1 p-0"
        >
          <router-link class="router_link" :to="'/SeeMore/' + iteems.title">
            <div>
              <img
                :src="iteems.urlToImage"
                alt=""
                class="card-image-top myImaged"
              />
            </div>
            <small class="fw-bold p-1">{{ iteems.description }}</small>
            <h6 class="text-dark fw-bold">{{ iteems.author }}</h6>
          </router-link>
        </div>
      </section>
    </main>

    <el-divider style="width: 90%" class="bg-dark mx-auto"></el-divider>

    <section>
      <h3>Entertainment</h3>
      <div class="row">
        <div class="col-sm p-1">
          <div class="card effect">
            <h6 class="theTitle">{{ this.manU.author }}</h6>
            <div class="card">
              <img
                :src="this.manU.urlToImage"
                alt=""
                class="myImaged card-image-top"
              />
            </div>
            <strong>{{ this.manU.author }}</strong>
            <span>{{ this.manU.description }}</span>
          </div>
        </div>

        <div class="col-sm p-1">
          <div class="card effect">
            <h6 class="theTitle">{{ this.crypto.author }}</h6>
            <div class="card">
              <img :src="this.crypto.urlToImage" alt="" class="myImaged" />
            </div>
            <strong>{{ this.crypto.author }}</strong>
            <span>{{ this.crypto.description }}</span>
            <span class="text-primary">see more</span>
          </div>
        </div>

        <div class="col-sm p-1">
          <div class="card effect">
            <h6 class="theTitle">{{ this.tinubu.title }}</h6>
            <div class="card">
              <img
                :src="this.tinubu.urlToImage"
                alt=""
                class="myImaged card-image-top"
              />
            </div>
            <strong>{{ this.tinubu.author }}</strong>
            <span>
              {{ this.tinubu.description }}
            </span>
            <span class="text-primary">see more</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import { getLatestNews } from "../service/post";
import { getCeleb } from "../service/post";
import { getFacebook } from "../service/post";
import { getManU } from "../service/post";
import { getCrypto } from "../service/post";
import { getTinubu } from "../service/post";
export default {
  data() {
    return {
      facebook: [],
      manU: [],
      crypto: [],
      tinubu: [],
      celeb: [],
      latest_news: [],
    };
  },
  // methods: {
  //   getNews()
  // },
  mounted() {
    getLatestNews()
      .then((data) => {
        this.latest_news = data.data.articles.slice(10, 14);
        console.log(this.latest_news);
      })
      .catch((err) => {
        console.log(err);
      });

    getCeleb()
      .then((data) => {
        this.celeb = data.data.articles.slice(10, 16);
        console.log(this.celeb);
      })
      .catch((err) => {
        console.log(err);
      });

    getFacebook()
      .then((data) => {
        console.log(data);
        this.facebook = data.data.articles.slice(8, 11);
        console.log(this.facebook);
      })
      .catch((err) => {
        console.log(err);
      });

    getManU()
      .then((data) => {
        console.log(data);
        this.manU = data.data.articles[4];
        console.log(this.manU);
      })
      .catch((err) => {
        console.log(err);
      });

    getCrypto()
      .then((data) => {
        console.log(data);
        this.crypto = data.data.articles[7];
        console.log(this.crypto);
      })
      .catch((err) => {
        console.log(err);
      });

    getTinubu()
      .then((data) => {
        console.log(data);
        this.tinubu = data.data.articles[7];
        console.log(this.tinubu);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Ubuntu:wght@400;500;700&display=swap");
.text1 {
  padding: 20px;
  margin-top: 70px;
  margin-left: 20px;
  font-size: 50px;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
}
.text2 {
  margin-left: 20px;
  padding: 10px;
  font-size: 35px;
  font-family: "Poppins", sans-serif;
}
p {
  font-size: 20px;
  padding: 8px;
  font-weight: 600;
  margin: 20px;
}
.top_stories {
  font-size: 40px;
  font-weight: 700;
  margin: 20px;
}
.myImage {
  width: 100%;
  height: 100px;
}
.myImaged {
  width: 100%;
  height: 200px;
}
.theTitle {
  font-size: 13px;
}
.router_link {
  text-decoration: none;
}
.effect:hover {
  box-shadow: -5px 10px 20px -5px lightgrey;
}
</style>
