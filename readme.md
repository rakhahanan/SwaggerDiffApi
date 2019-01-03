# SwaggerDiff API

A simple to use swaggerdiff api based on [SwaggerDiff](https://github.com/zallek/swagger-diff)
To be used for backwards compatibility checks or similar for your apis.

## Getting Started

The api is located on port 80 and has one endpoint
`/diff`

the diff endpoint takes a post request with a simple body

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
	"old": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json",
	"new": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json"
}
```

old and new can either be a uri to the swagger.json or the actual swagger.json.

The api responds with an errors and warnings array

```
{
    "errors": [],
    "warnings": []
}
```

containing the rules "broken".
See the [How it works](https://github.com/zallek/swagger-diff#how-it-works) in the swagger-diff docs
### Prerequisites

**NodeJS**

### Installing

Install the dependencies

```
npm install
```

Run the express server

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
docker run -d visualbean/swagger-diff-api
```

## Built With

- [Express](https://expressjs.com/) - Node Server
- [SwaggerDiff](https://github.com/zallek/swagger-diff) - SwaggerDiffer
- [Nodemon](https://nodemon.io/) - For hot-reload
- [NodeJS](https://nodejs.org)

## Authors

- **Alex Steinhauer-Wichmann**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
