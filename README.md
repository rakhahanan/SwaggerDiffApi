# SwaggerDiff API

A simple to use swaggerdiff api based on [SwaggerDiff](https://github.com/zallek/swagger-diff)
To be used for backwards compatibility checks or similar for your apis.

The Docker image is about 110MB

## Getting Started

The api is located on port 80 and has one endpoint
`/diff`

the diff endpoint takes a POST request with a simple body

```
{
  "old": "",
  "new": ""
}
```

where old, is the old previous spec and new is the.. you guessed it.. new spec.

### Example

```
{
  "old": "https://raw.githubusercontent.com/swagger-api/swagger-spec/master/examples/v2.0/json/petstore-expanded.json",
  "new": "https://raw.githubusercontent.com/swagger-api/swagger-spec/master/examples/v2.0/json/petstore-minimal.json"
}
```

old and new can either be a uri to the swagger.json or the actual swagger.json.

The api response looks like the following

```
{
  "errors": [],
  "warnings": [],
  "infos": [],
  "unmatchDiffs": []
}
```

containing the rules "broken".
See the [How it works](https://github.com/zallek/swagger-diff#how-it-works) in the swagger-diff docs
### Prerequisites

**NodeJS**

### Installing

#### Clone the repo

```
git clone https://github.com/VisualBean/SwaggerDiffApi.git
```

#### Install the dependencies

```
npm install
```

#### Run the app

```
npm start
```

Profit! :tada:

## Deployment

### Build the docker image

#### on windows

```
.\build.ps1
```

#### Linux

```
bash build.sh
```

### Deploy

```
docker run -p 80:80 -d swagger-diff-api
```
The api is now available at http://localhost/diff
## Built With

- [Express](https://expressjs.com/) - Node Server
- [SwaggerDiff](https://github.com/zallek/swagger-diff) - SwaggerDiffer
- [Nodemon](https://nodemon.io/) - For hot-reload
- [NodeJS](https://nodejs.org)

## Authors

- **Alex Steinhauer-Wichmann**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
