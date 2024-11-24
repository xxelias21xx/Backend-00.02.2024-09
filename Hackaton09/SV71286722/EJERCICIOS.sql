--1.  Seleccionar los clientes que viven en el país de "usa"
SELECT * FROM CUSTOMERS WHERE LOWER(COUNTRY) = 'usa';

--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM SUPPLIERS WHERE LOWER(CITY) = 'berlin';

--3.  Seleccionar los empleados con código 3,5 y 8
SELECT * FROM EMPLOYEES WHERE EMPLOYEE_ID IN (3,5,8);

--4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM PRODUCTS  WHERE SUPPLIER_ID IN (1,3,5)
AND UNITS_IN_STOCK > 0;

--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM PRODUCTS WHERE UNIT_PRICE BETWEEN 20 AND 90;

--6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM ORDERS WHERE ORDER_DATE BETWEEN '1997-01-01' AND '1997-07-15';

--7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
SELECT * FROM ORDERS WHERE EXTRACT(YEAR FROM ORDER_DATE) = '1997' AND EMPLOYEE_ID IN (1,3,4,8); 

--8.  Mostrar las ordenes hechas en el año 1996
SELECT * FROM ORDERS WHERE DATE_PART('YEAR',ORDER_DATE) = '1996';

--9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
SELECT * FROM ORDERS WHERE TO_CHAR(ORDER_DATE, 'YYYY-MM') = '1997-04';

--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * FROM ORDERS WHERE DATE_PART('YEAR',ORDER_DATE) = '1998'
AND DATE_PART('DAY',ORDER_DATE) = '01';

--11. Mostrar todos los clientes que no tienen fax
SELECT * FROM CUSTOMERS WHERE FAX IS NULL;

--12. Mostrar todos los clientes que tienen fax
SELECT * FROM CUSTOMERS WHERE FAX IS NOT NULL;

--13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
SELECT PRODUCT_NAME,
	UNIT_PRICE,
	UNITS_IN_STOCK,
	CATEGORY_NAME
FROM PRODUCTS P
INNER JOIN CATEGORIES C ON P.CATEGORY_ID = C.CATEGORY_ID;

--14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
SELECT PRODUCT_NAME,
	UNIT_PRICE,
	P.SUPPLIER_ID,
	COMPANY_NAME
FROM PRODUCTS P
INNER JOIN SUPPLIERS S ON P.SUPPLIER_ID = S.SUPPLIER_ID;

--15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
SELECT *,
	(UNIT_PRICE-DISCOUNT)*QUANTITY AS TOTAL
FROM ORDER_DETAILS;

--16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
SELECT O.ORDER_ID,
	O.ORDER_DATE,
	OD.PRODUCT_ID,
	OD.UNIT_PRICE,
	O.EMPLOYEE_ID,
	CONCAT(LAST_NAME,', ',FIRST_NAME) AS EMPLOYEE_NAME
FROM ORDERS O
INNER JOIN ORDER_DETAILS OD ON O.ORDER_ID = OD.ORDER_ID
INNER JOIN EMPLOYEES E ON O.EMPLOYEE_ID = E.EMPLOYEE_ID;

--17. Mostrar los 10 productos con menor stock
SELECT * FROM PRODUCTS
ORDER BY UNITS_IN_STOCK ASC
LIMIT 10;

--18. Mostrar los 10 productos con mayor stock
SELECT * FROM PRODUCTS
ORDER BY UNITS_IN_STOCK DESC
LIMIT 10;

--19. Mostrar los 10 productos con menor precio
SELECT * FROM PRODUCTS
ORDER BY UNIT_PRICE ASC
LIMIT 10;

--20. Mostrar los 10 productos con mayor precio
SELECT * FROM PRODUCTS
ORDER BY UNIT_PRICE DESC
LIMIT 10;

--21. Mostrar los 10 productos más baratos
SELECT * FROM PRODUCTS
ORDER BY UNIT_PRICE ASC
LIMIT 10;

--22. Mostrar los 10 productos más caros
SELECT * FROM PRODUCTS
ORDER BY UNIT_PRICE ASC
LIMIT 10;

--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM CUSTOMERS ORDER BY COMPANY_NAME;

--24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM CUSTOMERS
WHERE LOWER(COMPANY_NAME) LIKE 'b%' AND LOWER(COUNTRY) = 'uk'
ORDER BY COMPANY_NAME;

--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
SELECT P.* FROM PRODUCTS P
INNER JOIN CATEGORIES C ON P.CATEGORY_ID IN (1,3,5) AND P.CATEGORY_ID = C.CATEGORY_ID
ORDER BY CATEGORY_ID ASC;

--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
--
--27. Visualizar el nombre y el id de la compania del cliente,--fecha,precio unitario y producto de la orden
--
--28. Visualizar el nombre de la categoria y el numero de --productos que hay por cada categoria.
--
--29. Seleccionar los 5 productos mas vendidos
--
--30. Seleccionar los jefes de los empleados
--
--31. Obtener todos los productos cuyo nombre comienzan con M y --tienen un precio comprendido entre 28 y 129
--
--32. Obtener todos los clientes del Pais de USA,Francia y UK
--
--33. Obtener todos los productos descontinuados o con stock cero.
--
--34. Obtener todas las ordenes hechas por el empleado King Robert
--
--35. Obtener todas las ordenes por el cliente cuya compania es --"Que delicia"
--
--36. Obtener todas las ordenes hechas por el empleado King
--    Robert,Davolio Nancy y Fuller Andrew
--
--37. Obtener todos los productos(codigo,nombre,precio,stock) de --la orden
--    10257
--
--38. Obtener todos los productos(codigo,nombre,precio,stock) de --las ordenes hechas desde 1997 hasta la fecha de hoy.
--
--39. Calcular los 15 productos mas caros
--40. Calcular los 5 productos mas baratos
--
--41. Obtener el nombre de todas las categorias y los nombres de --sus productos,precio y stock.
--
--42. Obtener el nombre de todas las categorias y los nombres de --sus productos,solo los productos que su nombre no comience con --la letra
--    P
--
--43. Calcular el stock de productos por cada categoria.Mostrar --el nombre de la categoria y el stock por categoria.
--
--44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre --del empleado y el nombre de los productos que estan en la orden --10794
--
--45. Mostrar el numero de ordenes de cada uno de los clientes --por año,luego ordenar codigo del cliente y el año.
--
--46. Contar el numero de ordenes que se han realizado por años y --meses ,luego debe ser ordenado por año y por mes.
--
--47. Seleccionar el nombre de la compañía del cliente,él código --de la orden de compra,la fecha de la orden de compra, código --del producto, cantidad pedida del producto,nombre del producto, --el nombre de la compañía proveedora y la ciudad del proveedor ,--usar Join
--
--48. Seleccionar el nombre de la compañía del cliente, nombre --del contacto, el código de la orden de compra, la fecha de la --orden de compra, el código del producto,cantidad pedida del --producto, nombre del producto y el nombre de la compañía --proveedora, usas JOIN.Solamente las compañías proveedoras que --comienzan con la letra de la A hasta la letra G,además la --cantidad pedida del producto debe estar entre 23 y 187.
