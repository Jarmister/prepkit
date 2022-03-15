<template>
  <div>
    <div class="container">
      <MyHeader></MyHeader>

      <component v-bind:is="this.Home"></component>> </comp>
      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import httpclient from "@/utils/api/httpClient.js";
import Home from "@/pages/Home";
export default {
  name: "App",
  components: { Home },
  data() {
    return {
      res: {},

    };
  },

  async mounted() {},
  mounted() {},
};
</script>
