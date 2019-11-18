[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jlamb1/express-react-docker)

(add HAPI_KEY env in heroku to your api key.)

Requirements: Heroku account

**local-build:**

change server/.env.example to .env, and add your key

run `make start` from the root, then hit the site at localhost:8080.

Machine Requirements: Docker

**local-dev**
`cd server && npm run dev`
`cd client && npm run start`
