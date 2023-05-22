if( navigator.userAgent.indexOf("MSIE") > 0 ) {
    confirm("Page is incompatible with Internet Explorer")
  }

document.getElementById('sure').onclick = function() {
  var url_string = window.location;
  var url = new URL(url_string);
  var target = url.searchParams.get("url");
  window.location.href = target;
};
document.getElementById('back').onclick = function() {
  history.back()
};
