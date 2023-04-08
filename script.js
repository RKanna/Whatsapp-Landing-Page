const tabsBox = document.querySelector(".boxesheader"),
arrowIcons = document.querySelectorAll(".icon i");

 let isDragging = false;




 arrowIcons.forEach(icon => {

    icon.addEventListener("click", () => {
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        handleIcons();


    });
 });

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;

}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);