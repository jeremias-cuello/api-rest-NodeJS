import express from 'express';
import employeesRoutes from "./routes/employee.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json())
app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((_, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
  next();
})

export default app;
