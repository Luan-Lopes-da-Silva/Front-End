import { clearDisplay,printOnDisplay} from "./displayFunction.js"
import { display } from "./consts.js"
import { calculate } from "./calc.js"
import copyToClipboard from "./clipboard.js"




  




document.getElementById('clear').addEventListener('click',clearDisplay)
display.addEventListener('keydown',printOnDisplay)
document.getElementById('equal').addEventListener('click',calculate)
document.getElementById('themeSwitcher').addEventListener('click',themeSwitcher)
document.getElementById('copyToClipboard').addEventListener('click',copyToClipboard)
