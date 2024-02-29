var submitted=false;

document.getElementById("gform").addEventListener('submit', () => {
    const dialog = document.getElementsByClassName("dialog-style");
    dialog[0].setAttribute("popup", "open");
    setTimeout(() => {
        dialog[0].setAttribute("popup", "close");
    }, 4000);
});
