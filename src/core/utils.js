/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
export function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    });
  }
  return target;
}

export function bind(ctx, ...methods) {
  methods.forEach(m => {
    ctx[m] = ctx[m].bind(ctx);
  });
}

export function bind(object, ...methods) {
  methods.forEach(m => {
    object[m] = object[m].bind(object);
  });
}

export function formula(formula, context) {
  const out = {};
  try {
    const vars = Object
      .keys(context)
      .map(k => `${k} = context['${k}']`)
      .join(', ');
    const initVars = vars ? `var ${vars}; ` : '';
    // eslint-disable-next-line
    out.eval = initVars + formula;
    out.value = eval(out.eval);
    out.isValid = isFinite(out.value);
  } catch (error) {
    out.error = error.message;
  }
  return out;
}

export function currency(n = 0) {
  if (isNaN(n)) {
    return '???';
  }
  return (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};