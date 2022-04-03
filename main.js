function searchMovie() {
  var inputted = document.getElementById("searchinput").value;
  inputted = inputted.toLowerCase();
  var searchForm = document.getElementById("searchForm");
  searchForm.action = "#"+inputted;
  searchForm.submit();
}





