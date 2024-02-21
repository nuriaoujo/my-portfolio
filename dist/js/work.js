
let currentIndex = 0;

const dialog = document.getElementsByTagName("dialog");

const openDialog = (a) => {
    dialog[a].showModal();
}

const closeDialog = (event) => {
    const arrayImg = Array.from(event.target.getElementsByClassName("image-list"));
    const txt = event.target.getElementsByClassName("text-container");
    currentIndex = 0;

    txt[0].innerText= `${currentIndex + 1} ... 3`;
    showImage(arrayImg);
}


function showImage(arrayImg) {
    arrayImg.forEach(function (image) {
        image.style.display = "none";
    });

    arrayImg[currentIndex].style.display = "block";
};

function previous(event) {
    const arrayImg = Array.from(event.target.parentElement.parentElement.getElementsByClassName("image-list"));
    const txt = event.target.parentElement.getElementsByClassName("text-container");

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = arrayImg.length - 1;
    }

    txt[0].innerText= `${currentIndex + 1} ... 3`;
    showImage(arrayImg);
}

function next(event) {
    const arrayImg = Array.from(event.target.parentElement.parentElement.getElementsByClassName("image-list"));
    const txt = event.target.parentElement.getElementsByClassName("text-container");

    currentIndex++;
    if (currentIndex >= arrayImg.length) {
        currentIndex = 0;
    }

    txt[0].innerText= `${currentIndex + 1} ... 3`;
    showImage(arrayImg);
}
