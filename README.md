<h1 align="center">Welcome to Property Value API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" />
  </a>
</p>

> get value of the property - Challenge InGaia

### ✨ [Demo](https://ingaia-square-meter-api.herokuapp.com/api-docs/)

## Clean Architecture

![Cleab Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

### The Dependency Rule

>The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

Extracted from https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule


## Folder Structure

```sh
|-- InGaia-Property-Value-API
    |-- .eslintignore
    |-- .eslintrc.json
    |-- .gitignore
    |-- .huskyrc.json
    |-- .lintstagedrc.json
    |-- .travis.yml
    |-- docker-compose.yml
    |-- jest-integration-config.js
    |-- jest-unit-config.js
    |-- jest.config.js
    |-- package.json
    |-- README.md
    |-- tsconfig-build.json
    |-- tsconfig.json
    |-- src
    |   |-- data
    |   |   |-- protocols
    |   |   |   |-- index.ts
    |   |   |   |-- load-property-value.ts
    |   |   |   |-- services
    |   |   |       |-- index.ts
    |   |   |       |-- load-square-meter-service.ts
    |   |   |-- usecases
    |   |       |-- db-load-property-value.spec.ts
    |   |       |-- db-load-property-value.ts
    |   |       |-- index.ts
    |   |-- domain
    |   |   |-- models
    |   |   |   |-- index.ts
    |   |   |   |-- property-value.ts
    |   |   |   |-- square-meter.ts
    |   |   |-- usecases
    |   |       |-- index.ts
    |   |       |-- load-property-value.ts
    |   |-- infra
    |   |   |-- helpers
    |   |   |   |-- http-helper.ts
    |   |   |-- services
    |   |       |-- square-meter-service.ts
    |   |-- main
    |   |   |-- server.ts
    |   |   |-- adapters
    |   |   |   |-- express-route-adapter.ts
    |   |   |   |-- index.ts
    |   |   |-- config
    |   |   |   |-- app.ts
    |   |   |   |-- config-swagger.ts
    |   |   |   |-- env.ts
    |   |   |   |-- middlewares.ts
    |   |   |   |-- routes.ts
    |   |   |-- docs
    |   |   |   |-- components.ts
    |   |   |   |-- index.ts
    |   |   |   |-- paths.ts
    |   |   |   |-- schemas.ts
    |   |   |   |-- components
    |   |   |   |   |-- bad-request.ts
    |   |   |   |   |-- forbidden.ts
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- not-found.ts
    |   |   |   |   |-- server-error.ts
    |   |   |   |   |-- unauthorized.ts
    |   |   |   |-- paths
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- square-meter-path.ts
    |   |   |   |-- schemas
    |   |   |       |-- error-schema.ts
    |   |   |       |-- index.ts
    |   |   |       |-- square-meter-price-schema.ts
    |   |   |-- factories
    |   |   |   |-- index.ts
    |   |   |   |-- controllers
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- load-property-value-controller-factory.ts
    |   |   |   |-- usecases
    |   |   |       |-- index.ts
    |   |   |       |-- load-property-value-factory.ts
    |   |   |-- middlewares
    |   |   |   |-- body-parser.ts
    |   |   |   |-- content-type.ts
    |   |   |   |-- cors.ts
    |   |   |   |-- index.ts
    |   |   |   |-- no-cache.ts
    |   |   |-- routes
    |   |       |-- index.ts
    |   |-- presentation
    |       |-- controllers
    |       |   |-- index.ts
    |       |   |-- load-property-value-controller.spec.ts
    |       |   |-- load-property-value-controller.ts
    |       |-- errors
    |       |   |-- index.ts
    |       |   |-- invalid-param-error.ts
    |       |   |-- missing-param-error.ts
    |       |   |-- server-error.ts
    |       |   |-- square-meter-invalid-error.ts
    |       |-- helpers
    |       |   |-- http-helper.ts
    |       |   |-- index.ts
    |       |-- protocols
    |           |-- controller.ts
    |           |-- http.ts
    |           |-- index.ts
    |-- tests
        |-- main
            |-- middlewares
            |   |-- body-parser.test.ts
            |   |-- content-type.test.ts
            |   |-- cors.test.ts
            |   |-- no-cache.test.ts
            |-- routes
                |-- index.test.ts
```


## 🚀 Usage

Just run the following command at the root of your project

## Installation

```sh
npm install
```

## Running

```sh
npm run build && npm run start
```

You should get

```sh
        ################################################
            🏁  Server listening on port: 3000 🏁
        ################################################
```

Access http://localhost:3001/api-docs/

## Testing

```sh
npm run test:verbose
```

## DockerFile

##### Container up

```sh
npm run up
```
##### Container down

```sh
npm run down
```

## Author

👤 **Rogerio Sobrinho**

* Github: [@RogerioSobrinho](https://github.com/RogerioSobrinho)
* LinkedIn: [@rogerio-sobrinho](https://linkedin.com/in/rogerio-sobrinho)

## Show your support

Give a ⭐️ if this project helped you!
