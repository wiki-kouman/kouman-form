let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n === x.length - 2) {
    document.getElementById("nextBtn").innerHTML = "Envoyer";
  } else {
    document.getElementById("nextBtn").innerHTML = "Suivant";
  }
  if (n === x.length - 1) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
    document.getElementsByClassName("count_container")[0].style.display =
      "none";
    document.getElementById("form_title").style.textAlign = "center";
    document.getElementById("form_subtitle").style.display = "none";
  }

  let counter_total = document.getElementById("counter_total");
  let current_counter = document.getElementById("current_counter");
  current_counter.innerText = n + 1;
  counter_total.innerText = x.length - 1;
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  return valid; // return the valid status
}

// Packs animation of Kouman

function packAnimation(n) {
  const packs = document.getElementsByClassName("pack");
  for (let i = 0; i < packs.length; i++) {
    if (i === n) {
      packs[i].className += " active";
      packs[i].querySelector("p").style.display = "block";
    } else {
      packs[i].classList.remove("active");
      packs[i].querySelector("p").style.display = "none";
    }
  }
}

// Validation of differents forms

// form 1

// Retrieves the reference of the input field

inputField = document.getElementById("myFields");

inputField.addEventListener("keydown", function (event) {
  var regex = /[0-9!@#$%^&*()µ^¨_§£+=[\]{};':"\\|,.<>/?~`-]/;
  x;
  if (regex.test(event.key)) {
    event.preventDefault();
  }
});

// Form 2

const input = document.getElementById("myPhone");

input.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    /^[a-zA-Z\s]+$/.test(key) === true &&
    key !== "Delete" &&
    key !== "Backspace"
  ) {
    event.preventDefault();
  }
});

// Form 3

const emailInput = document.getElementById("myEmail");

emailInput.addEventListener("input", function (event) {
  const value = event.target.value;

  if (/[^a-zA-Z0-9\s]/.test(value)) {
    event.target.value = value.replace(/[^a-zA-Z0-9\s.@]/g, "");
  }
});
