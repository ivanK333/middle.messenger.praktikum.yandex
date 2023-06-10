import { Main } from './layouts'
import { router } from './router'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('root');

  content.innerHTML = new Main({ children: router() }).render();
})

window.addEventListener('hashchange', router);
window.addEventListener('load', router);