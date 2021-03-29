let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});


// form spreed
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXhEyGrf18KT4Ku4Dl8OewcnUSyJBWf9JUZdMYlna6RwVufL_jpJ2TFCr3tZqhB8SQ/exec'
const form = document.forms['form-contact-coffee'];
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {

      // my alert
      myAlert.classList.toggle('d-none');

      // reset form
      form.reset();
      console.log('Success!', response)
  })
    .catch(error => console.error('Error!', error.message))
})