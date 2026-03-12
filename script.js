function sayHello() {
  alert("Hello! Welcome to my website. I hope you enjoy exploring it and learning about my journey in web development.Have fun!");
}

function toggleReflection() {
  const reflectionBox = document.getElementById("reflection-box");

  if (reflectionBox.style.display === "none") {
    reflectionBox.style.display = "block";
  } else {
    reflectionBox.style.display = "none";
  }
}