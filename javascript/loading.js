var myVar;

function myFunctionLoading() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("pagesLoading").style.display = "none";
    document.getElementById("location").style.display = "block";
}