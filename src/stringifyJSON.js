// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj==='string') {
    return '"'+obj+'"';
  }
  if(Array.isArray(obj)) {
    var list = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '['+list+']';
  }
  if(obj && typeof obj === 'object') {
    var keyPairs = [];
    for (key in obj) {
      if(typeof obj[key]==='function' || obj[key]===undefined) {
        continue;
      }
        keyPairs.push('"'+key+'"'+":"+stringifyJSON(obj[key]));
    }
    return '{'+keyPairs.join(',')+'}';
  }
  return obj + '';
};
