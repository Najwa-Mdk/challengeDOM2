// Select increment and decrement buttons
var plus = document.getElementsByClassName("incr");
var minus = document.getElementsByClassName("decr");

// Select counter
var counter = document.getElementById("counter");

// Variable to track count
var count = 0;

// Display initial count value
counter.innerHTML = count;

// Function to increment count
plus.addEventListener("click", function() {
  count++;
  counter.innerHTML = count;
});

// Function to decrement count
minus.addEventListener("click", function(){
  count--;
  counter.innerHTML = count;
});
