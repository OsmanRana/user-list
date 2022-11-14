const main = document.querySelector('#main');

const formInput = document.createElement('div');
formInput.id = "Form-input";
formInput.classList.add("p-3");
main.appendChild(formInput);

const form = document.createElement('form');
form.id = "Form";
form.classList.add("p-3", "rounded", "border");
formInput.appendChild(form);

const nameContainer = document.createElement('div');
nameContainer.classList.add("mb-3");
form.appendChild(nameContainer);

const nameLabel = document.createElement('label');
nameLabel.for = "name";
nameLabel.classList.add("form-label");
nameLabel.innerText = "Name";
nameContainer.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "Name";
nameInput.classList.add("form-control");
nameContainer.appendChild(nameInput);

const emailContainer = document.createElement('div');
emailContainer.classList.add("mb-3");
form.appendChild(emailContainer);

const emailLabel = document.createElement('label');
emailLabel.for = "Email";
emailLabel.classList.add("form-label")
emailLabel.innerText = "Email";
emailContainer.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = "email";
emailInput.id = "Email";
emailInput.classList.add("form-control");
emailContainer.appendChild(emailInput);

const mobileNumberContainer = document.createElement('div');
mobileNumberContainer.classList.add("mb-3");
form.appendChild(mobileNumberContainer);

const mobileNumberLabel = document.createElement('label');
mobileNumberLabel.for = "Mobile-number";
mobileNumberLabel.classList.add("form-label");
mobileNumberLabel.innerText = "Mobile Number";
mobileNumberContainer.appendChild(mobileNumberLabel);

const mobileNumberInput = document.createElement('input');
mobileNumberInput.type = "number";
mobileNumberInput.id = "Mobile-number";
mobileNumberInput.classList.add("form-control");
mobileNumberContainer.appendChild(mobileNumberInput);

const submitButton = document.createElement('button');
submitButton.type = "submit";
submitButton.classList.add("submit-button", "btn", "btn-primary");
submitButton.innerText = "Submit";
form.appendChild(submitButton);

const addUser = document.createElement('div');
const addUserTitle = document.createElement('h1');
addUserTitle.innerText = "Add New User";
addUser.appendChild(addUserTitle);
const showHideButton = document.createElement('button');
showHideButton.classList.add("show-hide-button", "btn", "btn-secondary", "mb-3");
showHideButton.innerText = "Hide Form";
addUser.appendChild(showHideButton);

formInput.prepend(addUser);

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

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  const userMobileNumber = mobileNumberInput.value;

  if (userName && userEmail && userMobileNumber) {
    const nameData = document.createElement('span');
    nameData.innerText = `${userName}`;
    userData.appendChild(nameData);

    const emailData = document.createElement('span');
    emailData.innerText = `${userEmail}`;
    userData.appendChild(emailData);

    const mobileNumberData = document.createElement('span');
    mobileNumberData.innerText = `${userMobileNumber}`;
    userData.appendChild(mobileNumberData);

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