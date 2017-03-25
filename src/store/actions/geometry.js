import store from '..';

function dispatchScroll() {
  store.dispatch({
    type: 'WINDOW_SCROLL',
    payload: {
      scrollX: window.scrollX || window.scrollLeft,
      scrollY: window.scrollY || window.scrollTop
    }
  });
}

function dispatchResize() {
  store.dispatch({
    type: 'WINDOW_RESIZE',
    payload: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    }
  });
}

// add event listeners
window.addEventListener('scroll', dispatchScroll);
window.addEventListener('resize', dispatchResize);

module.exports = {
  dispatchScroll,
  dispatchResize
};
