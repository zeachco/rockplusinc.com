import store from '..';

const winVal = (names, fallback) => {
  for (var key in names) {
    if(typeof window[names[key]] !== 'undefined') {
      return window[names[key]];
    }      
  }
  return fallback;
}

function dispatchScroll() {
  store.dispatch({
    type: 'WINDOW_SCROLL',
    payload: {
      scrollX: winVal(['scrollX', 'scrollLeft', Infinity]),
      scrollY: winVal(['scrollY', 'scrollTop', Infinity])
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
dispatchScroll();
dispatchResize();

export default {
  dispatchScroll,
  dispatchResize
};
