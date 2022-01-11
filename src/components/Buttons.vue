<template>
  <div class="my-2 p-2 text-red-500">
    <div class="flex flex-row w-96 space-x-7 items-center border-gray rounded-md bg-conf-dark px-3 p-2 mb-3 cursor-pointer hover:bg-gray-700">
      <i class="fas fa-ban"></i>
      <a>Bloquear</a>
    </div>
    <div class="flex flex-row w-96 space-x-7 items-center border-gray rounded-md bg-conf-dark px-3 p-2 cursor-pointer hover:bg-gray-700">
      <i class="fas fa-thumbs-down"></i>
      <a>Denunciar empresa</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {},
};
</script>