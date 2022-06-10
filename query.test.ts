import * as chai from 'chai';
import query, { stringify, parse } from './query';

chai.should();

describe('query', () => {
  it('stringifies object', () => {
    stringify({
      name: 'NAME NAME',
      age: 31,
      job: {
        lang: 'JS',
        salary: 120000,
      },
    }).should.equal('age=31&job.lang=JS&job.salary=120000&name=NAME%20NAME');
    query({
      name: 'NAME NAME',
      age: 31,
      job: {
        lang: 'JS',
        salary: 120000,
      },
    }).should.equal('age=31&job.lang=JS&job.salary=120000&name=NAME%20NAME');
  });

  it('parses string', () => {
    parse(
      'age=31&job.lang=JS&job.salary=120000&name=NAME%20NAME'
    ).should.deep.equal({
      name: 'NAME NAME',
      age: 31,
      job: {
        lang: 'JS',
        salary: 120000,
      },
    });
    query(
      'age=31&job.lang=JS&job.salary=120000&name=NAME%20NAME'
    ).should.deep.equal({
      name: 'NAME NAME',
      age: 31,
      job: {
        lang: 'JS',
        salary: 120000,
      },
    });
  });
});
