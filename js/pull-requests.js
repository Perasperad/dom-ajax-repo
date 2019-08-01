fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(function(data) {
    return data.json();
  })
  .then(function(pullReq) {
    var reqList = document.querySelector("#pull-requests-list");

    var filteredItems = pullReq.filter(function(ownReq) {
      return ownReq.user.login == "Perasperad";
    });

    filteredItems.forEach(function(req) {
      var listOfReq = document.createElement("li");
      var linksOfReq = document.createElement("a");
      linksOfReq.setAttribute("href", req.html_url);
      linksOfReq.innerHTML = req.title;

      listOfReq.appendChild(linksOfReq);
      reqList.appendChild(listOfReq);
    });
  });
