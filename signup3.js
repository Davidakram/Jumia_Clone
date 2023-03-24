$("document").ready(() => {
  var MyButton = $("#submitt");
  MyButton.on("click", (e) => {
    var FirstName = $("#Fname").val();
    var MiddleName = $("#Mname").val();
    var lastName = $("#Lname").val();
    var Password = $("#pwd").val();

    if (localStorage.getItem("memory") == null) {
      UsersContainer = [];
    } else {
      UsersContainer = JSON.parse(localStorage.getItem("memory"));
    }
    if (
      FirstName == "" ||
      MiddleName == "" ||
      lastName == "" ||
      Password.length < 8
    ) {
      e.preventDefault();
      $("#checking").addClass("d-block").removeClass("d-none");
    } else if (Password != UsersContainer[UsersContainer.length - 1].password) {
      e.preventDefault();
      $("#checking").addClass("d-block").removeClass("d-none");
      $("#checking").text("WrongPassword");
    }
  });
  $("form").on("submit", (e) => {
    e.preventDefault();
  });
});
