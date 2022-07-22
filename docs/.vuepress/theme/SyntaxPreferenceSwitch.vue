<script setup>
import DropdownTransition from "@vuepress/theme-default/lib/client/components/DropdownTransition.vue";
import { inject, ref, onMounted, computed } from "vue";

const jsModule = inject("jsModule");
const setJsModule = inject("setJsModule");

const open = ref(false);

const onclick = (e) => {
  console.log(e);
};

const preferences = computed(() => [
  {
    id: "typescript",
    src: "/img/typescript.svg",
  },
  {
    id: "ecmascript",
    src: "/img/logo-javascript.svg",
  },
  {
    id: "commonjs",
    src: "/img/nodejs-icon.svg",
  },
]);
const selectedPreference = computed(() =>
  preferences.value.find((p) => p.id === jsModule.value)
);

const selectPreference = (preference) => {
  setJsModule(preference.id);
  open.value = false;
};
</script>

<template>
  <div class="syntax-preference" :class="{ open }" @mouseleave="open = false">
    <button
      class="navbar-button navbar-dropdown-title ml-1"
      aria-label="Select Syntax"
      @click="open = true"
      @mouseenter="open = true"
      title="Select Syntax"
    >
      <img :src="selectedPreference.src" width="20" height="20" />
    </button>

    <DropdownTransition>
      <div v-show="open" class="syntax-preference-list">
        <div
          class="syntax-preference-item"
          v-for="(preference, index) in preferences"
          :key="index"
          @click="selectPreference(preference)"
        >
          <img
            :src="preference.src"
            width="25"
            height="25"
            :title="preference.id"
          />
        </div>
      </div>
    </DropdownTransition>
  </div>
</template>

<style lang="scss">
.syntax-preference {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .navbar-button {
    padding: 0;
    margin-left: 1rem;
  }
  .syntax-preference-list {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    .syntax-preference-item {
      margin-right: 0.5rem;
      cursor: pointer;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
