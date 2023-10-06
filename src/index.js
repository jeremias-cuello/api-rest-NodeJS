import express from 'express';
import employeesRoutes from "./routes/employee.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
const port = 3000;

app.use(express.json())

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.listen(port)
console.log('Eschuchando en http://localhost:' + port);
