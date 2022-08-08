---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Modules

::: warning Warning

- This document assumes you have read our module-based architecture document.
- IF you haven't read it yet, [please click here](../../essentials/module-based-architecture.md) to read the document on module-based architecture. 

:::

Modules allow you to develop applications with an object-oriented architecture and it is recommended to use module-based architecture.

Everything is your app is treated as an object each is a module. For example, in an e-commerce application, products, categories and users are different objects. Just as you import them into different tables in the database, you can also process them through different modules in <span class="text-primary">IstanbulJS</span> modules.

However, this only applies to medium-large projects. If you are doing a small demo it will be overkill.