

<template>
  <div>
    <div class="background centered">
      <img src="../../assets/timer.png" class="hero" />
      <div class="centered-item">
        <h2 class="mb-8">Retrieving Data</h2>
        <v-progress-circular indeterminate color="white"></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Fetching",
  props: {
    msg: String
  },
  data() {
    return {
      URL: "",
      SIZE: "",
      host: "http://629ca4b4.ngrok.io/"
    };
  },
  mounted() {
    console.log("mounted");
    axios
      .get(`${this.host}scrape?url=${this.URL}/&timeout=${this.SIZE}`)
      .then(response => {
        console.log(response.data.data);
        this.$router.push({
          name: "download",
          params: { DOWNLOAD: response.data.data }
        });
      });
  },

  created() {
    this.URL = this.$route.params.URL;
    this.SIZE = this.$route.params.SIZE;
  },

  methods: {
    onComplete() {
      this.$router.push("stats");
    }
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
</style>
