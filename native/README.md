# Views demo app native version

_New to coding or need to setup your development environment? [Check out this
guide](https://github.com/viewstools/docs/blob/master/DevEnvironmentSetup.md)._


_[What's this app all about?](../README.md)_


Get the app and install its dependencies. Open the terminal and run:
```
git clone https://github.com/viewstools/demo
cd demo/native
yarn install
```

In order to get live information about the bikes stations such as free bikes and
available spaces, we need to connect to the JCDecaux API. To use it on your
own you will need to [setup your own API key here](https://developer.jcdecaux.com/#/login).
Once you have it, create a file called `env.json` on the `native/src` folder that looks
like this:
```
{
  "BIKES": "here goes your key"
}
```

Running a native app is slightly more complex than running a web one as you need
a place to preview it. If you have an Android-based phone or an iPhone,
install the [Expo client](https://expo.io/tools#client) and connect to the same
wireless network as your computer. On Android, use the Expo app to scan the QR code
from your terminal to open your project. On iOS, follow on-screen instructions to get a link.
[See the official Create React Native App docs](https://facebook.github.io/react-native/docs/getting-started.html#running-your-react-native-application)
for more info on the setup.

Now you're ready to start the app. Open a terminal and run:
```
yarn start
```

The source of your code is in the `src` folder. The entry point is at [App.js](App.js).

You can download it from the App Store (LINK) and Play Store (LINK).

Licensed BSD-3-Clause.

(c) 2018 Views Tools.
