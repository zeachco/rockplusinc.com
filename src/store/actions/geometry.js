import store from '..';

window.addEventListener('scroll', dispatchScroll);
window.addEventListener('resize', dispatchResize);

function dispatchScroll() {
  store.dispatch({
    type: 'WINDOW_SCROLL',
    payload: {
      scrollX: window.scrollX,
      scrollY: window.scrollY
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
