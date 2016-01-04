# feathers-query-filters

> Adds support for special query string params used for filtering data in [FeatherJS](https://github.com/feathersjs)

[![NPM](https://nodei.co/npm/feathers-query-filters.png?downloads=true&stars=true)](https://nodei.co/npm/feathers-query-filters/)

[![Build Status](https://travis-ci.org/feathersjs/feathers-query-filters.png?branch=master)](https://travis-ci.org/feathersjs/feathers-query-filters)

## Installation

```bash
npm install feathers-query-filters --save
```

## Getting Started

This is used internally in service adapters like [Feathers MongoDB]() and [Feathers NeDB]().

Usage is like so:

```js
var Proto = require('uberproto');
var filter = require('feathers-query-filters');

var CustomService = Proto.extend({
    init: function(name, options){
        // your custom initialization code
    },
    find: function(params, callback) {

        // Start with finding all, and limit when necessary.
        var query = this.db.find({});

        // Prepare the special query params.
        if (params.query) {
            var filters = filter(params.query);

            // $select uses a specific find syntax, so it has to come first.
            if (filters.$select) {
                query = this.db.find(params.query, filters.$select);
            } else {
                query = this.db.find(params.query);
            }

            // Handle $sort
            if (filters.$sort){
                query.sort(filters.$sort);
            }

            // Handle $limit
            if (filters.$limit){
                query.limit(filters.$limit);
            }

            // Handle $skip
            if (filters.$skip){
                query.skip(filters.$skip);
            }
        }

        // Execute the query
        query.exec(function(err, docs) {
            if (err) {
                return callback(err);
            }
            return callback(err, docs);
        });
    },
    setup: function(app) {
        // Called by feathers.configure()
        this.app = app;
        this.service = app.service.bind(app);
    }
});

module.exports = CustomService;
```

## API

The following keywords are supported. They are pulled from the query object's conditions and returned so they can be mapped by each adapter in their own way.

### $sort

### $limit

### $skip

### $select

## Changelog

### 1.0.1
- Adding usage docs

### 1.0.0
- Initial release.

## License

[MIT](LICENSE)

## Author

[Eric Kryski](https://github.com/ekryski)
