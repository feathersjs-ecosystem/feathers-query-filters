/**
 * 
 *  Sets up the query properly if $limit, $skip, $sort, or $select is passed in params.
 *  Those same parameters are then removed from _conditions so that we aren't searching
 *  for data with a $limit parameter.
 */

var QueryFilters = function(query) {
  if (!query) {
    return {};
  }
  
  var filters = {
    $sort: query.$sort,
    $limit: query.$limit,
    $skip: query.$skip,
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
};


module.exports = QueryFilters;