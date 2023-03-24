$("document").ready(() => {
  if (localStorage.getItem("memory") == null) {
    UsersContainer = [];
  } else {
    UsersContainer = JSON.parse(localStorage.getItem("memory"));
  }
  $("#TextInput").val(UsersContainer[UsersContainer.length - 1].userEmail);
  $("#su").on("click", (e) => {
    var Password = $("#pwd").val();
    var RepeatPassword = $("#Cpwd").val();
    if (
      Password == "" ||
      RepeatPassword == "" ||
      Password !== RepeatPassword ||
      Password.length < 8 ||
      RepeatPassword.length < 8
    ) {
      e.preventDefault();
      $("#validate").removeClass("d-none").addClass("d-block");
    } else {
      UsersContainer[UsersContainer.length - 1].password = Password;
      localStorage.setItem("memory", JSON.stringify(UsersContainer));
    }
  });
  $("form").on("submit", (e) => {
    e.preventDefault();
  });
});
