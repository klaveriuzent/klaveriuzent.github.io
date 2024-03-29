// Mengambil data dari API GitHub
fetch("https://api.github.com/users/klaveriuzent/repos?sort=pushed&per_page=7")
  .then((response) => response.json())
  .then((data) => {
    // Menampilkan data dalam halaman web
    const repoList = document.getElementById("repo-list");
    let hasKlaveriuzentGithubIo = false;
    data.forEach((repo) => {
      if (repo.name === "klaveriuzent.github.io") {
        hasKlaveriuzentGithubIo = true;
        return; // Skip repo with name "klaveriuzent.github.io"
      }
      // Mengambil data bahasa dari API GitHub
      fetch(repo.languages_url)
        .then((response) => response.json())
        .then((languages) => {
          // Menampilkan data dalam halaman web
          const article = document.createElement("article");
          article.className = "col-6 col-12-xsmall work-item";
          article.innerHTML = `
            <div class="card">
              <div class="card-header">
                <h3 class="repo-name">${repo.name}</h3>
                ${repo.fork ? '<span class="fork-label">Fork</span>' : ""}
              </div>
              <div class="card-body">
                <p>
                  License: ${repo.license
              ? '<img class="license-icon" style="opacity: 0.45; vertical-align: middle; margin-top: -2px" src="/assets/icon/scale_balance_icon.svg" alt="License icon">' +
              repo.license.name
              : "No license"
            }
                </p>
                <p>Language: ${Object.keys(languages).join(", ")}</p>
                <p class="repo-atr">Description :</p>
                <p class="repo-description">${repo.description ? repo.description : "No description"
            }</p>
                <div class="card-link">
                  <a href="${repo.html_url
            }" target="_blank" class="button-mod">View on GitHub</a>
                </div>
              </div>
            </div>
          `;
          repoList.appendChild(article);
        })
        .catch((error) => console.error(error));
    });
    // Jika tidak ada repo "klaveriuzent.github.io", ambil 6 repo terbaru
    if (!hasKlaveriuzentGithubIo) {
      fetch(
        "https://api.github.com/users/klaveriuzent/repos?sort=pushed&per_page=6"
      )
        .then((response) => response.json())
        .then((data) => {
          data.forEach((repo) => {
            // Mengambil data bahasa dari API GitHub
            fetch(repo.languages_url)
              .then((response) => response.json())
              .then((languages) => {
                // Menampilkan data dalam halaman web
                const article = document.createElement("article");
                article.className = "col-6 col-12-xsmall work-item";
                article.innerHTML = `
                  <div class="card">
                    <div class="card-header">
                      <h3 class="repo-name">${repo.name}</h3>
                      ${repo.fork ? '<span class="fork-label">Fork</span>' : ""}
                    </div>
                    <div class="card-body">
                      <p>
                        License: ${repo.license
                    ? '<img class="license-icon" style="opacity: 0.45; vertical-align: middle; margin-top: -2px" src="/assets/icon/scale_balance_icon.svg" alt="License icon">' +
                    repo.license.name
                    : "No license"
                  }
                      </p>
                      <p>Language: ${Object.keys(languages).join(", ")}</p>
                      <p class="repo-atr">Description :</p>
                      <p class="repo-description">${repo.description ? repo.description : "No description"
                  }</p>
                      <div class="card-link">
                        <a href="${repo.html_url
                  }" target="_blank" class="button-mod">View on GitHub</a>
                      </div>
                    </div>
                  </div>
                `;
                repoList.appendChild(article);
              })
              .catch((error) => console.error(error));
          });
          // Menambahkan animasi ketika data berhasil dimuat
          repoList.classList.add("fade-in");
        })
        .catch((error) => console.error(error));
    } else {
      // Menambahkan animasi ketika data berhasil dimuat
      repoList.classList.add("fade-in");
    }
  })
  .catch((error) => console.error(error));
