--1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customers 
WHERE country = 'USA';
--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM suppliers 
WHERE city = 'Berlin';
-- 3.  Seleccionar los empleados con código 3,5 y 8
SELECT * FROM employees 
WHERE employee_id in (3,5,8);
--4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM products 
WHERE supplier_id in (1,3,5) AND units_in_stock > 0;
--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM products 
WHERE unit_price >= 20 AND unit_price < 90 ORDER BY unit_price;
--6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM orders 
WHERE order_date BETWEEN '1997-01-01' AND '1997-07-15';
--7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
SELECT * FROM orders 
WHERE employee_id IN (1 ,3 ,4 ,8) AND order_date BETWEEN '1997-01-01' AND '1997-12-31';
--8.  Mostrar las ordenes hechas en el año 1996
SELECT * FROM orders
WHERE date_part( 'year',order_date) = 1996;
--9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
SELECT * FROM orders
WHERE date_part( 'year',order_date) = 1997 AND date_part('month', order_date)='4';
--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * FROM orders
WHERE date_part( 'year',order_date) = 1998 AND date_part('day', order_date)='1';
--11. Mostrar todos los clientes que no tienen fax
SELECT * FROM customers
WHERE fax is NULL;
--12. Mostrar todos los clientes que tienen fax
SELECT * FROM customers
WHERE fax is not NULL;
--13. Mostrar el nombre del producto, el precio,
-- el stock y el nombre de la categoría a la que pertenece.
SELECT  
p.product_name,
p.unit_price, 
p.units_in_stock , 
c.category_name 
FROM products p
INNER JOIN categories c
ON p.category_id = c.category_id;
--14. Mostrar el nombre del producto, el precio producto, 
--el código del proveedor y el nombre de la compañía proveedora.
SELECT  
    p.product_name,
    p.unit_price, 
    p.supplier_id , 
    s.company_name 
FROM products p
INNER JOIN suppliers s
ON p.supplier_id = s.supplier_id;
--15. Mostrar el número de orden, el código del producto, el precio, 
--la cantidad y el total pagado por producto.
SELECT 
    od.order_id AS "Numero de Orden", 
    p.product_id AS "Codigo del Producto",
    od.unit_price AS "Precio",
    od.quantity AS "Cantidad",
    ((od.unit_price * od.quantity) - od.discount) AS "Total pagado"
FROM order_details od
INNER JOIN products p
ON od.product_id = p.product_id;

--16. Mostrar el número de la orden, fecha, código del producto, precio, 
--código del empleado y su nombre completo.
SELECT 
    od.order_id,
    o.order_date ,
    od.product_id,
    od.unit_price,
    o.employee_id,concat( e.first_name,' ',e.last_name) "employee name" 
FROM order_details od
INNER JOIN orders o
ON od.order_id= o.order_id
INNER JOIN employees e
ON o.employee_id= e.employee_id;

--17. Mostrar los 10 productos con menor stock
SELECT * FROM products
ORDER BY units_in_stock ASC
limit 10; -- limitar cantidad de datos
--18. Mostrar los 10 productos con mayor stock
SELECT * FROM products
ORDER BY units_in_stock DESC
limit 10; -- limitar cantidad de datos
--19. Mostrar los 10 productos con menor precio
SELECT * FROM products
ORDER BY unit_price ASC
limit 10; -- limitar cantidad de datos
--20. Mostrar los 10 productos con mayor precio
SELECT * FROM products
ORDER BY unit_price DESC
limit 10; -- limitar cantidad de datos
--21. Mostrar los 10 productos más baratos
SELECT * FROM products
ORDER BY unit_price ASC
limit 10; -- limitar cantidad de datos
--22. Mostrar los 10 productos más caros
SELECT * FROM products
ORDER BY unit_price DESC
limit 10;  -- limitar cantidad de datos
--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM customers
ORDER BY company_name ASC;
--24. Seleccionar todos los campos de clientes,cuya compania empiece 
--con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM customers
WHERE company_name LIKE 'B%' AND country='UK'
ORDER BY company_name ASC;
--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,
--ordenar por categoria
SELECT * FROM products
WHERE category_id in(1,3,5)
ORDER BY category_id ASC;
--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
SELECT * FROM products
WHERE unit_price BETWEEN 50 AND 200;
--27. Visualizar el nombre y el id de la compania del cliente,fecha,
--precio unitario y producto de la orden
SELECT 
    cu.customer_id,
    cu.company_name,
    o.order_date,
    od.unit_price,
    od.product_id
