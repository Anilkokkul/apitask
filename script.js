const API = "https://openlibrary.org/people/mekBot/books/already-read.json";

const container = document.getElementById("container");
const loading = document.getElementById("loading");

async function getData(API, displayBooks) {
  loading.hidden = false;
  const response = await fetch(API);
  const data = await response.json();
  loading.hidden = true;
  displayBooks(data.reading_log_entries);
}

getData(API, function displayBooks(data) {
  console.log(data);
  data.map((item) => {
    container.innerHTML += `
      <div class="card m-1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${
            item.work.title === null ? "No title available" : item.work.title
          }</h5>
          <h6 class="card-subtitle mb-2 text-muted"><b>Author:</b> ${
            item.work.author_names[0]
          }</h6>
          <p class="card-text">
            <b>Year of Publish :</b>
            ${item.work.first_publish_year}
          </p>
        </div>
      </div>`;
  });
});
