$("document").ready(() => {
  let myButton = $("#my");
  if (localStorage.getItem("memory") == null) {
    UsersContainer = [];
  } else {
    UsersContainer = JSON.parse(localStorage.getItem("memory"));
  }
  $("#disabledTextInput").val(
    UsersContainer[UsersContainer.length - 1].userEmail
  );
  myButton.on("click", (e) => {
    var password = $("#Lpwd").val();
    if (password == "" || password.length < 8) {
      e.preventDefault();
      $("#validate").removeClass("d-none").addClass("d-block");
    }
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
  });
});
