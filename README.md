# App Engine Demo

> Author: C. Crerar

This is a demo of the usage of `Google Cloud Platform` [App Engine Service](https://cloud.google.com/run).

![Mobile First](https://cdn-cloudflare.ga/assets/mobile-first/mobile-first-003.jpg)

It is a `mobile first` application that uses `Node.js` version of the service and sports a custom `Express.js` application that implements `pug` as the view engine.

Along with this it also implements a `CI/CD` pipeline that automatically re-deploys the application after passing as series of tests.

App is deployed usin the `cloudbuild.yml` when running the command:

```bash
gcloud app deploy
```