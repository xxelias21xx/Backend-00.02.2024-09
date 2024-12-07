--1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customers where country = 'USA';

--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * from suppliers where city='Berlin';

--3.  Seleccionar los empleados con código 3,5 y 8
select * from employees where employee_id in (3,5,8);

--4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
select * from products where units_in_stock >0 and supplier_id in(1,3,5);

--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select * from products where unit_price between 20 and 90;

--6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * from orders where order_date between '1997-01-01' and '1997-07-15';

--7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from orders where employee_id in (1,3,4,8) and extract(year from order_date) =1997;

--8.  Mostrar las ordenes hechas en el año 1996
select * from orders where  extract(year from order_date) =1996;

--9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from orders where  extract(year from order_date) =1997 and extract(month from order_date)=4;

--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from orders where  extract(year from order_date) =1998 and extract(day from order_date)=1;

--11. Mostrar todos los clientes que no tienen fax
select * from customers where fax is null;

--12. Mostrar todos los clientes que tienen fax
select * from customers where fax is not null;

--13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select product_name as producto, unit_price as precio, units_in_stock as  stock, c.category_name 
from products p inner join categories c on p.category_id=c.category_id;  

--14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select product_name as producto, unit_price as precio, p.supplier_id as codprove,prov.company_name as provedores
from products p inner join suppliers prov on p.supplier_id=prov.supplier_id;

--15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select dOrd.order_id as numero,dOrd.product_id as CodProd,dOrd.unit_price as precio,dOrd.quantity as cantidad,
cast(((dOrd.unit_price-dOrd.discount)*dOrd.quantity) as decimal(9,2)) as total
from order_details dOrd;

--16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select dOrd.order_id as numero,o.order_date as fecha,dOrd.product_id as CodProd,dOrd.unit_price as precio,o.employee_id
 as CodEmple,concat(e.last_name,' ',e.first_name) as empleado
from order_details dOrd 
inner join orders o on o.order_id=dOrd.order_id
inner join products p on dOrd.product_id=p.product_id
inner join employees e on o.employee_id=e.employee_id;

--17. Mostrar los 10 productos con menor stock
select * from products order by units_in_stock limit 10;

--18. Mostrar los 10 productos con mayor stock
select * from products order by units_in_stock desc limit 10;

--19. Mostrar los 10 productos con menor precio
select * from products order by unit_price  limit 10;

--20. Mostrar los 10 productos con mayor precio
select * from products order by unit_price desc limit 10;

--21. Mostrar los 10 productos más baratos
select * from products order by unit_price  limit 10;

--22. Mostrar los 10 productos más caros
select * from products order by unit_price desc limit 10;

--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * from customers order by company_name;

--24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * from customers where company_name like 'B%'  and country='UK' order by company_name;

--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
select * from products where category_id in(1,3,5) order by category_id;

--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from products where unit_price between 50 and 200;

--27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select cli.customer_id as id,company_name as cliente,ord.order_date as fecha,DetOrd.unit_price,prod.product_name 
from customers cli 
inner join orders ord on ord.customer_id=cli.customer_id
inner join order_details DetOrd on DetOrd.order_id=ord.order_id
inner join products prod on DetOrd.product_id=prod.product_id;

--28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select category_name,count(products.category_id)  as Numero
from products inner join categories on products.category_id=categories.category_id
group by categories.category_name;

--29. Seleccionar los 5 productos mas vendidos
select det.product_id as id,prod.product_name as producto,count(*) 
from order_details det inner join products prod on det.product_id=prod.product_id
group by det.product_id,prod.product_name
order by count(*) desc
limit 5;
 
--30. Seleccionar los jefes de los empleados
select title from employees;

--31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from products where product_name like 'M%' and unit_price between 28 and 129;

--32. Obtener todos los clientes del Pais de USA,Francia y UK
select * from customers where country in ('France','USA','UK');

--33. Obtener todos los productos descontinuados o con stock cero.
select * from products where units_in_stock = 0 or discontinued=1 ;

--34. Obtener todas las ordenes hechas por el empleado King Robert
select o.*, concat(e.first_name,' ',e.last_name ) as empleado from orders o
inner join   employees e
on o.employee_id = e.employee_id
where  concat(e.last_name,' ',e.first_name)='King Robert';
 
