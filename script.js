var activeDropDownClass = '';

function toggleDropdown(dropdownID, dropdownClass) {
    document.getElementById(dropdownID).classList.toggle("show");
    activeDropDownClass = dropdownClass;
    arrowToggle(dropdownID);
}

function arrowToggle(id) {
  if (id == "product-dropdown") {
    document.getElementById("product-arrow").classList.toggle("rotated");
  }

  if (id == "company-dropdown") {
    document.getElementById("company-arrow").classList.toggle("rotated");
  }

  if (id == "connect-dropdown") {
    document.getElementById("connect-arrow").classList.toggle("rotated");
  }
  
}

function navToggle() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });

}

navToggle();
  
// When users click outside of dropdown elements
window.onclick = function(event) {
    if (event.target.className != activeDropDownClass) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }

      // rotate arrows 
      if (document.getElementById("product-arrow").classList.contains("rotated")) {
        document.getElementById("product-arrow").classList.toggle("rotated");
      }

      if (document.getElementById("company-arrow").classList.contains("rotated")) {
        document.getElementById("company-arrow").classList.toggle("rotated");
      }

      if (document.getElementById("connect-arrow").classList.contains("rotated")) {
        document.getElementById("connect-arrow").classList.toggle("rotated");
      }
      
    }
  }