<template>
  <v-app id="app">
    <slot name="navigation" />
    <slot name="header" />
    <v-main>
      <slot />
    </v-main>
    <slot name="footer" />
  </v-app>
</template>
