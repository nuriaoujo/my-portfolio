var submitted=false;

document.getElementById("gform").addEventListener('submit', () => {
    const dialog = document.getElementsByClassName("dialog-style");
    dialog[0].setAttribute("popup", "open");
});
