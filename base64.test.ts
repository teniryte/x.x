import { decode, encode } from './base64';

import * as chai from 'chai';

const x = chai.expect;

describe('base64', () => {
  it('encodes', () => {
    x(encode('Hello!')).equal('SGVsbG8h');
  });

  it('decodes', () => {
    x(decode('SGVsbG8h')).equal('Hello!');
  });
});
