function openForm() {
  document.getElementById("consultationModal").style.display = "block";

  // Set min date (today + 1) → only future dates
  const dateInput = document.getElementById("date");
  let today = new Date();
  today.setDate(today.getDate() + 1); // tomorrow
  let minDate = today.toISOString().split("T")[0];
  dateInput.setAttribute("min", minDate);
}

function closeForm() {
  document.getElementById("consultationModal").style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
  let modal = document.getElementById("consultationModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submit (you can connect to backend here)
document.getElementById("consultationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
  closeForm();
});