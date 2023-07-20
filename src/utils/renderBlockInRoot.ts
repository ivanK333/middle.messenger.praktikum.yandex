import { Block } from '../libs';

export function renderBlockInRoot(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root) {
    root.innerHTML = '';
    root.appendChild(block.element);
    return;
  }

  throw new Error('Not such element exist');
}
