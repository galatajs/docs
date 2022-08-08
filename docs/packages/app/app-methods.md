---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# App Methods

::: tip Documentation Not Yet Completed

- This document is under construction.

:::

<span class="text-primary">IstanbulJS</span> already offers several functions for better usability and it is entirely up to you whether to use them or not.

These are listed and explained under the following headings.

## use

It is used to register a third party plugin to the application. Here is the abstract and a small example

### abstract

```typescript:no-line-numbers
type use = (plugin: Plugin, ...options: any[]) => this;
```

### example

```typescript:no-line-numbers
app.use(anyPlugin, {
    option1: "value1",
    option2: "value2"
});
```

## register

## start

## close

## enableShutdownEvents