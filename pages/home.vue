<template>
  <div class="container flex justify-center">
    <div class="flex-col">
      <MyHeader></MyHeader>
      <div class="p-3">
        <h1 class="flex justify-center text-lg font-bold pb-5">
          Help us Stay Informed
        </h1>
        <TagList :listTags="this.ar"></TagList>
      </div>

      <TagList class="pt-10" :listTags="this.arr"></TagList>

      <Companies></Companies>
      <LazyMyFooter></LazyMyFooter>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ar: ["Poland", "other"],
      arr: [
        "Poland",
        "other",
        "other",
        "other",
        "other",
        "other",
        "other",
        "other",
        "other",
        "other",
      ],
    };
  },
};
</script>

<style></style>
