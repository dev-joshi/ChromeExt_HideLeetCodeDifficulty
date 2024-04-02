
chrome.storage.sync
    .get("hidden").then(result => {
        console.log("hideDifficulty :" + result.hidden);
        
        // Added hardcoded timeout for case where 
        // leet code app is still loading when the script runs.
        setTimeout(() => hideDifficulty(result.hidden), 2000);
        
        hideDifficulty(result.hidden);
    });
