if(navigator.userAgent.indexOf("Firefox/") === 0 ) {
  if(navigator.userAgent.indexOf("Chrome/") === 0 ) {
    alert("Script incompatibility error");
    history.back();
  };
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
