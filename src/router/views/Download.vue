

<template>
  <div>
    <div class="background centered">
      <img src="../../assets/download.png" class="hero" />
      <div class="centered-item">
        <h2 class="pb-6">Your file is ready to download</h2>
        <v-btn @click="onDownload" x-large outlined small color="white">DOWNLOAD</v-btn>
        <router-link :to="{ name: 'home'}">
          <h3>Convert another link</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Download",
  props: {
    msg: String
  },
  data() {
    return {
      DOWNLOAD: ""
    };
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    onDownload() {
      window.open(this.DOWNLOAD, "_blank");
    }
  },

  created() {
    this.DOWNLOAD = this.$route.params.DOWNLOAD;
  }
};
</script>



<style scoped>
.background {
  background-image: linear-gradient(to bottom, #389cc1, #1270a8);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.07);
  transform: scale(1.1);
}

.hero {
  padding-top: 12%;
  width: 10%;
}

.centered-item {
  padding-top: 1%;
  padding-left: 30%;
  padding-right: 30%;
}

h2 {
  color: white;
  font-size: 30px;
}
h1 {
  padding-top: 190px;
  font-size: 60px;
  color: white;
}

a {
  text-decoration: none;
}

h3 {
  margin-top: 14px;
  color: white;
  font-size: 80%;
  font-weight: 400;
}
</style>
