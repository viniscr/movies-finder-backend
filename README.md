# Movies Finder - TMDb REST API
REST API built in NodeJS that consumes the famous Movie Database API (https://developers.themoviedb.org/3). 

API is available for use in this link 

[https://movies-finder-backend.herokuapp.com/movies/](https://movies-finder-backend.herokuapp.com/movies/) 

## Running Project
```
# clone repository
$ git clone https://github.com/viniscr/movies-finder-backend.git
$ cd movies-finder-backend

# get dependencies
$ yarn install

# build the project 
$ yarn start

```

## Available Routes
- Upcoming movies
```
/movies/upcoming?page={page}
```

- Movie Details
```
/movies/details/:id
```

- Searching movies
```
/movies/search?query={query}&page={page}
```

- Movies Genres
```
/movies/genres
```

## Tools and Frameworks
- NodeJs - JavaScript runtime built on Chrome's V8 JavaScript engine. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- Express Framework - Fast, unopinionated, minimalist web framework for Node.js.
- Dotenv - Module used to load environment variables from a .env file into process.env.
- Cors - Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
