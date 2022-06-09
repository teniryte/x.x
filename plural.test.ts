import plural from './plural';

import * as chai from 'chai';

const x = chai.expect;

describe('plural', () => {
  it('pluralizes', () => {
    x(plural(0, 'ящик', 'ящика', 'ящиков')).equal('ящиков');
    x(plural(1, ['ящик', 'ящика', 'ящиков'])).equal('ящик');
    x(plural(2, ['ящик', 'ящика', 'ящиков'])).equal('ящика');
  });
});
