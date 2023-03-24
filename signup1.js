//////////////JQUERY

$("document").ready(() => {
  let UsersContainer;
  var MailRepeated;
  if (localStorage.getItem("memory") == null) {
    UsersContainer = [];
  } else {
    UsersContainer = JSON.parse(localStorage.getItem("memory"));
  }
  $("#sub").on("click", addUser);
  function CheckRepeating() {
    for (let i = 0; i < UsersContainer.length; i++) {
      var emailValue = $("#exampleInputEmail1").val();
      if (emailValue == UsersContainer[i].userEmail) {
        MailRepeated = true;
      } else {
        MailRepeated = false;
      }
    }
  }

  function addUser(e) {
    var emailValue = $("#exampleInputEmail1").val();
    CheckRepeating();
    if (emailValue != "" && emailValue.match(/\w+@\w+.(com|org|edu|eg)/gi)) {
      if (!MailRepeated) {
        let myUser = {
          userEmail: emailValue,
        };
        UsersContainer.push(myUser);
        localStorage.setItem("memory", JSON.stringify(UsersContainer));
        $("#anchor1").attr("href", "./signup2.html");
      } else {
        $("#anchor1").attr("href", "./signin.html");
      }
    } else {
      e.preventDefault();
      $("#exampleInputEmail1").css("border", "1px solid red");
      $("#inValidateEmail").addClass("d-block").removeClass("d-none");
    }
  }
  $("form").on("submit", (e) => {
    e.preventDefault();
  });
});
