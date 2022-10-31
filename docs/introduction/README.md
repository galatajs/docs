---
footer: false
lastUpdated: true
contributors: true
next:
  text: GalataJS's Lifecycle
  link: /essentials/lifecycle.html
layout: GalataLayout
---

# Introduction

::: tip Not Ready For Production!

- <span class="text-primary">GalataJS Framework</span> is still under development and will probably be released in <span class="text-primary">2023 Q3</span> stable version. We do not recommend using it for production until this time.

:::

## What is GalataJS Framework?

GalataJS, it is a framework that works on the server side and allows you to write code more effortlessly using NodeJS APIs. It provides an infrastructure for everything you can do on the server, as much as you want.

GalataJS packages are based on <a href="https://en.wikipedia.org/wiki/Divide_and_rule" target="_blank">divide and rule logic</a> and there is a package for each job `-This point similar to NodeJS modules-`. GalataJS Framework emerges as the packages come together. We can liken it to the division of countries into provinces for better governance. Thanks to this feature, GalataJS becomes the size you want. Where will be no clutter of code for anything you don't use.

## Our Philosophy

Almost everything we do in our life, we do it for a need. We eat to satisfy our need hunger and sleep to satisfy our need for sleep. In the same way, we do the work we do for a need. We take certain actions on a server for users to chat from your website, to store and manage data, to collect input for an activity or for many needs.

Our point here is just what we need. And GalataJS was developed to support whatever you need.

- do you need a chat app?
- do you need a http application?
- do you need a websocket application?

questions can be increased. GalataJS is the correct answer to all these questions `including the ones we did not write`. With <span class="text-primary">galatajs-creator</span> you can choose your desired needs and install suitable template on your server.

<small>GalataJS; Inspired by NodeJS, VueJS, Express and NestJS.</small>

## Setup Your GalataJS Project

::: tip Required Dependency

- You must have <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> installed on your computed to perform the next step.

:::

Run the following command in the directory where you want to create your project.

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn init galatajs
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash:no-line-numbers
npm init galatajs
```

  </CodeGroupItem>
</CodeGroup>

Then you will be asked questions such as the following. Enter the answers suitable for your project and the foundation of your project will be formed!

<div class="language-sh"><pre><code><span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Project name: <span style="color:#888;">… <span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span></span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need TypeScript? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need HTTP? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need Websocket? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need validation with JOI? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need manage business logic? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need in-app events? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need provide-inject? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need i18n? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need integration tests with Jest? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">Need module-based architecture? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">No</span> / Yes</span></span>
<span></span>
<span style="color:#A6ACCD;">Scaffolding project in ./<span style="color:#89DDFF;">&lt;</span><span style="color:#888;">your-project-name</span><span style="color:#89DDFF;">&gt;</span>...</span>
<span style="color:#A6ACCD;">Done.</span></code></pre></div>

When you complete this stage, <span class="text-primary">GalataJS</span> will provide a basic structure for you. After that, you can follow the packages own guides according to your needs or skip to the next document for more detailed information about <span class="text-primary">GalataJS</span>.

## Select Your Syntax

<span class="text-primary">GalataJS</span> can be written in Typescript, JavaScript or CommonJS and supports all of them %100. To see the document in the syntax you want, please click the syntax icon in the top right to change it.