/*jshint -W030 */

import chai from 'chai';
import filter from '../src/';

const expect = chai.expect;

describe('Feathers Query Filters', function() {
  describe('$sort', function() {
    beforeEach(function() {
      this.query = { $sort: 1 };
    });

    it('returns $sort when present in query', function() {
      var result = filter(this.query);
      expect(result.$sort).to.equal(1);
    });

    it('removes $sort from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$sort).to.be.undefined;
    });
  });

  describe('$limit', function() {
    beforeEach(function() {
      this.query = { $limit: 1 };
    });

    it('returns $limit when present in query', function() {
      var result = filter(this.query);
      expect(result.$limit).to.equal(1);
    });

    it('removes $limit from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$limit).to.be.undefined;
    });
  });

  describe('$skip', function() {
    beforeEach(function() {
      this.query = { $skip: 1 };
    });

    it('returns $skip when present in query', function() {
      var result = filter(this.query);
      expect(result.$skip).to.equal(1);
    });

    it('removes $skip from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$skip).to.be.undefined;
    });
  });

  describe('$select', function() {
    beforeEach(function() {
      this.query = { $select: 1 };
    });

    it('returns $select when present in query', function() {
      var result = filter(this.query);
      expect(result.$select).to.equal(1);
    });

    it('removes $select from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$select).to.be.undefined;
    });
  });

  describe('$or', function() {
    beforeEach(function() {
      this.query = { $or: 1 };
    });

    it('returns $or when present in query', function() {
      var result = filter(this.query);
      expect(result.$or).to.equal(1);
    });

    it('removes $or from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$or).to.be.undefined;
    });
  });

  describe('$in', function() {
    beforeEach(function() {
      this.query = { $in: 1 };
    });

    it('returns $in when present in query', function() {
      var result = filter(this.query);
      expect(result.$in).to.equal(1);
    });

    it('removes $in from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$in).to.be.undefined;
    });
  });

  describe('$nin', function() {
    beforeEach(function() {
      this.query = { $nin: 1 };
    });

    it('returns $nin when present in query', function() {
      var result = filter(this.query);
      expect(result.$nin).to.equal(1);
    });

    it('removes $nin from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$nin).to.be.undefined;
    });
  });

  describe('$lt', function() {
    beforeEach(function() {
      this.query = { $lt: 1 };
    });

    it('returns $lt when present in query', function() {
      var result = filter(this.query);
      expect(result.$lt).to.equal(1);
    });

    it('removes $lt from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$lt).to.be.undefined;
    });
  });

  describe('$lte', function() {
    beforeEach(function() {
      this.query = { $lte: 1 };
    });

    it('returns $lte when present in query', function() {
      var result = filter(this.query);
      expect(result.$lte).to.equal(1);
    });

    it('removes $lte from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$lte).to.be.undefined;
    });
  });

  describe('$gt', function() {
    beforeEach(function() {
      this.query = { $gt: 1 };
    });

    it('returns $gt when present in query', function() {
      var result = filter(this.query);
      expect(result.$gt).to.equal(1);
    });

    it('removes $gt from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$gt).to.be.undefined;
    });
  });

  describe('$gte', function() {
    beforeEach(function() {
      this.query = { $gte: 1 };
    });

    it('returns $gte when present in query', function() {
      var result = filter(this.query);
      expect(result.$gte).to.equal(1);
    });

    it('removes $gte from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$gte).to.be.undefined;
    });
  });

  describe('$not', function() {
    beforeEach(function() {
      this.query = { $not: 1 };
    });

    it('returns $not when present in query', function() {
      var result = filter(this.query);
      expect(result.$not).to.equal(1);
    });

    it('removes $not from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$not).to.be.undefined;
    });
  });
});
