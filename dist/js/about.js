

function nextPage() {
    document.getElementById("pg1").style.display = "none";
    document.getElementById("pg2").style.display = "grid";
    document.getElementById("paginationtxt").innerText = "2 ... 2";
} 

function lastPage() {
    document.getElementById("pg1").style.display = "grid";
    document.getElementById("pg2").style.display = "none";
    document.getElementById("paginationtxt").innerText = "1 ... 2";
} 

document.getElementById("lastpage").onclick = function() {lastPage()};
document.getElementById("nextpage").onclick = function() {nextPage()};

function openCVOption() {
    const cVBtn = document.getElementsByClassName("options");
    const changeBorderRadiusCv = document.getElementsByClassName("btn-2");
    const cVChervon = document.getElementById("download-chevron");
    if ( cVBtn[0].style.opacity == "1") {
        cVBtn[0].style.opacity = "0";
        cVBtn[0].style.visibility = "hidden";
        changeBorderRadiusCv[0].style.borderRadius  = "9px";
        cVChervon.style.transform = "rotate(0deg)";
    } else {
        cVBtn[0].style.opacity = "1";
        cVBtn[0].style.visibility = "visible";
        changeBorderRadiusCv[0].style.borderRadius  = "9px 9px 0 0";
        cVChervon.style.transform = "rotate(180deg)";
    }
}