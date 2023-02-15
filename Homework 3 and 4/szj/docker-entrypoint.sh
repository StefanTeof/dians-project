#!/bin/sh

# Start the database
docker run --name dians_final -e POSTGRES_PASSWORD=joana -p 5432:5432 -d postgres:latest

# Wait for the database to start
sleep 10

# Run the database migration
java -jar backend.jar flywayMigrate

# Start the Spring application
java -jar backend.jar &

# Start the React frontend
cd /szj/frontend
npm start
