// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  node = node || document.body;
  var elements = [];
  
  if (node.classList && node.classList.contains(className)) {
    elements.push(node);
  }
  if (node.childNodes) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var childElement = getElementsByClassName(className, node.childNodes[i]);
      elements = elements.concat(childElement);
    }
  }
  return elements; 
};
