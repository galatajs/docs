---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Istanbul's Lifecycle

Almost everything on Earth has a lifecycle. For example, human is born, lives and dies. We cook, eat and clean. All these are in themselves the lifecycle.

Since <span class="text-primary">IstanbulJS</span> is a NodeJS Framework, the events will be server-side events. Like `onAppStarted` and `onAppFinished`. Also <span class="text-primary">IstanbulJS</span> allows you to use some NodeJS signals as well.

## What Is NodeJS Signals?

Your application may be closed by the user or the system for various reasons. NodeJS manages these operations with signals and various signals give you various information. For more information, [please visit here](https://nodejs.org/api/process.html#process_signal_events).

## Istanbul's Lifecycle Sequence

<span class="text-primary">IstanbulJS</span> allows you to use lifecycle when you use module-based architecture. All providers in the module can use these hooks (if they want). Below is schematic of this, and further below, each is described individually.

<div class="light-content">
    <img src="/img/diagrams/istanbuljs-lifecycle-light.png" />
</div>

<div class="dark-content">
<img src="/img/diagrams/istanbuljs-lifecycle-dark.png" />
</div>
