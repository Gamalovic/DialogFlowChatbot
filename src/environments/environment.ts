// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogFlow:{
    chatBot:'697ecb15a0814881ab3c9ce6b3127ce0'
  },
  firebase:{
    apiKey: "AIzaSyC6oKgcrXDjqe54czMeoN2zqzYbxG8y0Ys",
    authDomain: "floki-8d54b.firebaseapp.com",
    databaseURL: "https://floki-8d54b.firebaseio.com",
    projectId: "floki-8d54b",
    storageBucket: "floki-8d54b.appspot.com",
    messagingSenderId: "735717106865"
  }
};
