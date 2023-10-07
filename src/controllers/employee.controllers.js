import { pool } from "../db.js";

export const getEmployees = async(_, res) => {
  try {
    const [employees] = await pool.query('SELECT * FROM `employees_t`');
    res.send(employees)
  } catch (err) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener los empleados"
    })
  }
};

export const getEmployee = async(req, res) => {

  const { id } = req.params;
  try {
    const [employees] = await pool.query('SELECT * FROM `employees_t` WHERE id_employee = ?', [id]);

    if(!employees.length) return res.status(404).json({
      message: 'Empleado no encontrado.'
    })

    res.send(employees[0])
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener los empleados"
    })
  }
};

export const createEmployee = async(req, res) => {
  const {name, salary} = req.body;

  try {
    const [result] = await pool.query('INSERT INTO `employees_t` (name, salary) VALUES (?,?)', [name, salary]);

    res.send({
      id: result.insertId,
      name: name,
      salary: salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener los empleados"
    })
  }
};

export const updateEmployee = async(req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query('UPDATE `employees_t` SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id_employee = ?', [name, salary, id]);

    if(!result.affectedRows) return res.status(404).json({
      message: 'Empleado no actualizado.'
    })

    const [rows] = await pool.query('SELECT * FROM `employees_t` WHERE id_employee = ?', [id]);

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener los empleados"
    })
  }
};

export const deleteEmployee = async(req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM `employees_t` WHERE id_employee = ?', [id]);

    if(!result.affectedRows) return res.status(404).json({
      message: 'Empleado no eliminado.'
    })

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener los empleados"
    })
  }
};
