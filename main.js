const main = document.querySelector('#main');
main.innerHTML = `
  <div id="Form-input" class= "p-3">
    <form id="Form" class= "p-3 rounded border">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="Name" aria-describedby="nameHelp" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" required>
      </div>
      <div class="mb-3">
        <label for="mobileNumber" class="form-label">Mobile Number</label>
        <input type="number" class="form-control" id="Mobile-number" required>
      </div>
      <button type="submit" class="btn btn-primary submit-button">Add</button>
    </form>
  </div>
  `
const formInput = document.querySelector('#Form-input');
const addUser = document.createElement('div');
addUser.innerHTML = `
  <h1>Add New User</h1>
  <button class="show-hide-button btn btn-secondary mb-3">Hide Form</button>
  `
formInput.prepend(addUser);

const showHideButton = document.querySelector('.show-hide-button');

if (showHideButton) {
  showHideButton.addEventListener('click', () => {
    if (showHideButton.innerText.toLowerCase() === "hide form") {
      showHideButton.innerText = "Show Form";
      document.querySelector('#Form').style.display = "none";
    } else {
      showHideButton.innerText = "Hide Form";
      document.querySelector('#Form').style.display = "block";
    }
  });
};

const displayUsers = document.createElement('div');
displayUsers.id = ('Display');
displayUsers.classList.add("p-3", "rounded", "border");
displayUsers.innerHTML = `<h1>User List</h1>`;
main.appendChild(displayUsers);

const name = document.querySelector('#Name');
const email = document.querySelector('#Email');
const mobileNumber = document.querySelector('#Mobile-number');

const fab = document.createElement('div');
fab.id = ('fab');
fab.classList.add("p-3", "rounded", "border");
fab.innerHTML = `<h1>Favorite User</h1>`;
main.appendChild(fab);

document.querySelector('.submit-button').addEventListener('click', function (e) {

  e.preventDefault();
  
  const displayUser = document.createElement("div");
  displayUser.classList.add("display-user", "p-3", "shadow-sm", "my-3");

  const userData = document.createElement("div");
  userData.classList.add("d-flex", "flex-column", "p-3", "mb-3", "rounded")
  displayUser.appendChild(userData);

  const userName = name.value;
  const userEmail = email.value;
  const userMobileNumber = mobileNumber.value;

  if (userName && userEmail && userMobileNumber) {
    userData.innerHTML = `<span calss="edit-data">${userName}</span>
      <span calss="edit-data">${userEmail}</span>
      <span calss="edit-data">${userMobileNumber}</span>
      `

    const fabButton = document.createElement("button");
    fabButton.innerText = "Add To Fab";
    fabButton.classList.add("fab-button", "btn", "btn-success");
    displayUser.appendChild(fabButton);

    const editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.classList.add("edit-button", "btn", "btn-warning", "mx-3");
    displayUser.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-button", "btn", "btn-danger");
    displayUser.appendChild(removeButton);

    displayUsers.appendChild(displayUser);

    fabButton.addEventListener('click', () => {
      displayUsers.removeChild(displayUser);
      fab.appendChild(displayUser);
      fabButton.remove();
      removeButton.addEventListener('click', () => {
        fab.removeChild(displayUser);
      });
    });

    editButton.addEventListener('click', () => {
      if(editButton.innerText.toLowerCase() === "edit") {
        editButton.innerHTML = "Save";
        userData.style.backgroundColor = "WhiteSmoke";
        userData.contentEditable = true;
      } else {
        editButton.innerHTML = "Edit";
        userData.contentEditable = false;
      }
    });

    removeButton.addEventListener('click', () => {
      displayUsers.removeChild(displayUser);
    });
  } else {
    alert("Please fill all the fields");
  }
  document.querySelector('#Form').reset();
});