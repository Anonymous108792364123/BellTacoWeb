if(navigator.userAgent.indexOf("Trident/") > 0 ) {
alert("Internet Explorer incompatible with script");
history.back();
};
if(navigator.userAgent.indexOf("Nintendo WiiU") > 0 ) {
alert("Wii U incompatible with script");
history.back();
};
if(navigator.userAgent.indexOf("Nintendo 3DS") > 0 ) {
alert("3DS incompatible with script");
history.back();
};

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
