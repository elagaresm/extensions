document.addEventListener("keydown", async (event) => {
    const target = event.target
    const tagName = target.tagName.toLowerCase() // default is uppercase
    const isInput = tagName === "input" || tagName == "textarea"

    if (event.key == "s" && !isInput) {
        const { color } = await chrome.runtime.sendMessage({ "message": "hello" })
        const h1 = document.querySelector("h1")
        h1.style.color = color
    }
})
