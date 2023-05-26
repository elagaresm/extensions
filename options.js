const saveBtn = document.querySelector("button")
const scripts = document.querySelectorAll(".script")
const shortcuts = document.querySelectorAll(".shortcut")

console.log(scripts.length)

let commands = {}

const save = async () => {

    console.log('clicked!')

    console.log(scripts[0].value)

    for (let i = 0; i < scripts.length; i++) {
        commands[`command${i}`] = { [shortcuts[i].value] : scripts[i].value}
    }

    console.log(commands)


    await chrome.storage.sync.set({ commands }).then(() => {
        alert("Command and shortcut were saved")
    })
}

const restore = async () => {

    for (let i = 0; i < scripts.length; i++) {
        scripts[i].value = commands[`command[i]`]
    }

    let commandDB = await chrome.storage.sync.get(["command"]).then(result => result.command)


    let shortcutDB = await chrome.storage.sync.get(["shortcut"]).then(result => result.shortcut)

    command.value = commandDB;
    shortcut.value = shortcutDB;
}

saveBtn.addEventListener('click', save)
// document.addEventListener('DOMContentLoaded', restore)
