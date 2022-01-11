<template>
  <div class="flex flex-col w-96 bg-conf-dark my-2 border-gray rounded-md p-2">
    <div>
      <span class="font-light text-sm text-gray-400"
        >Recado e número de telefone</span
      >
    </div>
    <div>
      <h2>Front-End Developer aiming to become FullStack.</h2>
      <span class="font-light align-top text-sm text-gray-400"
        >19 de dezembro de 2021</span
      >
    </div>
    <div class="mt-4">
      <h2>+55 14 99849-4124</h2>
      <span class="font-light align-top text-sm text-gray-400">Celular</span>
      <div
        class="
          flex
          items-center
          ml-64
          space-x-6
          alt
          text-green-400
          cursor-pointer
        "
      >
        <i class="fas fa-comment-dots hover:bg-gray-400 iconAlt"></i>
        <i class="fas fa-phone-alt mx-2 hover:bg-gray-400 iconAlt"></i>
        <i class="fas fa-video hover:bg-gray-400 iconAlt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageNumber",
  props: {},
};
</script>
<style scoped>
.alt {
  margin-top: -45px;
  margin-bottom: 25px;
}

.iconAlt:hover {
  border: 5px solid transparent;
  border-radius: 100%;
  text-align: center;
}
</style>