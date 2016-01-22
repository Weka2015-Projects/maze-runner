'use strict'

import { Router } from './components/router'

document.addEventListener('DOMContentLoaded', () => {
  let router = new Router()
  router.listen()
  console.log('it loads!')
})
