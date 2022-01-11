<template>
  <div class="flex flex-col w-96 bg-conf-dark my-2 border-gray rounded-md p-2">
    <div>
      <span>Silenciar notificações</span>
      <ToggleButton/>
    </div>
    <div>
      <div class="flex my-2 border-t border-gray-700 w-full cursor-pointer">
        <h2 class="pt-2">Notificações personalizadas</h2>
      </div>
      <div class="flex border-t border-gray-700 w-full cursor-pointer">
        <h2 class="pt-2">Visibilidade de mídia</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue";
export default {
  name: "Notification",
  props: {},
  components: {
    ToggleButton,
  },
};
</script>