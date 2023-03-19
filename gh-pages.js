import { publish } from 'gh-pages';
import { copyFileSync } from 'node:fs';

copyFileSync('CNAME', 'dist/CNAME')
copyFileSync('favicon.svg', 'dist/favicon.svg')

publish(
 'dist',
  {
    branch: 'svelte',
    repo: 'https://github.com/Alfeezy/Alfeezy.github.io.git',
    dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);