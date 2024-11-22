--1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customers where country = 'USA';
--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM suppliers WHERE city = 'Berlin';
-- 3.  Seleccionar los empleados con código 3,5 y 8
SELECT * FROM employees WHERE employee_id in (3,5,8);
--4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM products WHERE supplier_id in (1,3,5) AND units_in_stock > 0;
--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM products WHERE unit_price >= 20 AND unit_price < 90 ORDER BY unit_price;