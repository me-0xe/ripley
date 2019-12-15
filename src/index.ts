import express, { Application } from "express";
import { startup } from "./logging/startup";
import connect from "./connect";
import * as dbController from "./controllers/db_controllers";
import dotenv from "dotenv";

// get config
dotenv.config();
// server configuration
const PORT = Number(process.env.PORT) || 8080;
if(!process.env.PORT)console.error('FATAL ERROR: No port set, reverting to 8080')

// create new express app and save it as "app"
const app: Application = express();
const db: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}?retryWrites=true&w=majority`;

// connect to mongo db
connect(db)

// create a route for the app
app.get('/', (req: any, res: any) => {
  res.send('Hello World');
});

app.get('/test', dbController.aThing)

// make the server listen to requests
app.listen(PORT, () => {
  startup(PORT);
});
