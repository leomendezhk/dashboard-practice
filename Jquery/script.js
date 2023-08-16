//Using Jquery one can simplify working with the dom
// $("#header").html("I got changed in Jquery");

//Manipulate CSS
// $("#header").css("color", "orange");

//Add class or remove class
// $("p").addClass("Article");
// $("p").removeClass("Article");

//change value of an input
// $("input").val("I love to code");

//remove element
// $("div").remove();

//ADD EVENT LISTENER USING JQUERY
// $("h1").on("click", function () {
//   console.log(" clicked!");
// });

//Manipulate form use

// $("form").submit(function (event) {
//   event.preventDefault();
//   let username = event.target.username.value;
//   let password = event.target.password.value;

//   console.log("password", password);
//   console.log("username", username);
// });

//inser html content before and after

$("div").before("<h1>This is an inserted header</h1>");
$("div").after("<h2>This is an inserted  h2</h2>");
$("div").prepend("prepend");
$("div").append("append");
