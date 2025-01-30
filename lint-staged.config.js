/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  './**/*.{js,ts}': ['prettier --write', 'eslint'],
};
