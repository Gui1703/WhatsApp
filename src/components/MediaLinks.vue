<template>
  <div class="flex flex-col bg-conf-dark my-2 border-gray rounded-md p-2">
    <div>
      <span>Mídia, links e docs</span>
      <span class="ml-44">5 ></span>
    </div>
    <div class="flex mt-2 items-center space-x-2 pl-1 cursor-pointer">
        <img class="w-16 rounded-md" src="@/assets/image-media.jpg">
        <img class="w-16 rounded-md" src="@/assets/image-media.jpg">
        <img class="w-16 rounded-md" src="@/assets/image-media.jpg">
        <img class="w-16 rounded-md" src="@/assets/image-media.jpg">
        <img class="w-16 rounded-md" src="@/assets/image-media.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaLinks",
  props: {},
};
</script>