<template>
  <main-template>
    <div class="items-center align-center w-full h-full text-ml text-white bg-black">
      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <up-bar />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <business />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <media-links />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <notification />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <information-messages />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <message-number />
      </div>

      <div class="bg-gray-700 my-2 border-gray rounded-md px-2">
        <buttons/>
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
    Buttons
  },
};
</script>
