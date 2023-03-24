$("document").ready(() => {
  $("ul.list-group li").each(function () {
    $(this).on("mouseover", () => {
      $(this).addClass("active1");
    });
    $(this).on("mouseleave", () => {
      $(this).removeClass("active1");
    });
  });
  function Fetching() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(dataFetched);
  }
  Fetching();
  var myDiv = $("#products");
  function dataFetched(myData) {
    localStorage.setItem("producrs", JSON.stringify(myData.products));
    let myObj = myData.products;

    for (let i = 4; i < 16; i++) {
      myDiv.append(`<div class="col-lg-3 col-md-4 my-3 " ">
    
      <div class="card  rounded-3 text-center h-100" style="box-shadow:0px 0px 9px 1px #ffeb3b">
     
    <img src="${myObj[i].images[2]}" class="card-img-top p-4 rounded-3" height="60%" alt="Products">
    <div class="card-body">
    <h5 class="card-title p-2 fw-bolder  " height="30%">${myObj[i].title}</h5>
      <p class="fw-bold">Price : $${myObj[i].price}</p>
      <a href="#" class="btn btn-warning bg-opacity-25 ">Shop Now</a>
    </div>
  </div>
      </div>
      `);
    }
  }
});
