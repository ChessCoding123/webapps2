var xPlanes = [

  {
    "name":"X-1",
    "description":"Broke Mach 1 (the speed of sound)",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/9/9c/X-1-1_In_Flight_-_GPN-2000-000134.jpg"
  },
  {
    "name":"X-3",
    "description":"Looked very good, but failed in reaching designed speed",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/3/32/Douglas_X-3_NASA_E-17348.jpg"
  },
  {
    "name":"X-15",
    "description":"Achieved hypersonic (Mach 6.7)",
    "imgURL":"http://home.windstream.net/jmustain/X15-1.JPG"
  },
  {
    "name":"X-29",
    "description":"Tested a forward-swept wing",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/9/91/Grumman-X29-InFlight.jpg"
  },
  {
    "name":"X-31",
    "description":"Tested maneuvering of rocket-like plane",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/0/0c/Rockwell-MBB_X-31_vectorpaddles.jpg"
  },
  {
    "name":"X-37",
    "description":"Reusable spaceplane",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/2/2d/Boeing_X-37B_after_landing_at_Vandenberg_AFB,_3_December_2010.jpg"
  },
  {
    "name":"X-45",
    "description":"Tested unmanned combat systems",
    "imgURL":"https://upload.wikimedia.org/wikipedia/commons/b/b1/Boeing_X-45A_UCAV.jpg"
  }

];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list"); //This line is unfinished! Use a method to capture our <ul> element.

for(var plane in xPlanes) {
  var xPlane = xPlanes[plane];
  e.innerHTML += "<li>" +
  "<h2>" +
  xPlane["name"] +
  "</h2>" +
  "<p>" +
  xPlane["description"] +
  "</p>" +
  "<img src='" +
  xPlane["imgURL"] +
  "' height='30%' width='50%' " +
  "</img>"
  "</li>";
}
