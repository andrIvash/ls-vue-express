import Vue from 'vue'
import fs from 'fs'
import {createRenderer} from 'vue-server-renderer'

// const app = new Vue({
//   data: {
//     url: 'http://logo'
//   },
//   template: `<div>Вы открыли URL: {{ url }}</div>`
// })
const app = new Vue({
  el: '#app'
})

export function renderApp(path, callback) {
  const renderer = createRenderer({
    template: fs.readFileSync('./index.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    callback(null, html); // будет выведен код всей страницы, с подставленным кодом приложения.
 })  
}

