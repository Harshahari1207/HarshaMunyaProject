const submit = document.getElementById("submit");
submit.addEventListener("submit", function() {
    console.log("Refreshing page");
    location.reload ? location.reload() : location = location;
});