var xPlanes = [
  "X-1",
  "X-3",
  "X-15",
  "X-29",
  "X-31",
  "X-37",
  "X-45"
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document. //This line is unfinished! Use a method to capture our <ul> element.

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  var listElement = document.createElement("li");
  listElement.innerHTML = xPlane;
  parent.appendChild(listElement);//What does "i" refer to? "i" refers to a variable
  //that increments every "round" of the for loop and set xPlanes euqal to
  //xPlanes item i. The for loop stops when i is equal to the length of xPlanes.

  // Do some things to add <li> elements to our empty list.
}
