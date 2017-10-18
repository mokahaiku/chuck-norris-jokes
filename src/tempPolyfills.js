/* eslint-disable */

export default global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
