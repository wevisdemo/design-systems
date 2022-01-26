import WvButton from '@wevisdemo/ui/components/button.vue';
import WvFooter from '@wevisdemo/ui/components/footer.vue';
import WvNavbar from '@wevisdemo/ui/components/navbar.vue';
import WvNavButton from '@wevisdemo/ui/components/nav-button.vue';

import '@wevisdemo/ui/styles/typography.css';
import '@wevisdemo/ui/styles/components.css';

export default ({ Vue }) => {
  Vue.component('WvButton', WvButton);
  Vue.component('WvFooter', WvFooter);
  Vue.component('WvNavbar', WvNavbar);
  Vue.component('WvNavButton', WvNavButton);
};
