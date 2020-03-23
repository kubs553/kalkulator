import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      $$(document).on('page:init', '.page[data-name="kalkulator"]', function (e) {
        $$('button[id="dodaj"]').on('click', function() {
          var liczba1 = document.getElementById('liczba1').value;
          var liczba2 = document.getElementById('liczba2').value;
         document.getElementById('wynik').value = Number(liczba1) + Number(liczba2);
        });
        $$('button[id="odejmij"]').on('click', function() {
          var liczba1 = document.getElementById('liczba1').value;
          var liczba2 = document.getElementById('liczba2').value;
         document.getElementById('wynik').value = Number(liczba1) - Number(liczba2);
        });
        $$('button[id="pomnoz"]').on('click', function() {
          var liczba1 = document.getElementById('liczba1').value;
          var liczba2 = document.getElementById('liczba2').value;
         document.getElementById('wynik').value = Number(liczba1) * Number(liczba2);
        });
        $$('button[id="podziel"]').on('click', function() {
          var liczba1 = document.getElementById('liczba1').value;
          var liczba2 = document.getElementById('liczba2').value;
         document.getElementById('wynik').value = Number(liczba1) / Number(liczba2);
        });
      })
    },
  },
});