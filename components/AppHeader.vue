<template>
  <div :class="{'app-header': true, 'is-light': isLight }">
    <v-app-bar
      app
      clipped-left
      flat
      :color="isLight ? '#f2f8ff' : 'primary'"
      height="85px"
      hide-on-scroll
    >
      <div class="site-header">
        <nuxt-link
          to="/"
          class="site-brand"
        >
          <div class="site-logo-text">
            <span>My</span>Project
          </div>
        </nuxt-link>
      </div>
      <v-spacer />
      <v-btn primary href="https://www.tonoid.com" target="_blank">
        Visit tonoïd
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    isLight: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss">
  .app-header {
    .v-btn {
      margin: 3px;
    }

    .v-app-bar {
      border-bottom: 2px solid $primary-color-dark2 !important;
    }

    .site-brand-container {
      display: flex;
      align-items: center;
    }

    .site-nav {
      flex-grow: 1;
      text-align: right;
    }

    .site-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      vertical-align: middle;
      padding: 0;

      .site-brand {
        display: flex;
        margin: 5px 10px;
        text-align: center;
        -webkit-box-align: center;
        align-items: center;
        text-decoration: none;
        border-radius: 6px;
        padding: 0 5px;
        transition: background-color 0.3s;

        &:hover,
        &:focus,
        &:active {
          outline: none;
          background-color: rgba(0, 0, 0, 0.05);
        }

        .site-logo-text {
          display: inline-block;
          text-align: left;
          word-wrap: none;
          font-size: 24px;
          line-height: 22px;
          color: #fff;
          font-weight: 500;

          span {
            font-weight: bold;
            display: block;
          }
        }
      }

      @media #{$sm-and-down} {
        .site-brand {
          margin: 10px;

          .site-logo-text {
            font-size: 18px;
            line-height: 18px;
          }
        }
      }
    }

    &.is-light {
      .site-header {
        .site-brand {
          .site-logo-text {
            color: $text-color;
            margin-left: 10px;
          }
        }
      }

      .v-app-bar {
        .v-toolbar {
          background-color: $background-color !important;
        }

        border-bottom: 0 !important;
      }
    }
  }
</style>
