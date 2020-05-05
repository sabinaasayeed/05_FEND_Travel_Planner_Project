import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { checkForInput } from './js/inputChecker'
import { handleSubmit } from './js/formHandler'
import { handleSave } from './js/formHandler'

import './styles/styles.scss'

const $ = require("jquery");

export {
    handleSubmit,
    handleSave,
    checkForInput
}

console.log(checkForInput);