let request = new XMLHttpRequest();
let url = "./js/joke.json";

request.open("GET", url, true);

request.onload = function() {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(joke => {
      const app = document.getElementById("root");
      const container = document.createElement("div");
      container.setAttribute("class", "container");
      app.appendChild(container);
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //create an h1 and set the text content to films title
      const title = document.createElement("h1");
      title.textContent = joke.type;

      // create a p and set the text cntent to the film description
      const p = document.createElement("p");
      const card_footer = document.createElement("p");

      p.innerHTML = `<span><strong>Set Up: </strong> </span>${joke.setup}`;
      card_footer.innerHTML = `<span><strong>Punchline: </strong> </span>${
        joke.punchline
      } `;
      //create an em element
      const em = document.createElement("em");
      em.textContent = joke.id;
      title.appendChild(em);
      // append the cards to the container element
      container.appendChild(card);
      // Each card will contain an title and a p
      card.appendChild(title);
      card.appendChild(p);
      card.appendChild(card_footer);
    });
  } else {
    console.log("error");
  }
};
request.send();
