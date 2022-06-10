import * as chai from 'chai';
import proto, { setProto, getProto } from './proto';

chai.should();

const x = chai.expect;

describe('proto', () => {
  it('gets prototype', () => {
    getProto(new Date()).should.equal(Date.prototype);
    proto(new Date()).should.equal(Date.prototype);
  });

  it('sets prototype', () => {
    const a = { a: 1 },
      b = { b: 2 },
      c = { c: 3 };
    setProto(a, b, c);
    x(getProto(a)).to.equal(b);
    x(getProto(b)).to.equal(c);
  });

  it('sets prototype by default function', () => {
    const a = { a: 1 },
      b = { b: 2 },
      c = { c: 3 };
    proto(a, b, c);
    x(getProto(a)).to.equal(b);
    x(getProto(b)).to.equal(c);
  });
});
