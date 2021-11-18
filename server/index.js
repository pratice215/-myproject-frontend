require('dotenv').config()

const { Nuxt, Builder } = require('nuxt')
const { init } = require('@tonoid/helpers')
const express = require('@tonoid/express')
const logger = require('@tonoid/logger')

const config = require('../nuxt.config.js')
config.dev = (process.env.NODE_ENV !== 'production')

async function start () {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await init([
    {
      name: 'nuxt',
      init: async () => {
        await nuxt.ready()

        if (config.dev) {
          const builder = new Builder(nuxt)
          await builder.build()
        }
        return {
          name: 'nuxt',
          close: () => nuxt.close()
        }
      }
    },
    express({
      host,
      port,
      jsonLog: false,
      extraMiddlewaresAfterEndpoint: (app) => {
        app.use(nuxt.render)
      }
    })
  ], {
    logger,
    loggerOptions: {
      json: false,
      colorize: true,
      simple: true,
      prettyPrint: true
    }
  })
}

start()
