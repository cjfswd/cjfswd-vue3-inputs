import InputText from './components/text.vue';
import InputTextArea from './components/textarea.vue';
import InputDate from './components/date.vue';
import InputSelect from './components/select.vue';
import InputSwitch from './components/switch.vue';
import InputCheckbox from './components/checkbox.vue';
import InputGroupCheckbox from './components/group/checkbox.vue';

import './index.css'

export default {
    install(app: any) {
        app.component('InputText', InputText)
        app.component('InputTextArea', InputTextArea)
        app.component('InputDate', InputDate)
        app.component('InputSelect', InputSelect)
        app.component('InputSwitch', InputSwitch)
        app.component('InputCheckbox', InputCheckbox)
        app.component('InputGroupCheckbox', InputGroupCheckbox)
    }
}

export {
    InputText,
    InputTextArea,
    InputDate,
    InputSelect,
    InputSwitch,
    InputCheckbox,
    InputGroupCheckbox
}