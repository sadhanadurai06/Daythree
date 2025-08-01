document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("message");

  if (u === "admin" && p === "123") {
    msg.textContent = "Login successful!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Invalid login.";
    msg.style.color = "red";
  }
});