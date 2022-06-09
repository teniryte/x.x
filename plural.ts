import { flatten } from 'lodash';

export default function plural(
  count: number,
  ...words: Array<string | string[]>
) {
  let cases = [2, 0, 1, 1, 1, 2],
    titles = flatten(words);
  return titles[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
}
