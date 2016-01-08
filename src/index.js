/**
 *
 *  Sets up the query properly if $limit, $skip, $sort, or $select is passed in params.
 *  Those same parameters are then removed from _conditions so that we aren't searching
 *  for data with a $limit parameter.
 */
function parse(number) {
  if(typeof number !== 'undefined') {
    return parseInt(number, 10);
  }
}

function getLimit(limit, paginate) {
  if(paginate && paginate.default) {
    return Math.min(limit || paginate.default, paginate.max || Number.MAX_VALUE);
  }

  return limit;
}

export default function(query, paginate) {
  let filters = {
    $sort: query.$sort,
    $limit: getLimit(parse(query.$limit), paginate),
    $skip: parse(query.$skip),
    $select: query.$select,
    $populate: query.$populate
  };

  // Remove the params from the query's conditions.
  delete query.$sort;
  delete query.$limit;
  delete query.$skip;
  delete query.$select;
  delete query.$populate;

  return filters;
}
