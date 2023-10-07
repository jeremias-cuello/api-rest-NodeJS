CREATE DATABASE IF NOT EXISTS `company_db`;

USE `company_db`;

CREATE TABLE `employees_t`(
  `id_employee` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `salary` INT(5) DEFAULT NULL,
  PRIMARY KEY(`id_employee`)
);

DESCRIBE `employees_t`;
