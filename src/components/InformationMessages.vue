<template>
  <div class="flex flex-col w-96 bg-gray-900 my-2 border-gray rounded-md p-2">
    <div class="flex flex-col">
      <h2>Mensagens temporárias</h2>
      <span class="font-extralight text-sm align-top text-gray-400">Desativadas</span>
      <i class="far fa-clock ml-80 flex flex-col items-center alt text-gray-600"></i>
    </div>
    <div class="border-t border-gray-700 w-full">
      <h2>Criptografia</h2>
      <p class="font-light text-sm align-top text-gray-400">
        As mensagens e as chamadas são protegidas com criptografia de ponta a
        ponta. Toque para confirmar
      </p>
      <i class="fas fa-lock ml-80 flex flex-col items-center alt2 text-gray-600"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationMessages",
  props: {},
};
</script>
<style scoped>
.alt {
  margin-top: -30px;
  margin-bottom: 25px;
}
.alt2 {
  margin-top: -45px;
  margin-bottom: 35px;
}

p {
  width: 80%;
}
</style>