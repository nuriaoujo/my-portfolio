

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