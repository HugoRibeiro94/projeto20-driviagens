import express from "express"
import cors from "cors"
import routerPassengers from "./routes/passengers.routes.js";
import routerCities from "./routes/cities.routes.js";
import routerFlights from "./routes/flights.routes.js";
import routerTravels from "./routes/travels.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routerPassengers)
app.use(routerCities)
app.use(routerFlights)
app.use(routerTravels)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})