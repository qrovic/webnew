const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const listItems = sidebar.querySelectorAll("li"); // Select all <li> elements within the sidebar

function toggleSidebar() {
    sidebar.classList.toggle("close");
    sidebar.classList.toggle("open");
}

function handleWindowResize() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        sidebar.classList.add("close");
        toggle.style.display = "flex";
    } else {
        sidebar.classList.remove("close");
        toggle.style.display = "block"; 
    }
}


handleWindowResize();


toggle.addEventListener("click", toggleSidebar); 


window.addEventListener("resize", handleWindowResize);


window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        sidebar.classList.add("close");
    }
});


window.addEventListener("resize", checkOverflow);
window.addEventListener("load", checkOverflow);
