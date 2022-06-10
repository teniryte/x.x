export default function proto(...objects: object[]): object {
  if (objects.length === 1) return getProto(objects[0]);
  return setProto(...objects);
}

export function getProto(object: object): object {
  return Object.getPrototypeOf(object);
}

export function setProto(...chain: object[]): object {
  chain.forEach((obj, i) => {
    const next = chain[i + 1] || null;
    if (!next) return;
    Object.setPrototypeOf(obj, next);
  });
  return chain[0];
}
