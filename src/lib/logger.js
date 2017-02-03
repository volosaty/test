import { logLevel } from './enums'
import _options from './options'
import { getDateString } from './misc'

const log = (text, level = logLevel.DEBUG, devChat = false) => {
    if (!text) return
    if (_options.log == logLevel.DEBUG
        || (_options.log == logLevel.INFO && (level == logLevel.INFO || level == logLevel.ERROR))
        || (_options.log == logLevel.ERROR && level == logLevel.ERROR)) {
        const t = `${getDateString()} | ${level} | ${text}`
        console.log(t)
        //TODO: сделать дублирование сообщений в чат
        // if (devChat || _options.duplicateLogToDevChat) {
        //     SendMessage(_options.devId, t)
        // }
    }
}

const l = (text, devChat = true) => {
    log(text, logLevel.DEBUG, devChat)
}