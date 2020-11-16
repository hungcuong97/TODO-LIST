<template>
  <div id="app">
    <el-container>
      <!-- Header  -->
      <el-header>
        <Header />
      </el-header>

      <el-container>
        <!-- Side bar -->
        <el-aside width="250px">
          <SideBar />
        </el-aside>

        <el-container>
          <!-- Content -->
          <el-main>
            <router-view />
          </el-main>

          <!-- Footer -->
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import SideBar from "./layout/SideBar.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
    Footer,
  },
};
</script>

<style>
.el-header {
  background-color: #3c8dbc;
  color: #ffffff;
  line-height: 60px;
}

.el-footer {
  background: #fff;
  padding: 15px;
  color: #444;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #d2d6de;
}

.el-main {
  background-color: #ecf0f5;
  padding: 10px !important;
}
</style>
