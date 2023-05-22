if(navigator.userAgent.indexOf("Trident/") > 0 ) {
alert("Page is not compatible with Internet Explorer");
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
