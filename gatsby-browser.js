import "./src/styles/fonts.css"
// Fixes sizing bug when font awesome icons are being loaded
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// For preloading the icon library. Could also import/add the entire fas/fab libraries to make external content independent of these specific imports
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faStrava,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false
library.add(faPaperPlane, faLinkedinIn, faGithub, faStrava)