FROM order_details od
inner join orders o
on od.order_id= o.order_id
inner join products pro
on pro.product_id= od.product_id
inner join customers cu
on  cu.customer_id = o.customer_id;

--28. Visualizar el nombre de la categoria y el numero de productos 
--que hay por cada categoria.
SELECT 
    c.category_name, 
    count(p.product_id)as lista
FROM categories c
INNER JOIN products p
ON c.category_id=p.category_id
GROUP BY c.category_id, c.category_name
ORDER BY lista DESC;

--29. Seleccionar los 5 productos mas vendidos
SELECT 
    product_id,count(*) 
FROM order_details
GROUP BY product_id
ORDER BY count(*) DESC
LIMIT 5;
--30. Seleccionar los jefes de los empleados

SELECT 
    e.title AS "Jefes", 
    COUNT(r.reports_to) 
FROM employees e
INNER JOIN employees r
ON e.employee_id = r.reports_to
GROUP BY e.employee_id
ORDER BY e.employee_id;
--31. Obtener todos los productos cuyo nombre comienzan con M y 
--tienen un precio comprendido entre 28 y 129
SELECT *
FROM products
WHERE product_name LIKE 'M%'
AND unit_price BETWEEN 28 AND 129;

--32. Obtener todos los clientes del Pais de USA,Francia y UK
SELECT * FROM customers
WHERE lower(country) in ('usa','france','uk');

--33. Obtener todos los productos descontinuados o con stock cero.
SELECT * FROM products
WHERE discontinued = 1 
OR units_in_stock = 0; 
--34. Obtener todas las ordenes hechas por el empleado King Robert
SELECT 
    o.*, 
    e.first_name 
FROM orders o
INNER JOIN employees e
ON o.employee_id = e.employee_id
WHERE concat(e.last_name,' ',e.first_name)='King Robert';
--35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT 
    o.*,
    c.company_name
FROM orders o
INNER JOIN customers c
ON o.customer_id = c.customer_id
WHERE company_name = 'Que Delícia';

--36. Obtener todas las ordenes hechas por el empleado King Robert,
--Davolio Nancy y Fuller Andrew
SELECT 
    o.*, 
    e.first_name 
FROM orders o
INNER JOIN employees e
ON o.employee_id = e.employee_id
WHERE concat(e.last_name,' ',e.first_name) IN (
    'King Robert',
    'Davolio Nancy',
    'Fuller Andrew'
)ORDER BY employee_id;

--37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
SELECT 
    od.order_id     AS "Orden",
    p.product_id    AS "Código",
    p.product_name  AS "Nombre",
    p.unit_price    AS "Precio",
    units_in_stock  AS "Stock"
FROM order_details od
INNER JOIN products p
ON od.product_id = p.product_id
WHERE od.order_id = '10257';

--38. Obtener todos los productos(codigo,nombre,precio,stock) 
--de las ordenes hechas desde 1997 hasta la fecha de hoy.

SELECT 
    od.order_id     AS "Orden",
    p.product_id    AS "Código",
    p.product_name  AS "Nombre",
    p.unit_price    AS "Precio",
    units_in_stock  AS "Stock"
FROM order_details od
INNER JOIN products p
ON od.product_id = p.product_id
INNER JOIN orders o
ON o.order_id = od.order_id
WHERE o.order_date BETWEEN '1997-01-01' AND now();
--39. Calcular los 15 productos mas caros
SELECT * FROM products
ORDER BY unit_price DESC LIMIT 15;

--40. Calcular los 5 productos mas baratos
SELECT * FROM products
ORDER BY unit_price ASC LIMIT 5;
--41. Obtener el nombre de todas las categorias y los nombres de sus productos,
--precio y stock.
SELECT 
    c.category_name AS "Categoría",
    p.product_name  AS "Nombre",
    p.unit_price    AS "Precio",
    p.units_in_stock  AS "Stock"
FROM products p
INNER JOIN categories c
ON p.category_id = c.category_id
ORDER BY c.category_name ASC;

--42. Obtener el nombre de todas las categorias y los nombres de sus productos,
--solo los productos que su nombre no comience con la letra P
SELECT 
    c.category_name AS "Categoría",
    p.product_name  AS "Nombre"
FROM products p
INNER JOIN categories c
ON p.category_id = c.category_id
WHERE p.product_name NOT LIKE 'P%'
ORDER BY p.product_name ASC;

