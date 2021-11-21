import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Allpost from '../views/Allpost.vue'
import Signup from '../views/Signup.vue'
import CelebrityPage from '../views/CelebrityPage.vue'
import Categories from '../views/Categories.vue'
import PoliticsPage from '../views/PoliticsPage.vue'
import fileReader from '../views/fileReader.vue'
import MoreBlogs from '../views/MoreBlogs.vue'
import PostBlog from '../views/PostBlog.vue'
import SeeMore from '../views/SeeMore.vue'
import nodeLogin from '../views/nodeLogin'
import store from '../store'

const routes = [
  { path: '/',component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/nodeLogin', component: nodeLogin },
  { path: '/fileReader', component: fileReader },
  { path: '/categories', component: Categories },
  { path: '/PoliticsPage', component: PoliticsPage },
  { path: '/allpost', component: Allpost },
  { path: '/postBlog', component: PostBlog, beforeEnter: (to, from, next) =>{
    if(!localStorage.getItem('_token')){
      return next('/login')
    }
      next()
  } },
  { path: '/SeeMore/:title', component: SeeMore },
  { path: '/MoreBlogs/:id', component: MoreBlogs },
  { path: '/CelebrityPage', component: CelebrityPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
