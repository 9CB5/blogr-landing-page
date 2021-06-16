var activeDropDownClass = '';

function toggleDropdown(dropdownID, dropdownClass) {
    document.getElementById(dropdownID).classList.toggle("show");
    activeDropDownClass = dropdownClass;
}

function navToggle() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });

}

navToggle();
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    console.log(activeDropDownClass);
    console.log(event.target.className);
    if (event.target.className != activeDropDownClass) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }