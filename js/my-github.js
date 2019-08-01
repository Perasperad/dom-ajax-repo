// Write code here to communicate with Github
var reposList = document.querySelector("#repos-list");
var reposCount = document.querySelector("#repos-count");
function createList(repo) {
  var listOfRepo = document.createElement("li");
  var linksOfRepo = document.createElement("a");
  linksOfRepo.setAttribute("href", repo.html_url);
  linksOfRepo.innerHTML = repo.name;

  listOfRepo.appendChild(linksOfRepo);
  reposList.appendChild(listOfRepo);
}

fetch("https://api.github.com/users/Perasperad/repos")
  .then(function(data) {
    return data.json();
  })
  .then(function(myRepos) {
    reposCount.innerHTML = myRepos.length;

    var input = document.getElementById("submit");
    input.addEventListener("click", function() {
      var userName = document.getElementById("userSearch").value;
      if (userName == "") {
        myRepos.forEach(createList);
      }
      if (userName != "") {
        fetch("https://api.github.com/users/" + userName + "/repos")
          .then(function(data) {
            return data.json();
          })
          .then(function(repo) {
            repo.forEach(createList);
          });
      }
    });
  });
