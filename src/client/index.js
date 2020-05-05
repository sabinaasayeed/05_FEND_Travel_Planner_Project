import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { checkForInput } from './js/inputChecker'
import { handleSubmit } from './js/formHandler'
import { createModalUi } from './js/ui'
import './styles/styles.scss'

const $ = require("jquery");

export {
    handleSubmit,
    checkForInput
}

console.log(checkForInput);