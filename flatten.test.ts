import { flatten, unflatten } from './flatten';

import * as chai from 'chai';

chai.should();

console.log(
  'FLATTEN',
  flatten({
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: [4, 5, 6],
    },
  })
);

describe('flatten', () => {
  it('flattens object', () => {
    flatten({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4,
        f: {
          g: 5,
          h: [6, 7, 8],
        },
      },
    }).should.deep.equal({
      a: 1,
      b: 2,
      'c.d': 3,
      'c.e': 4,
      'c.f.g': 5,
      'c.f.h': [6, 7, 8],
    });
  });

  it('flattens array', () => {
    flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]]).should.deep.equal([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it('unflattens object', () => {
    unflatten({ a: 1, b: 2, 'c.d': 3, 'c.e': 4, 'c.f.g': 5 }).should.deep.equal(
      {
        a: 1,
        b: 2,
        c: {
          d: 3,
          e: 4,
          f: {
            g: 5,
          },
        },
      }
    );
  });

  it('dont unflattens array', () => {
    unflatten([1, 2, 3, 4, 5]).should.deep.equal([1, 2, 3, 4, 5]);
  });
});
