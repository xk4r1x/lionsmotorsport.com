document.addEventListener("DOMContentLoaded", function () {
   console.log("LMU FSAE Website Loaded!");
});

const teamLeads = [
   { img: "assets/images/Christian.jpeg", name: "Christian", role: "President", desc: "Oversees the entire club, ensuring smooth operations and team success." },
   { img: "assets/images/Jacob.jpeg", name: "Jacob", role: "Project Manager", desc: "Coordinates project timelines, resources, and ensures tasks are completed efficiently." },
   { img: "assets/images/Adam.jpeg", name: "Adam", role: "Secretary", desc: "Handles documentation, meeting notes, and team communication." },
   { img: "assets/images/Collin.jpeg", name: "Collin", role: "Treasurer", desc: "Manages team finances, budgeting, and fundraising efforts." },
   { img: "assets/images/Hayk.jpeg", name: "Hayk", role: "Marketing Lead", desc: "Promotes the team, manages social media, and builds sponsor relations." },
   { img: "assets/images/Anton.jpeg", name: "Anton", role: "Suspension Lead", desc: "Oversees the design and optimization of the suspension system for maximum performance." },
   { img: "assets/images/Harris.jpeg", name: "Harrison", role: "Engine Drivetrain Lead", desc: "Oversees engine and drivetrain development for reliability and power." },
   { img: "assets/images/Sophie.jpeg", name: "Sophie", role: "Driver Ergonomics Lead", desc: "Focuses on driver comfort, safety, and optimal control layout." },
   { img: "assets/images/Lucas.jpeg", name: "Lukas", role: "Fabrication Lead", desc: "Supervises manufacturing and ensures quality in car assembly." },
   { img: "assets/images/Makari.jpeg", name: "Makari", role: "Electronics Co-Lead", desc: "Oversees sensors, software, and embedded system development." },
   { img: "assets/images/Danny.jpeg", name: "Daniel", role: "Electronics Co-Lead", desc: "Develops and integrates electrical systems and wiring harnesses for vehicle performance." },
   { img: "assets/images/Aydan.jpeg", name: "Ayden", role: "Aerodynamics Lead", desc: "In charge of the design of the aerodynamics package to enhance vehicle efficiency and speed." }
];


let currentIndex = 0;

function updateSlide() {
   document.getElementById("team-photo").src = teamLeads[currentIndex].img;
   document.getElementById("team-name").textContent = teamLeads[currentIndex].name;
   document.getElementById("team-role").textContent = teamLeads[currentIndex].role;
   document.getElementById("team-desc").textContent = teamLeads[currentIndex].desc;
}

function nextSlide() {
   currentIndex = (currentIndex + 1) % teamLeads.length;
   updateSlide();
}

function prevSlide() {
   currentIndex = (currentIndex - 1 + teamLeads.length) % teamLeads.length;
   updateSlide();
}

// Initialize the first slide
updateSlide();

document.addEventListener("DOMContentLoaded", function () {
   console.log("LMU FSAE Website Loaded!");

   const modal = document.getElementById("joinTeamModal");

   function showModal() {
      if (modal) {
         modal.style.display = "flex";
         requestAnimationFrame(() => {
            modal.classList.add("show"); // Triggers the fade-in
         });
      }
   }

   function closeModal() {
      if (modal) {
         modal.classList.remove("show");
         setTimeout(() => {
            modal.style.display = "none";
         }, 300); // Wait for fade-out animation to finish
         sessionStorage.setItem("modalShown", "true");
      }
   }

     // Attach close button logic
   const closeBtn = document.querySelector(".close-btn");
   if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
   }

   // Make modal controls accessible to inline HTML
   window.closeModal = closeModal;
   window.showModal = showModal;

   // Show modal after 30 seconds if not already shown
   setTimeout(() => {
      if (!sessionStorage.getItem("modalShown")) {
         showModal();
      }
   }, 30000);




