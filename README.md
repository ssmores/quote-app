# Full Stack Quotes App Using Node and React

This app has one package.json file to run both the server.js and the react components.

## Downloading and running this app.

1. Install Postgres, Node, and a package manager (I'm using npm) onto your machine.
2. Clone this repository.
3. Run `createdb quotes-app` to create the database.
4. Add the table and seed the database:

    > `psql -d quotes-app -f db/migrations/migration-1542299195696.sql`
 
    > `psql -d quotes-app -f db/seeds/quotes.sql`

    * You can also manually created the database, quotes table, and inserted data using the postgres cli.

5. Run `npm install` in your terminal to install dependencies.
6. Start the server with `npm start`.
7. In a separate tab build the front-end with `npm run build`.
8. Navigate to http://localhost:5000/ in your browser. 
    * Go to a specific quote directly by adding the id number at the end of the URL.