fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(function(data) {
    return data.json();
  })
  .then(function(repos) {
    var reqList = document.querySelector("#pull-requests-list");

    repos.forEach(function(req) {
      var listOfReq = document.createElement("li");
      var linksOfReq = document.createElement("a");
      linksOfReq.setAttribute("href", req.html_url);
      linksOfReq.innerHTML = req.title;

      listOfReq.appendChild(linksOfReq);
      reqList.appendChild(listOfReq);
    });
  });
