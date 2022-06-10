import * as chai from 'chai';
import expression from './expression';

const x = chai.expect;

class Person {
  name = 'NAME';
  age = 30;
}

describe('expression', () => {
  it('compiles', () => {
    x(expression('1 + 2')).to.equal(3);
    x(
      expression('new Person()', {
        Person,
      })
    ).to.deep.equal({
      name: 'NAME',
      age: 30,
    });
  });
});
