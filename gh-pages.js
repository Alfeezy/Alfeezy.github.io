import { publish } from 'gh-pages';

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