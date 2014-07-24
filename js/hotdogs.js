var buttonNames = {
  0: "left",
  1: "middle",
  2: "right",
  3: "quack",
  4: "bleep"
}

function hotdogs () {
  bindEventByValue("mouseup", "button", 0, logMouseCoordinate);
  bindEventByValue("mouseup", "button", 2, spawnThing);
  bindEvent("contextmenu", noop);
};

function bindEvent (eventName, handler) {
  document.addEventListener(eventName, handler);
};

function unbindEvent (eventName, handler) {
  document.removeEventListener(eventName, handler);
};

function bindEventByValue (eventName, eventPropertyName, eventPropertyValue, handler) {
  document.addEventListener(eventName, function (e) {
    if(e[eventPropertyName] === eventPropertyValue) {
      handler(e);
    }
  });
};

function noop (e) {
  e.stopPropagation();
  e.preventDefault();
}

var nextTopZ = 1000;
function bringElementToFront (element) {
  element.style.zIndex = nextTopZ;
  nextTopZ += 1;
}

function logMouseCoordinate (e) {
  console.log(buttonNames[e.button] + " (" + e.x + "," + e.y + ")");
  e.preventDefault();
};

function makeDraggable (element) {
  var lastMouseX = 0,
    lastMouseY = 0,
    mouseMoveHandler = undefined;
  element.addEventListener("mousedown", function (e) {
    bringElementToFront(element);
    lastMouseX = e.x;
    lastMouseY = e.y;
    mouseMoveHandler = function (e) {
      element.style.left = (element.offsetLeft + (e.x - lastMouseX)) + "px";
      lastMouseX = e.x;
      element.style.top = (element.offsetTop + (e.y - lastMouseY)) + "px";
      lastMouseY = e.y;
    };
    bindEvent("mousemove", mouseMoveHandler);
    e.stopPropagation();
  });
  element.addEventListener("mouseup", function (e) {
    unbindEvent("mousemove", mouseMoveHandler);
    e.stopPropagation();
  });
  element.addEventListener("mouseout", function (e) {
    unbindEvent("mousemove", mouseMoveHandler);
    e.stopPropagation();
  });
}

function spawnThing (e) {
  var thing = document.createElement("div");
  thing.className = "thing";
  thing.style.top = (e.y-50)+"px";
  thing.style.left = (e.x-50)+"px";
  bringElementToFront(thing);
  makeDraggable(thing);
  document.body.appendChild(thing);
  e.preventDefault();
};