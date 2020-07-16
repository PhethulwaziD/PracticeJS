/**DOM Nodes**/
/*
*Every element in the document is a node
*/
const banner = document.querySelector('#banner');
//finding thr node type
console.log(banner.nodeType);
//nodeType returns a value that describes the node type

//Finding the node Name
console.log(banner.nodeName);
//node Name returns the tag name

//Child nodes 
console.log(banner.hasChildNodes());
//Method returns true if there are child nodes or false if not
//cloning nodes
const copyBanner = banner.cloneNode(true);
console.log(copyBanner);