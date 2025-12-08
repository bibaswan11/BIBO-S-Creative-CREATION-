window.onload = function () {
  const isOwner = confirm("Are you the owner? Press OK for YES, Cancel for NO.");

  if (isOwner) {
    let pw = prompt("Enter Owner Password:");
    if (pw === "9830224088") {
      document.getElementById("owner-panel").style.display = "block";
    } else {
      alert("Incorrect password! Switching to User Mode.");
    }
  }
};

let items = [];

function addItem() {
  const title = document.getElementById('item-title').value;
  const category = document.getElementById('item-category').value.toLowerCase();
  const img = document.getElementById('item-img').value;
  const desc = document.getElementById('item-desc').value;

  if (!title || !category || !img) {
    alert("Please fill all fields.");
    return;
  }

  items.push({ title, category, img, desc });
  renderGallery(items);

  document.getElementById('item-title').value = "";
  document.getElementById('item-category').value = "";
  document.getElementById('item-img').value = "";
  document.getElementById('item-desc').value = "";
}

function renderGallery(data) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  data.forEach(item => {
    gallery.innerHTML += `
      <div class="item">
        <img src="${item.img}" />
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>`;
  });
}

function filterCategory(cat) {
  if (cat === "all") renderGallery(items);
  else renderGallery(items.filter(i => i.category === cat));
}
