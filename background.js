chrome.runtime.onMessage.addListener(
    (request, _, sendMessage) => {
        if (request.message == "hello") sendMessage({ "color": "red" })
    }
)
