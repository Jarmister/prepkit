<template>
  <div>
    <nav
      class="relative w-full flex flex-wrap items-center justify-between py-1 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
    >
      <div
        class="container-fluid w-full flex flex-wrap items-center justify-between px-3"
      >
        <div class="container-fluid flex flex-col">
          <a class="text-sm text-black" href="#">contact</a>
          <a class="text-sm text-black" href="#">help us</a>
          <a class="text-sm text-black" href="#">Knolegebase</a>
        </div>
        <div class="bg-red-500">
          <div class="px-20 py-5">Logo</div>
        </div>
        <div class="flex">
          <div class="flex-row">
            <span class="fi fi-pl fib px-2"></span>
            <span class="fi fi-ua fib px-2"></span>
            <span class="fi fi-gr fib px-2"></span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
