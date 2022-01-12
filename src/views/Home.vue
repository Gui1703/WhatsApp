<template>
  <main-template>
    <div class="flex flex-col items-center w-full h-full text-base text-white bg-black">
      <div class="edit">
        <UpBar />
        <Business />
        <MediaLinks />
        <Notification />
        <InformationMessages />
        <MessageNumber />
        <Buttons />
      </div>
    </div>
  </main-template>
</template>

<script>
import MainTemplate from "@/templates/MainTemplate.vue";
import UpBar from "@/components/UpBar.vue";
import Business from "@/components/Business.vue";
import MediaLinks from "@/components/MediaLinks.vue";
import Notification from "@/components/Notification.vue";
import InformationMessages from "@/components/InformationMessages.vue";
import MessageNumber from "@/components/MessageNumber.vue";
import Buttons from "@/components/Buttons.vue";

export default {
  name: "Home",
  components: {
    MainTemplate,
    UpBar,
    Business,
    MediaLinks,
    Notification,
    InformationMessages,
    MessageNumber,
    Buttons,
  },
};
</script>
<style scoped>
.edit {
  width: 380px;
}
</style>