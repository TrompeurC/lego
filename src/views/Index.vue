<template>
  <a-layout class="flex flex-col h-full">
    <a-layout-header><span class="text-slate-200">海报生成</span></a-layout-header>
    <a-layout-content class="flex-1 h-0 overflow-auto">
      <router-view />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>