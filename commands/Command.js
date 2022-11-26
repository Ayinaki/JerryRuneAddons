import Config from "../Config"

export const Command = register("command", (...args) => {
    if (!args || !args[0]) return Config.openGUI()
    if (args[0] == "help") {
        let messages = [
            `&a&m${ChatLib.getChatBreak(" ")}`,
			`&4 JerryRuneAddons `,
			` `,
            `&3/Jerry &8- Open config GUI`,
			`&a&m${ChatLib.getChatBreak(" ")}`
        ]
    }
}).setName("jerry")