import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPencilAlt,
  faTrashAlt,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

const app = createApp(App);
library.add(faTrashAlt, faCheck);
app.component('icon', FontAwesomeIcon);

app.mount('#app');
