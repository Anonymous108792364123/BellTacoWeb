if(navigator.userAgent.indexOf("Trident/") > 0 ) {
alert("Script not compatible");
history.back();
}
if(navigator.userAgent.indexOf("3DS") > 0 ) {
alert("Script not compatible");
history.back();
}
if(navigator.userAgent.indexOf("WiiU") > 0 ) {
alert("Script not compatible");
history.back();
}

var url_string = window.location;
var url = new URL(url_string);
var target = url.searchParams.get("url");


if(target === null) {
  alert("Invalid URL");
  history.back();
};

document.getElementById('sure').onclick = function() {
  window.location.href = target;
};
document.getElementById('back').onclick = function() {
  history.back()
};