--35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select ord.*, cli.company_name from orders ord inner join customers cli on ord.customer_id=cli.customer_id
where cli.company_name='Que Delícia';

--36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select ord.*,concat(emp.last_name,' ',emp.first_name) as empleado from orders ord 
inner join employees emp on ord.employee_id=emp.employee_id
where concat(emp.last_name,' ',emp.first_name) in ('King Robert','Davolio Nancy','Fuller Andrew');

--37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select det.product_id,prod.product_name as producto,det.unit_price as precio,prod.units_in_stock 
from order_details det
inner join products prod on det.product_id=prod.product_id
where order_id=10257;

--38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select det.product_id,prod.product_name as producto,det.unit_price as precio,prod.units_in_stock 
from order_details det
inner join orders ord on det.order_id=ord.order_id
inner join products prod on det.product_id=prod.product_id
where extract(year from order_date) >=1997;

--39. Calcular los 15 productos mas caros
select * from products order by unit_price desc limit 15;

--40. Calcular los 5 productos mas baratos
select * from products order by unit_price  limit 5;

--41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select cat.category_name as categoria,prod.product_name as producto,prod.unit_price as precio,prod.units_in_stock 
from categories cat
inner join products prod on cat.category_id=prod.category_id;

--42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select cat.category_name as categoria,prod.product_name as producto
from categories cat
inner join products prod on cat.category_id=prod.category_id
where prod.product_name not like 'P%';

--43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select ca.category_name,sum(pro.units_in_stock) from products pro
inner join categories ca
on pro.category_id = ca.category_id
group by ca.category_name
order by sum(pro.units_in_stock) desc;

--44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select cli.company_name as  Cliente, prove.company_name as Provedor,concat(empl.first_name,' ',empl.last_name) as Empleado,
prod.product_name as Producto
from customers cli inner join orders ord on cli.customer_id=ord.customer_id
inner join employees empl on ord.employee_id=empl.employee_id
inner join order_details DetOrd on DetOrd.order_id=ord.order_id
inner join products prod on prod.product_id=DetOrd.product_id
inner join suppliers prove on prove.supplier_id=prod.supplier_id
where ord.order_id='10794';

--45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select  cli.company_name as  Cliente,ord.order_id as Ordenes,extract(year from order_date) as Año
from customers cli inner join orders ord on cli.customer_id=ord.customer_id
order by cli.customer_id,Año

--46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select DISTINCT  extract(year from order_date) as Año,extract(month from order_date) as Mes,count(*) as CantOrd from orders
group by extract(year from order_date),extract(month from order_date)
order by Año,Mes

--47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, 
--código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
select cli.company_name as  Cliente,ord.order_id as CodOrden,ord.order_date as FecOrden, 
DetOrd.product_id as CodProducto,DetOrd.quantity as Cantidad,prod.product_name as Producto,prove.company_name as Provedor,
prove.city as Ciudad
from customers cli inner join orders ord on cli.customer_id=ord.customer_id
inner join employees empl on ord.employee_id=empl.employee_id
inner join order_details DetOrd on DetOrd.order_id=ord.order_id
inner join products prod on prod.product_id=DetOrd.product_id
inner join suppliers prove on prove.supplier_id=prod.supplier_id;

--48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, 
--la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y 
--el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que
--comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
select cli.company_name as  Cliente,cli.contact_name as Contacto,ord.order_id as CodOrden,ord.order_date as FecOrden, 
DetOrd.product_id as CodProducto,DetOrd.quantity as Cantidad,prod.product_name as Producto,prove.company_name as Provedor
from customers cli inner join orders ord on cli.customer_id=ord.customer_id
inner join employees empl on ord.employee_id=empl.employee_id
inner join order_details DetOrd on DetOrd.order_id=ord.order_id
inner join products prod on prod.product_id=DetOrd.product_id
inner join suppliers prove on prove.supplier_id=prod.supplier_id
where DetOrd.quantity between 23 and 187 and LEFT(prove.company_name, 1) between 'A' and 'G';










