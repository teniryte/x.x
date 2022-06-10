import keys from 'lodash/keys';
import values from 'lodash/values';

export default function expression(code = '', locals = {}) {
  const args = keys(locals),
    vals = values(locals);
  try {
    return new Function(...args, `return ${code};`)(...vals);
  } catch (err) {
    return err;
  }
}
