# gas-guitars


 ## Server
 ### Tech
 TypeScript - Node.js - Postgresql - Sequelize
 ### Setup
 If you want to go Docker way: Create db container with `docker run --name gasguitars -e POSTGRES_USER=<USER> -e POSTGRES_PASSWORD=<PASSWORD> -d -p <PORT>:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:10`. Replace <> with your credentials.
 
Provide environment variables:
 
 PG_DATABASE \
 PG_USER \
 PG_PASSWORD \
 PG_HOST \
 PG_PORT \
  
Run `yarn dev` to start development server  
In console, run `npx sequelize-cli db:migrate` and `npx sequelize-cli db:seed:all`
 ## Client
 ### Tech
 TypeScript - React.js
 ### Setup
 run `yarn start` to start development server
