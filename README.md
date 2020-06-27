# gas-guitars


 ## Server
 ### Tech
 TypeScript - Node.js - Postgresql - Sequelize
 ### Setup
 Create db container with `docker run --name gasguitars -e POSTGRES_USER=<USER> -e POSTGRES_PASSWORD=<PASSWORD> -d -p <PORT>:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:10`. Replace <> with your credentials.
   run `yarn dev` to start development server
\
 ## Client
 ### Tech
 TypeScript - React.js
 ### Setup
 run `yarn start` to start development server
