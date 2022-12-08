import { createRequire } from 'node:module'

import type { Protocol } from './types'
import type AppiumCommands from './commands/appium'
import type ChromiumCommands from './commands/chromium'
import type GeckoCommands from './commands/gecko'
import type JSONWPCommands from './commands/jsonwp'
import type MJSONWPCommands from './commands/mjsonwp'
import type SauceLabsCommands from './commands/saucelabs'
import type SeleniumCommands from './commands/selenium'
import type WebDriverCommands from './commands/webdriver'
import type WebDriverBidiCommands from './commands/webdriverBidi'

const require = createRequire(import.meta.url)
const WebDriverProtocol: Protocol = require('../protocols/webdriver.json')
const WebDriverBidiProtocol: Protocol = require('../protocols/webdriverBidi.json')
const MJsonWProtocol: Protocol = require('../protocols/mjsonwp.json')
const JsonWProtocol: Protocol = require('../protocols/jsonwp.json')
const AppiumProtocol: Protocol = require('../protocols/appium.json')
const ChromiumProtocol: Protocol = require('../protocols/chromium.json')
const GeckoProtocol: Protocol = require('../protocols/gecko.json')
const SauceLabsProtocol: Protocol = require('../protocols/saucelabs.json')
const SeleniumProtocol: Protocol = require('../protocols/selenium.json')

export interface ProtocolCommands extends WebDriverCommands, Omit<JSONWPCommands, keyof WebDriverCommands>, AppiumCommands, ChromiumCommands, Omit<MJSONWPCommands, keyof AppiumCommands | keyof ChromiumCommands>, SauceLabsCommands, SeleniumCommands {}

export * from './types.js'
export {
    // protocols
    WebDriverProtocol, MJsonWProtocol, JsonWProtocol, AppiumProtocol,
    ChromiumProtocol, SauceLabsProtocol, SeleniumProtocol, GeckoProtocol,
    WebDriverBidiProtocol,
    // commands
    AppiumCommands, ChromiumCommands, JSONWPCommands, MJSONWPCommands,
    SauceLabsCommands, SeleniumCommands, WebDriverCommands, GeckoCommands,
    WebDriverBidiCommands
}

export const CAPABILITY_KEYS = [
    'browserName', 'browserVersion', 'platformName', 'acceptInsecureCerts',
    'pageLoadStrategy', 'proxy', 'setWindowRect', 'timeouts', 'strictFileInteractability',
    'unhandledPromptBehavior', 'webSocketUrl'
]
