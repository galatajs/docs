import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import IstanbulLayout from "./theme/IstanbulLayout.vue";
import { App, ref } from "vue";

const calculateClassName = (key: string): string => `syntax-preference-${key}`;

const useUserJavaScriptModulePreference = (app: App) => {
  const config = {
    key: "cache:preference:js-module",
    defaultValue: "typescript",
  };
  if (localStorage) {
    const value = localStorage.getItem(config.key);
    if (value) {
      config.defaultValue = value;
    }
  }
  const defaultModule = ref<string>(config.defaultValue);
  window.document.documentElement.classList.add(
    calculateClassName(defaultModule.value)
  );
  const setJsModule = (value: string) => {
    window.document.documentElement.classList.remove(
      calculateClassName(defaultModule.value)
    );
    window.document.documentElement.classList.add(calculateClassName(value));
    localStorage.setItem(config.key, value);
    defaultModule.value = value;
  };

  app.provide("setJsModule", setJsModule);
  app.provide("jsModule", defaultModule);
};

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("IstanbulLayout", IstanbulLayout);
    useUserJavaScriptModulePreference(app);
  },
  setup() {},
  rootComponents: [],
});
