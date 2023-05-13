var notFoundLi = document.getElementById("notFoundLi");
var count = 1;
if (notFoundLi) {
  if (count === 0) {
    notFoundLi.style.display = ""; // Display "notFoundLi" if count is 0
  } else {
    notFoundLi.style.display = "none"; // Hide "notFoundLi" if count is not 0
  }
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbox');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  var count = 0;
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      count++;
    } else {
      li[i].style.display = "none";
    }
  }

  // Show/hide "notFoundLi" based on the count value
  var notFoundLi = document.getElementById("notFoundLi");
  if (notFoundLi) {
    if (count === 0) {
      notFoundLi.style.display = ""; // Display "notFoundLi" if count is 0
    } else {
      notFoundLi.style.display = "none"; // Hide "notFoundLi" if count is not 0
    }
  }
}
