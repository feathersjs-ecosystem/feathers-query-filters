const omit = require('lodash.omit');
const PROPERTIES = ['$sort', '$limit', '$skip', '$select', '$populate'];

function parse (number) {
  if (typeof number !== 'undefined') {
    return Math.abs(parseInt(number, 10));
  }
}

function getLimit (limit, paginate) {
  if (paginate && paginate.default) {
    return Math.min(limit || paginate.default, paginate.max || Number.MAX_VALUE);
  }

  return limit;
}

function convertSort (sort) {
  if (typeof sort !== 'object') {
    return sort;
  }

  const result = {};

  Object.keys(sort).forEach(key => (result[key] = typeof sort[key] === 'object' ? sort[key] : parseInt(sort[key], 10)));

  return result;
}

export default function (query, paginate) {
  let filters = {
    $sort: convertSort(query.$sort),
    $limit: getLimit(parse(query.$limit), paginate),
    $skip: parse(query.$skip),
    $select: query.$select,
    $populate: query.$populate
  };

  return { filters, query: omit(query, ...PROPERTIES) };
}
