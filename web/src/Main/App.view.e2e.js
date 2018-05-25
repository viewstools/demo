import App from './App.view.page.js';
import Setup from './Setup.view.page.js'

// window.navigation = {
//   geolocation: {
//     getCurrentPosition(callback, error) {
//       callback({
//         coords: {
//           latitude: 53.338117,
//           longitude: -6.259137,
//         }
//       })
//     }
//   },
//   permissions: {
//     query: () => ({ status: 'granted' })
//   }
// }

describe('App', () => {
  it('After setup I see the cities', () => {
    browser.url(`./`);

    expect(App.Setup().isVisible()).toBe(true)

    Setup.Setup1().click();

    expect(App.Cities().isVisible()).toBe(true)
    // browser.debug();
  });

  it('On the second load, I shouldnt see the setup anymore', () => {
    browser.url(`./`);

    expect(App.Setup().isVisible()).toBe(false)

    expect(App.Cities().isVisible()).toBe(true)
    // browser.debug();
  });
});
