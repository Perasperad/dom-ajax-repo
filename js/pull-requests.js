var reqList = document.querySelector("#pull-requests-list");
function createList(req) {
  var listOfReq = document.createElement("li");
  var linksOfReq = document.createElement("a");
  linksOfReq.setAttribute("href", req.html_url);
  linksOfReq.innerHTML = req.title;

  listOfReq.appendChild(linksOfReq);
  reqList.appendChild(listOfReq);
}

fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(function(data) {
    return data.json();
  })
  .then(function(pullReq) {
    pullReq.forEach(createList);

    var input = document.getElementById("userSearch");
    input.addEventListener("keyup", function(event) {
      var value = event.target.value;
      console.log(value);
      reqList.innerHTML = "";
      pullReq.forEach(function(pullRequest) {
        if (value == pullRequest.user.login) {
          var filteredItems = pullReq.filter(function(ownReq) {
            return ownReq.user.login == value;
          });
          filteredItems.forEach(createList);
        }
      });
    });
  });
function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}

window.onload = timedRefresh(20000);
