const containsDifficulty = x =>
    x.textContent == "Easy" 
    || x.textContent == "Medium" 
    || x.textContent == "Hard";

const containsAcceptance = x =>
    x.textContent.endsWith("%")
    && !isNaN(parseFloat(x.textContent.replace("%", "")));

function setVisibility(arr, name, visibility) {
    if (arr) {
        console.log("found " + name + " : " + arr.length);
        arr.forEach (s => 
            s.style.visibility = visibility);
    }
}

function hideDifficulty(hide) {
    console.log("Setting difficulty hidden : " + hide);
    let spans = document.getElementsByTagName("span");
    let divs = document.getElementsByTagName("div");
    let ps = document.getElementsByTagName("p");
    let visibility = "visible";

    if (hide) {
        visibility = "hidden";
    }

    if (spans) {
        let spansArray = Object.values(spans);
        setVisibility(
            spansArray.filter(containsDifficulty),
            "spansContainingDifficulty",
            visibility);

        setVisibility(
            spansArray.filter(containsAcceptance),
            "spansContainingAcceptance",
            visibility);
    }

    if (divs) {
        let divsArray = Object.values(divs);
        setVisibility(
            divsArray.filter(containsDifficulty),
            "divsContainingDifficulty",
            visibility);
    }

    if (ps) {
        let psArray = Object.values(ps);
        setVisibility(
            psArray.filter(containsDifficulty),
            "psContainingDifficulty",
            visibility);
    }
}