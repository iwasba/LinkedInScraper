
<template>
  <div>
    <div class="background centered">
      <img src="../../assets/icon.png" class="hero" />
      <div class="centered-item">
        <v-text-field dark dense placeholder="Paste the post URL" v-model="URL" outlined></v-text-field>
        <v-select
          dark
          dense
          class="mb-8"
          :items="options"
          item-text="text"
          item-value="value"
          v-model="SIZE"
          label="Select batch size"
          outlined
        ></v-select>

        <v-btn x-large outlined small color="white">
          <router-link :to="{ name: 'fetching', params: { URL:this.URL,SIZE:this.SIZE } }">
            <h2>CONTINUE</h2>
          </router-link>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      URL: "",
      SIZE: "",
      options: [
        { text: "Quick", value: 250 },
        { text: "Standard", value: 500 },
        { text: "Large (slow)", value: 1000 }
      ]
    };
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    onSubmit() {
      this.$router.push("fetching");
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

a {
  text-decoration: none;
  color: white;
}

h2 {
  color: white;
  font-size: 100%;
}

h1 {
  padding-top: 190px;
  font-size: 60px;
  color: white;
}
</style>
