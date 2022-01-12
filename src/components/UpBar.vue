<template>
  <div class="flex flex-col items-center bg-conf-dark my-2 border-gray rounded-md p-2">
    <div>
      <img class="w-28 h-28 rounded-full" src="@/assets/photo-profile.jpeg" />
    </div>
    <div>
      <h1><strong>Guilherme Raposo</strong></h1>
    </div>
    <div>
      <span class="text-gray-400">~Guilherme Raposo</span>
    </div>
    <div class="my-2">
      <span class="text-gray-400">Criador(a) de conteúdo digital</span>
    </div>
    <div>
      <p><span class="text-green-500">Aberta</span> até às 18:00</p>
    </div>
    <div class="flex mt-8 items-center text-green-400 space-x-10">
      <div class="cursor-pointer">
        <i
          class="
            fas
            fa-comment-dots
            flex flex-col
            items-center
            rounded-full
            hover:bg-gray-400
            iconAlt
          "
        ></i>
        <span class="flex mt-3">Conversar</span>
      </div>
      <div class="cursor-pointer">
        <i
          class="
            fas
            fa-phone-alt
            flex flex-col
            items-center
            rounded-full
            hover:bg-gray-400
            mb-3
            iconAlt
          "
        ></i>
        <span>Ligar</span>
      </div>
      <div class="cursor-pointer">
        <i
          class="
            fas
            fa-share
            flex flex-col
            items-center
            rounded-full
            hover:bg-gray-400
            mb-3
            iconAlt
          "
        ></i>
        <span>Encaminhar</span>
      </div>
    </div>

    <div class="flex border-t border-gray-700 w-full mt-8">
      <div class="flex mt-3 w-full h-full">
        <span>Conta Comercial</span>
        <i class="fas fa-info-circle flex ml-56 items-center text-green-400 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpBar",
  props: {},
};
</script>

<style scoped>
.iconAlt:hover {
  border: 8px solid transparent;
  border-radius: 100%;
  text-align: center;
}
</style>