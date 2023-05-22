document.getElementById('button').onclick = function() {
  var url_string = window.location;
  var url = new URL(url_string);
  var target = url.searchParams.get("url");
  window.location.href = "url";
};
