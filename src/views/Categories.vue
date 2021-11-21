<template>
  <main>
    <el-row>
      <el-col :span="5">
        <SideNav style="position: sticky; top: 70px" />
      </el-col>
      <el-col :span="19">
        <div
          class="mt-2 border mx-auto"
          style="width: fit-content; border-radius: 10px"
        >
          <i class="fas fa-search mx-3 text-primary"></i>
          <input
            type="text"
            class="border-0 p-2"
            placeholder="Search a blog"
            style="border-radius: 10px"
          />
        </div>

        <section class="mt-3">
          <div class="row">
            <div class="col">
              <h6>Celebrity</h6>
              <router-link class="router_link" to="/CelebrityPage">
                <div class="card">
                  <img
                    :src="this.celeb.urlToImage"
                    class="card-image-top w-100"
                    alt=""
                  />
                  <strong>{{ this.celeb.title }}</strong>
                </div>
              </router-link>
            </div>

            <div class="col">
              <h6>Politics</h6>
              <router-link class="router_link" to="/PoliticsPage">
                <div class="card">
                  <img
                    :src="this.politics.urlToImage"
                    class="card-image-top w-100"
                    alt=""
                  />
                  <strong>{{ this.politics.title }}</strong>
                </div>
              </router-link>
            </div>

            <div class="col">
              <h6>Celebrity</h6>
              <div class="card">
                <img
                  :src="this.manU.urlToImage"
                  class="card-image-top w-100"
                  alt=""
                />
                <strong>{{ this.manU.title }}</strong>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="d-flex justify-content-around">
            <div class="card m-1" style="width: 33%">
              <h6>Sport</h6>
              <div class="card">
                <img
                  :src="this.manU.urlToImage"
                  alt=""
                  class="myImage card-image-top"
                />
              </div>
              <strong>{{ this.manU.title }}</strong>
            </div>
            <div class="card m-1" style="width: 33%">
              <h6>Crypto Currency</h6>
              <div class="card">
                <img :src="this.crypto.urlToImage" alt="" class="myImage" />
              </div>
              <strong>{{ this.crypto.title }}</strong>
            </div>
            <div class="card m-1" style="width: 33%">
              <h6>Politics</h6>
              <div class="card">
                <img
                  :src="this.tinubu.urlToImage"
                  alt=""
                  class="myImage card-image-top"
                />
              </div>
              <strong>{{ this.tinubu.title }}</strong>
              <span>
                <!-- see more -->
              </span>
            </div>
          </div>
        </section>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import { getLatestNews } from "../service/post";
import { getCeleb } from "../service/post";
import { getFacebook } from "../service/post";
import { getManU } from "../service/post";
import { getCrypto } from "../service/post";
import { getTinubu } from "../service/post";
import { getPolitics } from "../service/post";
import SideNav from "../components/SideNav.vue";
export default {
  components: { SideNav },
  data() {
    return {
      crypto: [],
      tinubu: [],
      manU: [],
      celeb: [],
      politics: [],
    };
  },
  mounted() {
    getCrypto()
      .then((res) => {
        this.crypto = res.data.articles[0];
      })
      .catch((err) => {
        console.log(err);
      });

    getPolitics()
      .then((res) => {
        console.log(res);
        this.politics = res.data.articles[0];
        console.log(this.politics);
      })
      .catch((err) => {
        console.log(err);
      });

    getCeleb().then((res) => {
      this.celeb = res.data.articles[0];
    });

    getTinubu()
      .then((res) => {
        this.tinubu = res.data.articles[0];
      })
      .catch((err) => {
        console.log(err);
      });

    getManU()
      .then((res) => {
        this.manU = res.data.articles[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>