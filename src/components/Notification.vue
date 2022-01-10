<template>
  <div class="flex flex-col w-96 bg-gray-900 my-2 border-gray rounded-md p-2">
    <div>
      <label for="silence">Silenciar notificações</label>
      <input class="ml-40" name="silence" type="radio" />
    </div>
    <div>
      <div class="flex my-2 border-t border-gray-700 w-full"><h2 class="pt-2">Notificações personalizadas</h2></div>
      <div class="flex border-t border-gray-700 w-full"><h2 class="pt-2">Visibilidade de mídia</h2></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {},
};
</script>

