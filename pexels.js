function LoadImages(searchKeyword) {
  fetch(`https://api.pexels.com/v1/search?query=${searchKeyword}`, {
    method: "GET",
    headers: {
      Authorization: "l47qJdpfSsFIrzpvRokGi15vLnx0X6AWm9wtunopJkOWAOd1gJOyCSji",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const photos = data.photos;
      console.log(" -----------------------------");
      console.log("arrayOfPhotos:", photos);
      console.log(" -----------------------------");
      const row = document.getElementById("row");
      row.innerHTML = "";

      photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mt-5";
        row.appendChild(col);

        const card = document.createElement("div");
        card.className = "card shadow-sm h-100";
        col.appendChild(card);

        const image = document.createElement("div");
        image.style.position = "relative";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.alt = photo.alt;
        img.style.objectFit = "cover";
        img.style.width = "100%";
        img.style.height = "300px";
        img.src = photo.src.original;

        const bodyCard = document.createElement("div");
        bodyCard.className = "card-body mt-2";

        if (photo.alt) {
          const title = document.createElement("h6");
          title.className = "card-title";
          title.innerHTML = photo.alt;
          bodyCard.appendChild(title);
        }

        if (photo.photographer) {
          const p = document.createElement("p");
          p.classList = "card-p";
          p.innerHTML = photo.photographer;
          bodyCard.appendChild(p);
        }

        const hideButton = document.createElement("button");
        hideButton.className = "btn";
        hideButton.innerHTML = "HIDE";
        hideButton.style.position = "absolute";
        hideButton.addEventListener("click", function () {
          card.remove();
        });

        card.appendChild(hideButton);
        card.appendChild(image);
        card.appendChild(img);
        card.appendChild(bodyCard);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const loadImages = document.getElementById("loadImages");
loadImages.addEventListener("click", () => {
  LoadImages("dog");
});

const loadSecondaryImages = document.getElementById("loadSecondaryImages");
loadSecondaryImages.addEventListener("click", () => {
  LoadImages("cat");
});
