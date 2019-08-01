// Write code here to communicate with Github

fetch("https://api.github.com/users/Perasperad/repos")
  .then(function(data) {
    return data.json();
  })
  .then(function(repos) {
    var reposList = document.querySelector("#repos-list");
    var reposCount = document.querySelector("#repos-count");
    reposCount.innerHTML = repos.length;

    repos.forEach(function(repo) {
      var listOfRepo = document.createElement("li");
      var linksOfRepo = document.createElement("a");
      linksOfRepo.setAttribute("href", repo.html_url);
      linksOfRepo.innerHTML = repo.name;

      listOfRepo.appendChild(linksOfRepo);
      reposList.appendChild(listOfRepo);
    });
  });
