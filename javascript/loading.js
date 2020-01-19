var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("pagesLoading").style.display = "none";
    document.getElementById("location").style.display = "block";
}