// const storageCache = {}
//
// const initStorageCache = chrome.storage.sync.get().then(items => Object.assign(storageCache, items))

// chrome.runtime.onMessage.addListener(async (message, _, sendResponse) => {
//     if (message.message == "getCommands") {
//         try {
//             await initStorageCache
//             chrome.tabs.sendMessage(tab.id, storageCache)
//             // sendResponse({ storageCache })
//         } catch (e) {
//             console.log("error retrieving data from storage")
//         }
//     }
// })

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    const data = await chrome.storage.sync.get("commands")
    console.log("Background data: ", data)
    console.log(sender.tab)
    chrome.tabs.sendMessage(sender.tab.id, data)
})
