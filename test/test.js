var chai = require('chai');
var expect = chai.expect;

var filter = require('./../lib/feathers-query-filters');

describe('Feathers Query Filters', function() {
  it('returns an empty object when passed a falsey value', function() {
    var result = filter();
    expect(result).to.deep.equal({});
  });

  describe('$sort', function(){
    beforeEach(function(){
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

  describe('$limit', function(){
    beforeEach(function(){
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

  describe('$skip', function(){
    beforeEach(function(){
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

  describe('$select', function(){
    beforeEach(function(){
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

  describe('$populate', function(){
    beforeEach(function(){
      this.query = { $populate: 1 };
    });

    it('returns $populate when present in query', function() {
      var result = filter(this.query);
      expect(result.$populate).to.equal(1);
    });

    it('removes $populate from query when present', function() {
      filter(this.query);
      expect(this.query).to.deep.equal({});
    });

    it('returns undefined when not present in query', function() {
      var query = { $foo: 1 };
      var result = filter(query);
      expect(result.$populate).to.be.undefined;
    });
  });
});
