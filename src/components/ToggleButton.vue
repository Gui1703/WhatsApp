<template>
    <div class="flex items-center justify-center w-full ml-36 toggleStatus">
      <label for="toggle" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggle" class="sr-only" />
          <!-- line -->
          <div class="block bg-gray-600 w-10 h-6 rounded-full"></div>
          <!-- dot -->
          <div
            class="
              dot
              absolute
              left-1
              top-1
              bg-white
              w-4
              h-4
              rounded-full
              transition
            "
          ></div>
        </div>
      </label>
    </div>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {},
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

.toggleStatus {
    margin-top: -20px;
}
</style>