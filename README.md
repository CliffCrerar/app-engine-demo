# Google Cloud - Cloud Run 

> Author: C. Crerar

This is a demo of the usage of `Google Cloud Platform` [App Engine Service](https://cloud.google.com/run).

![Mobile First](https://cdn-cloudflare.ga/assets/mobile-first/mobile-first-003.jpg)

It is a `mobile first` application that uses `Node.js` version of the service and sports a custom `Express.js` application that implements `pug` as the view engine.

Along with this it also implements a `CI/CD` pipeline that automatically re-deploys the application after passing as series of tests.

> NOTE: This instruction assumes that a `google cloud platform` `billing account` is registered with an existing `project`. To run this container in google cloud platform requires a `gcp project id` id to exist prior to following the below instructions. To get started with google cloud platform please visit [google cloud platform](https://cloud.google.com).

Prerequisites:
1. Node.js
1. Docker Desktop
2. gcloud account
3. gcloud sdk

### SDK Authentication

If the SDK is installed run `gcloud config` and follow the prompts. (note: you first need a google cloud account for this to work.)

### CI CD - Build and deploy

see `cloudbuild.yaml`

### Manual deployment

##### SCRIPTS

Set the below in the package.json

```json
    "submit": "gcloud builds submit --tag gcr.io/[PROJECT-ID]/[IMAGE]",
    "deploy":"gcloud run deploy express --image gcr.io/[PROJECT-ID]/[IMAGE]"
```

Replace `[PROJECT-ID]` and `[IMAGE]` with the google cloud project name and the desired image name.

> Building the container using cloud build

```
npm run submit
```

> Deploying the built container

```
npm run deploy
```

### Build locally and push to google cloud platform `container registry`
```
 docker build . --tag gcr.io/[PROJECT-ID]/[IMAGE]
```
Replace `[PROJECT-ID]` with your Google Cloud project ID and replace `[IMAGE]` with the image name of your choice.
If you have not yet configured Docker to use the gcloud command-line tool to authenticate requests to Container Registry, do so now using the command:

 gcloud auth configure-docker

You need to do this before you can push or pull images using Docker. You only need to do it once.
Push the container image to Container Registry:

 `docker push gcr.io/[PROJECT-ID]/[IMAGE]`

Replace `[PROJECT-ID]` with your Google Cloud project ID and replace `[IMAGE]` with the image name you chose when you invoked docker build.