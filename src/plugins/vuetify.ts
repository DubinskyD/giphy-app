import { createVuetify, type ThemeDefinition } from "vuetify";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const myCustomTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    primary: '#9933ff',
    secondary: '#6157ff',
    surface: '#121212',
    'on-surface': '#FFFFFF',
  },
}


export default createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
       color: "#5865f2",
       size: 'small'
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    },
  },
});
