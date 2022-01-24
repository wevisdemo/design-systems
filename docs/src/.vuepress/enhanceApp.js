import WvNavbar from '@wevisdemo/ui/components/navbar.vue';
import WvFooter from '@wevisdemo/ui/components/footer.vue';

import '@wevisdemo/ui/components/styles.css';

export default ({ Vue }) => {
  Vue.component('WvNavbar', WvNavbar);
  Vue.component('WvFooter', WvFooter);
};
