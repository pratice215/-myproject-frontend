<template>
  <footer class="app-footer">
    <v-container class="md">
      <div class="footer-logo" />
      <div class="footer-credits">
        Made with a <a href="https://www.refurb.me/refurbished/macbook/macbook-air/m1" target="_blank">Refurbished MacBook Air M1</a> in Paris, France
      </div>
      <ul class="footer-menu">
        <li>
          <a href="https://www.tonoid.com">
            Contact us
          </a>
        </li>
        <li>
          <a href="#">
            Help center
          </a>
        </li>
        <li>
          <a href="#">
            Suggest a feature
          </a>
        </li>
      </ul>
    </v-container>
  </footer>
</template>

<style lang="scss">
.app-footer {
  width: 100%;
  text-shadow: $text-shadow;
  color: #fff;
  background-color: $primary-color-dark2;
  border-top: 1px solid darken($primary-color-dark2, 3%);
  padding: 30px 0;

  p {
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;

    @media #{$sm-and-down} {
      display: block;
      text-align: left;
    }

    .footer-logo {
      padding-right: 20px;
      border-right: 1px solid darken($primary-color-dark2, 10%);

      @media #{$sm-and-down} {
        padding-bottom: 20px;
        padding-right: 0;
        border-right: 0;
        padding-left: 30px;
      }
    }

    .footer-credits {
      padding-left: 20px;
      flex-grow: 1;
      font-weight: 500;

      @media #{$sm-and-down} {
        font-size: 16px;
        padding-left: 30px;
        padding-right: 30px;
      }

      a {
        color: $secondary-color;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    .footer-menu {
      font-size: 12px;
      text-align: right;
      list-style: none;

      @media #{$sm-and-down} {
        text-align: left;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 16px;
        line-height: 34px;
        padding-right: 30px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

</style>
