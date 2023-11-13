// nav active link change
$(document).ready(function () {
    $(".nav-link").on("click", function () {
        // Remove the 'active' class from all links
        $(".nav-link").removeClass("active-link");

        // Add the 'active' class to the clicked link
        $(this).addClass("active-link");
    });
});
// // night mode
// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let themeButton = document.getElementById("theme-button");

    if (element.classList.contains("dark-mode")) {
        themeButton.classList.remove("fa-moon");
        themeButton.classList.add("fa-sun");
    } else {
        themeButton.classList.remove("fa-sun");
        themeButton.classList.add("fa-moon");
    }
} 
// replace this dark mode function 
// email validation
function validateForm() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email address";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

// questions accordion
const accordionItems = document.querySelectorAll(".questions-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions-header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};
function errorMessage() {
    alert("404 Error");
}
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// zoom function
const zoomImg = document.getElementById('zoom-img');

zoomImg.addEventListener('mousemove', (event) => {
    const containerRect = zoomImg.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    const percentX = (x / containerRect.width) * 100;
    const percentY = (y / containerRect.height) * 100;

    zoomImg.style.transformOrigin = `${percentX}% ${percentY}%`;
    zoomImg.classList.add('zoomed');
});

zoomImg.addEventListener('mouseleave', () => {
    zoomImg.classList.remove('zoomed');
});