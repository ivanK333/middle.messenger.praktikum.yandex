import { Block } from '../libs';

export function renderBlockInRoot(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root) {
    root.innerHTML = '';
    // console.log('renderBlockInRoot, block:', block);
    root.appendChild(block.element);
    return;
  }

  throw new Error('Not such element exist');
}
