document.getElementById("wip").onmouseenter = MouseEnter;
function MouseEnter() {
    document.getElementById("wip").textContent = "Work in progress"
}

document.getElementById("wip").onmouseleave = MouseLeave;
function MouseLeave() {
    document.getElementById("wip").textContent = "TODO List"
}

