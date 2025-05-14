// JavaScript for toggle functionality 
// Select all menu titles
const menuTitles = document.querySelectorAll(".menu-title");

// Loop through each menu title
menuTitles.forEach(title => {
  title.addEventListener("click", () => {
	// Get the submenu (next sibling element)
	const submenu = title.nextElementSibling;

	// Get the icon element inside the title
	const icon = title.querySelector(".icon");

	// Toggle the submenu visibility
	submenu.classList.toggle("show");

	// Change the icon depending on submenu state
	icon.textContent = submenu.classList.contains("show") ? "▲" : "▼";
  });
});

