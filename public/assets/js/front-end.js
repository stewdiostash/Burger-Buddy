// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    
  $(".prep-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".eat-it").on("click", function (event) {
    const id = $(this).data("id");

    const burgerDevoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerDevoured,
    }).then(function () {
      console.log("changed devoured to ", burgerDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
