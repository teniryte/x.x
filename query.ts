import { unflatten, flatten } from './flatten';

export default function query(arg: string | object, splitter = '&') {
  if (!arg) return '';
  if (typeof arg === 'string') return parse(arg, splitter);
  if (typeof arg === 'object') return stringify(arg, splitter);
  return '';
}

export function parse(s: string, spl = '&') {
  const str = s.split('?').pop()!,
    pairs = str.split(spl).map((s: string) => s.trim().split('=')),
    data: any = {};
  if (!s) return {};
  pairs.forEach((pair: string[]) => {
    const n = pair[0],
      name = n.endsWith('[]') ? n.slice(0, -2) : n;
    let val = pair[1];
    if (data[name] && !Array.isArray(data[name])) {
      data[name] = [data[name]];
    }
    if (Array.isArray(data[name]) && n.endsWith('[]')) {
      return data[name].push(JSON.parse(decodeURIComponent(val)));
    }
    val = decodeURIComponent(val);
    try {
      val = JSON.parse(val);
    } catch (err) {}
    data[name] = val;
  });
  return unflatten(data);
}

export function stringify(d: object, spl = '&') {
  const data = flatten(d, true);
  return Object.keys(data)
    .sort()
    .map(key => {
      const val = data[key];
      if (Array.isArray(val)) {
        return val.map(v => `${key}[]=${encodeURIComponent(v)}`).join(spl);
      }
      return `${key}=${encodeURIComponent(val)}`;
    })
    .join(spl);
}
