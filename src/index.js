/**
 *
 *  Sets up the query properly if any special params are passed in params.
 *  Those same parameters are then removed from the query conditions so that
 *  we aren't searching for data with a $limit parameter.
 *
 *  This insanity is in to provide a unified query interface directly from
 *  clients that works across multiple databases.
 */

export default function(query) {
  var filters = {
    $sort: query.$sort,
    $limit: query.$limit,
    $skip: query.$skip,
    $select: query.$select,
    $or: query.$or,
    $in: query.$in,
    $nin: query.$nin,
    $lt: query.$lt,
    $lte: query.$lte,
    $gt: query.$gt,
    $gte: query.$gte,
    $not: query.$not
  };

  // Remove the params from the query's conditions.
  delete query.$sort;
  delete query.$limit;
  delete query.$skip;
  delete query.$select;
  delete query.$or;
  delete query.$in;
  delete query.$nin;
  delete query.$lt;
  delete query.$lte;
  delete query.$gt;
  delete query.$gte;
  delete query.$not;

  return filters;
}
