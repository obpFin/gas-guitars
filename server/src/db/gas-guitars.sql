DROP DATABASE IF EXISTS gasguitars;
CREATE DATABASE gasguitars;

\c gasguitars;

CREATE TABLE guitars (
  ID SERIAL PRIMARY KEY,
  make VARCHAR,
  model VARCHAR,
  year INTEGER,
  condition VARCHAR
);

ALTER TABLE guitars  
   ADD CONSTRAINT check_conditions
   CHECK (condition IN ('mint', 'good', 'average', 'bad') );

INSERT INTO guitars (make, model, year, condition)
  VALUES ('Gibson', 'Flying V', 1979, 'good');