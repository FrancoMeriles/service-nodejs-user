# Service - Node JS 

This Project is a service using nodeJS, ExpressJS and the api [User Api](https://app.swaggerhub.com/apis/jbrizio/ms-users-api/1.0.0) for a training evaluation. 

### Architecture

```
└── src
│   └── application
│   │   └── controllers
│   │   │   └── user.controller.js
│   │   └── routes
│   │   │   └── user.route.js
│   │   │   └── index.js
│   │   └── app.js
│   └── domain
│   │   └── service
│   │   │   └── user.service.js
│   │   └── util
│   │   │   └── getAge.js
│   └── infrastructure
│   │   └── service
│   │      └── userRequest.js
│   └── index.js
└── .gitignore
└── .eslintrc.json
└── package.json
└── package-lock.json
```

### How to try it

- Clone this repo and install all dependencies

```sh
npm install
```

- Create a `.env` file in the root directory and place the following.

```
USER_SERVICE_URL= "https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api"
```

- Run this project.

```sh
npm start
```

### Run

Open the proyect in your localhost port `4000`


### Routes

| Name   | URL                    | Response            |
| ------ | ---------------------- | ------------------- |
| Users  | `/api/users`           | List of users       |

## Swagger

To see the project with swagger, install [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) in your [Visual Studio Code](https://code.visualstudio.com/)

- Open the command pallet with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> and type `Preview Swagger`
