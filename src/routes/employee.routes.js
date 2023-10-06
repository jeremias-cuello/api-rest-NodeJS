import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employee.controllers.js'

const router = Router();

router.get('/empleados', getEmployees);

router.get('/empleados/:id', getEmployee);

router.post('/empleados', createEmployee);

router.patch('/empleados/:id', updateEmployee);

router.delete('/empleados/:id', deleteEmployee);


export default router;