--43. Calcular el stock de productos por cada categoria.
--Mostrar el nombre de la categoria y el stock por categoria.
SELECT 
    ca.category_name,
    sum(p.units_in_stock) 
FROM products p
INNER JOIN categories ca
ON p.category_id = ca.category_id
GROUP BY ca.category_name
ORDER BY sum(p.units_in_stock) DESC;

--44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado 
--y el nombre de los productos que estan en la orden 10794
SELECT 
    od.order_id AS "N° Orden",
    c.company_name     AS "Cliente",
    s.company_name    AS "Proveedor",
    e.first_name  AS "Empleado",
    p.product_name    AS "Productos"
FROM orders o
INNER JOIN employees e
ON o.employee_id = e.employee_id
INNER JOIN customers c
ON o.customer_id = c.customer_id
INNER JOIN order_details od
ON o.order_id = od.order_id
INNER JOIN products p
ON od.product_id = p.product_id
INNER JOIN suppliers s
ON p.supplier_id = s.supplier_id
WHERE o.order_id = '10794';

--45. Mostrar el numero de ordenes de cada uno de los clientes por año,
--luego ordenar codigo del cliente y el año.
SELECT
    count(o.order_id) AS "Cantidad de Pedidos",
    c.customer_id AS "Codigo",
    EXTRACT (YEAR FROM o.order_date) AS año
FROM orders o
INNER JOIN customers c
ON o.customer_id = c.customer_id
GROUP BY 
c.customer_id,
EXTRACT (year from o.order_date)
ORDER BY 
    año ASC,
    c.customer_id ASC;

--46. Contar el numero de ordenes que se han realizado por años y meses ,
--luego debe ser ordenado por año y por mes.

SELECT
    EXTRACT (YEAR FROM o.order_date) AS an,
    EXTRACT (MONTH FROM o.order_date) AS mes,
    count(o.order_id) AS "Cantidad de Pedidos"
FROM orders o
INNER JOIN customers c
ON o.customer_id = c.customer_id
GROUP BY 
EXTRACT (year from o.order_date),
EXTRACT (MONTH FROM o.order_date) 
ORDER BY 
    an ASC,
    mes ASC;

--47. Seleccionar 
--el nombre de la compañía del cliente,ok
--él código de la orden de compra,ok
--la fecha de la orden de compra, ok
--código del producto ok, 
--cantidad pedida del producto,
--nombre del producto, ok
--el nombre de la compañía proveedora oky 
--la ciudad del proveedor ok ,usar Join

SELECT 
    c.company_name  AS "Cliente",
    od.order_id     AS "N° Orden",
    o.order_date    AS "Fecha N° Orden",
    p.product_id    AS "Codigo Producto",
    od.quantity     AS "Cantidad",
    p.product_name  AS "Productos",
    s.company_name  AS "Proveedor",
    s.city          AS "Ciudad Proveedor"
FROM orders AS o
INNER JOIN customers AS c
ON o.customer_id = c.customer_id
INNER JOIN order_details AS od
ON o.order_id = od.order_id
INNER JOIN products AS p
ON od.product_id = p.product_id
INNER JOIN suppliers AS s
ON p.supplier_id = s.supplier_id
ORDER BY o.order_date DESC, od.order_id;


--48. Seleccionar el nombre de la compañía del cliente ok, 
--nombre del contacto, ok
--el código de la orden de compra, ok
--la fecha de la orden de compra, ok
--el código del producto, ok
--cantidad pedida del producto, 
--nombre del producto y 
--el nombre de la compañía proveedora, 
--usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,
--además la cantidad pedida del producto debe estar entre 23 y 187.
SELECT 
    c.company_name  AS "Cliente",
    c.contact_name  AS "Representante",
    od.order_id     AS "N° Orden",
    o.order_date    AS "Fecha N° Orden",
    p.product_id    AS "Codigo Producto",
    od.quantity     AS "Cantidad",
    p.product_name  AS "Productos",
    s.company_name  AS "Proveedor"
FROM orders o
INNER JOIN customers AS c
ON o.customer_id = c.customer_id
INNER JOIN order_details AS od
ON o.order_id = od.order_id
INNER JOIN products AS p
ON od.product_id = p.product_id
INNER JOIN suppliers AS s
ON p.supplier_id = s.supplier_id
WHERE s.company_name >= 'A' AND s.company_name < 'H'
AND od.quantity BETWEEN 23 AND 187
ORDER BY o.order_date DESC, od.order_id;
