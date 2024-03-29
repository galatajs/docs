import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import GalataLayout from "./theme/GalataLayout.vue";
import { App, ref } from "vue";

const calculateClassName = (key: string): string => `syntax-preference-${key}`;

const getCachedItem = (key: string): string | null => {
  // @ts-ignore
  if (!__VUEPRESS_SSR__) return localStorage.getItem(key);
  return null;
};

const setCache = (key: string, value: string): void => {
  // @ts-ignore
  if (__VUEPRESS_SSR__) return;
  localStorage.setItem(key, value);
};

const removeClassFromWindow = (className: string): void => {
  // @ts-ignore
  if (__VUEPRESS_SSR__) return;
  window.document.documentElement.classList.remove(className);
};

const addClassToWindow = (className: string): void => {
  // @ts-ignore
  if (__VUEPRESS_SSR__) return;
  window.document.documentElement.classList.add(className);
};

const useUserJavaScriptModulePreference = (app: App) => {
  const config = {
    key: "cache:preference:js-module",
    defaultValue: "typescript",
  };
  const value = getCachedItem(config.key);
  if (value) {
    config.defaultValue = value;
  }
  const defaultModule = ref<string>(config.defaultValue);
  addClassToWindow(calculateClassName(defaultModule.value));
  const setJsModule = (value: string) => {
    removeClassFromWindow(calculateClassName(defaultModule.value));
    addClassToWindow(calculateClassName(value));
    setCache(config.key, value);
    defaultModule.value = value;
  };

  app.provide("setJsModule", setJsModule);
  app.provide("jsModule", defaultModule);
};

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("GalataLayout", GalataLayout);
    useUserJavaScriptModulePreference(app);
  },
  setup() {},
  rootComponents: [],
});
