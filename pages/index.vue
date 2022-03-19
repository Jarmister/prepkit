<template>
  <div>
    <div class="container">
      <MyHeader></MyHeader>
      <nuxt-link to="Home">HOme</nuxt-link>
      <nuxt-link to="AddArticle">AddArticle</nuxt-link>
      <nuxt-link to="AddOrganization">AddOrganization</nuxt-link>
      <nuxt-link to="Article">Article</nuxt-link>
      <nuxt-link to="JoinUs">JoinUs</nuxt-link>
      <nuxt-link to="Login">Login</nuxt-link>
      <nuxt-link to="Company">Company</nuxt-link>
      {{ this.res }}
      <NuxtDynamic component="LoginScreen" />
      <LazyMyFooter></LazyMyFooter>
    </div>
  </div>
</template>

<script>
import httpclient from "@/utils/api/httpClient.js";
export default {
  name: "App",

  data() {
    return {
      res: {},
      dynamic: null,
    };
  },
  methods: {},

  async mounted() {},
  mounted() {},
};
</script>
