
chrome.storage.sync
    .get("hideDifficulty")
    .then(result => {
        console.log("hideDifficulty : " + result.hideDifficulty);
        if (result.hideDifficulty) {
            document
                .getElementById('hideDifficulty')
                .checked = true;
            }
        });

function setHideDifficulty(event) {
    let hideDifficulty = event.target.checked;
    chrome.storage.sync
    .set({hideDifficulty: hideDifficulty})
    .then(() => {
        console.log('Hide difficulty set to : ' + hideDifficulty);
    });
}

document
    .getElementById('hideDifficulty')
    .addEventListener('click', setHideDifficulty);