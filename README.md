# gas-guitars

## Setup

 #### DB
  Create db container with `docker run --name gasguitars -e POSTGRES_USER=<USER> -e POSTGRES_PASSWORD=<PASSWORD> -d -p <PORT>:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:10`. Replace <> with your credentials.
