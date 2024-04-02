
chrome.storage.sync
    .get("hidden")
    .then(result => {
        console.log("hideDifficulty : " + result.hidden);
        document
            .getElementById('hideDifficultyCheckbox')
            .checked = result.hidden;
        });

function setHideDifficulty(event) {
    let hidden = event.target.checked;
    chrome.storage.sync
        .set({hidden: hidden})
        .then(async () => {
            console.log('Hide difficulty set to : ' + hidden);

            const tabs = await chrome.tabs.query({
                url: [
                    "https://leetcode.com/problems/*",
                    "https://leetcode.com/problemset/*",
                    "https://leetcode.com/studyplan/*"
                ]
            });

            for (const tab of tabs) {
                console.log('Hiding difficulty on tab : ' + tab.id);
                chrome.scripting
                    .executeScript({
                        target: {tabId: tab.id},
                        files: ["scripts/hide.js"],
                    });
            }
        });
}

document
    .getElementById('hideDifficultyCheckbox')
    .addEventListener('click', setHideDifficulty);