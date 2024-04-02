const containsDifficulty = x =>
    x.textContent == "Easy" 
    || x.textContent == "Medium" 
    || x.textContent == "Hard";

const containsAcceptance = x =>
    x.textContent.endsWith("%")
    && !isNaN(parseFloat(x.textContent.replace("%", "")));

function setAllInvisible(arr, name) {
    if (arr) {
        console.log("found " + name + " : " + arr.length);
        arr.forEach (s => 
            s.style.visibility = "hidden");
    }
}

function hideDifficulty() {
    let spans = document.getElementsByTagName("span");
    let divs = document.getElementsByTagName("div");
    let ps = document.getElementsByTagName("p");
    
    if (spans) {
        let spansArray = Object.values(spans);
        setAllInvisible(
            spansArray.filter(containsDifficulty),
            "spansContainingDifficulty");

        setAllInvisible(
            spansArray.filter(containsAcceptance),
            "spansContainingAcceptance");
    }

    if (divs) {
        let divsArray = Object.values(divs);
        setAllInvisible(
            divsArray.filter(containsDifficulty),
            "divsContainingDifficulty");
    }

    if (ps) {
        let psArray = Object.values(ps);
        setAllInvisible(
            psArray.filter(containsDifficulty),
            "psContainingDifficulty");
    }
}

chrome.storage.sync
    .get("hideDifficulty").then(result => {
        console.log("hideDifficulty :" + result.hideDifficulty);
        if (result.hideDifficulty) {
            setTimeout(hideDifficulty, 2000);
        }
    });
