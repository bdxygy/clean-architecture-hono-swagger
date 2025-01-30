/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "./src/**/*.ts": "bunx eslint --fix",
  "./*.js": "prettier --write",
};
