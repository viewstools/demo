# Views demo app web version

_New to coding or need to setup your development environment? [Check out this
guide](https://github.com/viewstools/docs/blob/master/DevEnvironmentSetup.md)._


_[What's this app all about?](../README.md)_


Get the app and install its dependencies. Open the terminal and run:
```
git clone https://github.com/viewstools/demo
cd demo/web
yarn install
```

The web app uses Google Maps to display the stations on a map. To use it on your
own you will need to [setup your own API key here](https://developers.google.com/maps/documentation/javascript/get-api-key).
Once you have it, create a file called `.env` on the `web` folder that looks
like this:
```
REACT_APP_GOOGLE_MAPS=key
```

In order to get live information about the bikes stations such as free bikes and
available spaces, we need to connect to the JCDecaux API. To use it on your
own you will need to [setup your own API key here](https://developer.jcdecaux.com/#/login).
Once you have it, open the `.env` you made before on the `web` folder and add a
line like this one:
```
REACT_APP_BIKES=here goes your key
```

Now you're ready to start the app. Open a terminal and run:
```
yarn start
```

It should open the browser in http://localhost:3000 for you automatically.

The source of your code is in the `src` folder. The entry point is at [src/index.js](src/index.js).

You can try it online at https://demo.views.tools.

Licensed BSD-3-Clause.

(c) 2018 Views Tools.
