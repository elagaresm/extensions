const storageCache = {};

const initStorageCache = chrome.storage.sync.get().then((items) => {
    Object.assign(storageCache, items);
});


try {
    await initStorageCache
} catch (e) {
    console.log("Error with storage")
}


