fetch("https://raw.githubusercontent.com/TheCoderEll/ttrshax/main/html.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
        document.querySelector("#version-4\\.22\\.5271028").innerHTML += (data.slice(1,-1))
    });