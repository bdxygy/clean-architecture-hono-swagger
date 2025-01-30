/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "./*.js": "prettier --write",
  "./src/**/*.ts": "bunx eslint --fix",
};
