document.addEventListener("DOMContentLoaded", function () {
      const dateInput = document.getElementById("appointmentDate");
      const today = new Date();
      today.setDate(today.getDate() + 1); // start from tomorrow
      const minDate = today.toISOString().split("T")[0];
      dateInput.setAttribute("min", minDate);
   });