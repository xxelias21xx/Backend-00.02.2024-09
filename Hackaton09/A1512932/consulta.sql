-- 1. Seleccionar los clientes que viven en el país de "usa"
SELECT * FROM Customers 
WHERE country = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM Suppliers 
WHERE city = 'Berlin';

-- 3. Seleccionar los empleados con código 3,5 y 8
SELECT * FROM Employees 
WHERE employee_id IN (3,5,8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM Products 
WHERE units_in_stock > 0 
AND supplier_id IN (1,3,5);

-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM Products 
WHERE unit_price >= 20 
AND unit_price <= 90;

-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM Orders 
WHERE order_date BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1,3,4,8
SELECT * FROM Orders 
WHERE EXTRACT(YEAR FROM order_date) = 1997 
AND employee_id IN (1,3,4,8);

-- 8. Mostrar las ordenes hechas en el año 1996
SELECT * FROM Orders 
WHERE EXTRACT(YEAR FROM order_date) = 1996;

-- 9. Mostrar las ordenes hechas en el año 1997, del mes de abril
SELECT * FROM Orders 
WHERE EXTRACT(YEAR FROM order_date) = 1997 
AND EXTRACT(MONTH FROM order_date) = 4;

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * FROM Orders 
WHERE EXTRACT(YEAR FROM order_date) = 1998 
AND EXTRACT(DAY FROM order_date) = 1;

-- 11. Mostrar todos los clientes que no tienen fax
SELECT * FROM Customers 
WHERE fax IS NULL OR fax = '';

-- 12. Mostrar todos los clientes que tienen fax
SELECT * FROM Customers 
WHERE fax IS NOT NULL AND fax != '';

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría
SELECT p.product_name, p.unit_price, p.units_in_stock, c.category_name
FROM Products p
JOIN Categories c ON p.category_id = c.category_id;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora
SELECT p.product_name, p.unit_price, p.supplier_id, s.company_name
FROM Products p
JOIN Suppliers s ON p.supplier_id = s.supplier_id;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto
SELECT 
    od.order_id,
    od.product_id,
    od.unit_price,
    od.quantity,
    (od.unit_price * od.quantity) as total
FROM Order_Details od;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo
SELECT 
    o.order_id,
    o.order_date,
    od.product_id,
    od.unit_price,
    e.employee_id,
    CONCAT(e.first_name, ' ', e.last_name) as employee_name
FROM Orders o
JOIN Order_Details od ON o.order_id = od.order_id
JOIN Employees e ON o.employee_id = e.employee_id;

-- 17. Mostrar los 10 productos con menor stock
SELECT * FROM Products 
ORDER BY units_in_stock ASC 
LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
SELECT * FROM Products 
ORDER BY units_in_stock DESC 
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
SELECT * FROM Products 
ORDER BY unit_price ASC 
LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
SELECT * FROM Products 
ORDER BY unit_price DESC 
LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
SELECT * FROM Products 
ORDER BY unit_price ASC 
LIMIT 10;

-- 22. Mostrar los 10 productos más caros
SELECT * FROM Products 
ORDER BY unit_price DESC 
LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes, ordenar por compañía
SELECT * FROM Customers 
ORDER BY company_name;

-- 24. Seleccionar todos los campos de clientes, cuya compañía empiece con la letra B y pertenezcan a UK
SELECT * FROM Customers 
WHERE company_name LIKE 'B%' 
AND country = 'UK' 
ORDER BY company_name;

-- 25. Seleccionar todos los campos de productos de las categorías 1,3 y 5
SELECT * FROM Products 
WHERE category_id IN (1,3,5) 
ORDER BY category_id;

-- 26. Seleccionar los productos cuyos precios unitarios están entre 50 y 200
SELECT * FROM Products 
WHERE unit_price BETWEEN 50 AND 200;

-- 27. Visualizar el nombre y el id de la compañía del cliente, fecha, precio unitario y producto de la orden
SELECT 
    c.customer_id,
    c.company_name,
    o.order_date,
    od.unit_price,
    p.product_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Details od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id;

-- 28. Visualizar el nombre de la categoría y el número de productos por cada categoría
SELECT 
    c.category_name,
    COUNT(p.product_id) as product_count
FROM Categories c
LEFT JOIN Products p ON c.category_id = p.category_id
GROUP BY c.category_name;

-- 29. Seleccionar los 5 productos más vendidos
SELECT 
    p.product_id,
    p.product_name,
    SUM(od.quantity) as total_vendido
FROM Products p
JOIN Order_Details od ON p.product_id = od.product_id
GROUP BY p.product_id, p.product_name
ORDER BY total_vendido DESC
LIMIT 5;

-- 30. Seleccionar los jefes de los empleados
SELECT DISTINCT m.employee_id, m.first_name, m.last_name
FROM Employees e
JOIN Employees m ON e.reports_to = m.employee_id;

-- 31. Obtener productos que comienzan con M y tienen precio entre 28 y 129
SELECT * FROM Products 
WHERE product_name LIKE 'M%' 
AND unit_price BETWEEN 28 AND 129;

-- 32. Obtener clientes de USA, Francia y UK
SELECT * FROM Customers 
WHERE country IN ('USA', 'France', 'UK');

-- 33. Obtener productos descontinuados o con stock cero
SELECT * FROM Products 
WHERE discontinued = 1 OR units_in_stock = 0;

-- 34. Obtener órdenes hechas por el empleado King Robert
SELECT o.* 
FROM Orders o
JOIN Employees e ON o.employee_id = e.employee_id
WHERE e.first_name = 'Robert' AND e.last_name = 'King';

-- 35. Obtener órdenes del cliente "Que Delícia"
SELECT o.* 
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
WHERE c.company_name = 'Que Delícia';

-- 36. Obtener órdenes de empleados específicos
SELECT o.* 
FROM Orders o
JOIN Employees e ON o.employee_id = e.employee_id
WHERE (e.first_name = 'Robert' AND e.last_name = 'King')
   OR (e.first_name = 'Nancy' AND e.last_name = 'Davolio')
   OR (e.first_name = 'Andrew' AND e.last_name = 'Fuller');

-- 37. Obtener productos de la orden 10257
SELECT 
    p.product_id,
    p.product_name,
    p.unit_price,
    p.units_in_stock
FROM Products p
JOIN Order_Details od ON p.product_id = od.product_id
WHERE od.order_id = 10257;

-- 38. Obtener productos de órdenes desde 1997
SELECT DISTINCT
    p.product_id,
    p.product_name,
    p.unit_price,
    p.units_in_stock
FROM Products p
JOIN Order_Details od ON p.product_id = od.product_id
JOIN Orders o ON od.order_id = o.order_id
WHERE o.order_date >= '1997-01-01';

-- 39. Calcular los 15 productos más caros
SELECT * FROM Products 
ORDER BY unit_price DESC 
LIMIT 15;

-- 40. Calcular los 5 productos más baratos
SELECT * FROM Products 
ORDER BY unit_price ASC 
LIMIT 5;

-- 41. Obtener categorías con sus productos
SELECT 
    c.category_name,
    p.product_name,
    p.unit_price,
    p.units_in_stock
FROM Categories c
LEFT JOIN Products p ON c.category_id = p.category_id;

-- 42. Obtener categorías con productos que no empiezan con P
SELECT 
    c.category_name,
    p.product_name,
    p.unit_price,
    p.units_in_stock
FROM Categories c
LEFT JOIN Products p ON c.category_id = p.category_id
WHERE p.product_name NOT LIKE 'P%' OR p.product_name IS NULL;

-- 43. Calcular stock por categoría
SELECT 
    c.category_name,
    SUM(p.units_in_stock) as total_stock
FROM Categories c
LEFT JOIN Products p ON c.category_id = p.category_id
GROUP BY c.category_name;

-- 44. Obtener detalles de la orden 10794
SELECT 
    c.company_name as customer_name,
    s.company_name as supplier_name,
    CONCAT(e.first_name, ' ', e.last_name) as employee_name,
    p.product_name
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
JOIN Employees e ON o.employee_id = e.employee_id
JOIN Order_Details od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
JOIN Suppliers s ON p.supplier_id = s.supplier_id
WHERE o.order_id = 10794;

-- 45. Mostrar número de órdenes por cliente y año
SELECT 
    c.customer_id,
    EXTRACT(YEAR FROM o.order_date) as year,
    COUNT(*) as order_count
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, EXTRACT(YEAR FROM o.order_date)
ORDER BY c.customer_id, year;

-- 46. Contar órdenes por año y mes
SELECT 
    EXTRACT(YEAR FROM order_date) as year,
    EXTRACT(MONTH FROM order_date) as month,
    COUNT(*) as order_count
FROM Orders
GROUP BY EXTRACT(YEAR FROM order_date), EXTRACT(MONTH FROM order_date)
ORDER BY year, month;

-- 47. Seleccionar detalles completos de órdenes
SELECT 
    c.company_name as customer_company,
    o.order_id,
    o.order_date,
    od.product_id,
    od.quantity,
    p.product_name,
    s.company_name as supplier_company,
    s.city as supplier_city
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
JOIN Order_Details od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
JOIN Suppliers s ON p.supplier_id = s.supplier_id;

-- 48. Seleccionar detalles de órdenes con condiciones específicas
SELECT 
    c.company_name as customer_company,
    c.contact_name,
    o.order_id,
    o.order_date,
    od.product_id,
    od.quantity,
    p.product_name,
    s.company_name as supplier_company
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
JOIN Order_Details od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
JOIN Suppliers s ON p.supplier_id = s.supplier_id
WHERE s.company_name BETWEEN 'A' AND 'G'
AND od.quantity BETWEEN 23 AND 187;