--1.  Seleccionar los clientes que viven en el país de "usa"

        Select * from Customers where country = 'USA';

--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
    select *from suppliers
    where city='Berlin';

--3.  Seleccionar los empleados con código 3,5 y 8
    select*from employees
    where employee_id in (3,5,8)

--4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
    select*from products 
    where units_in_stock>0 and supplier_id in(1,3,5)



--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
    select*from products
    where unit_price>=20 and unit_price<=90;
    

--6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
    select*from orders
    where order_date between '1997/01/01' and '1997/07/15';


--7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8

    select*from orders
    where extract (year from order_date)='1997' and employee_id in(1,3,4,8)


--8.  Mostrar las ordenes hechas en el año 1996 
    select*from orders 
    where extract(year from order_date)=1996;

--9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
    select*from orders 
    where extract(year from order_date)='1997' and extract(month from order_date)='4';


--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
    select*from orders
    where extract(year from order_date)='1998' and extract(day from order_date)='1'

--11. Mostrar todos los clientes que no tienen fax
    select*from customers
    where fax is null;

--12. Mostrar todos los clientes que tienen fax
    select*from customers
    where fax is not null;


--13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.


select  products.product_name,
		products.unit_price,
		products.units_in_stock,
		categories.category_name

		from products
		inner join categories
		on products.category_id=categories.category_id; 

--14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

 select p.product_name,
 		p.unit_price,
		s.supplier_id,
		s.company_name

 		from products p
 		inner join suppliers s
 		on p.supplier_id=s.supplier_id

--15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
    
    select o.order_id,
	   p.product_id,
	   o.unit_price,
	   o.quantity,
	   (o.quantity*o.unit_price) as total_pagado


       from order_details o
       inner join products p
       on o.product_id=p.product_id

--16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

        select o.order_id,
            o.order_date,
            od.product_id,
            od.unit_price,
            e.employee_id,
            e.first_name,
            e.last_name

        from orders o

        inner join order_details od
        on o.order_id=od.order_id

        inner join employees e
        on o.employee_id=e.employee_id



--17. Mostrar los 10 productos con menor stock

        select product_name,units_in_stock
        from products
        order by units_in_stock asc
        limit 10

--18. Mostrar los 10 productos con mayor stock
        select product_name,units_in_stock
        from products
        order by units_in_stock desc
        limit 10


--19. Mostrar los 10 productos con menor precio
        select product_name,unit_price
        from products
        order by unit_price asc
        limit 10

--20. Mostrar los 10 productos con mayor precio
        select product_name,unit_price
        from products
        order by unit_price desc
        limit 10


--21. Mostrar los 10 productos más baratos
        select product_name,unit_price
        from products
        order by unit_price asc
        limit 10

--22. Mostrar los 10 productos más caros
        select product_name,unit_price
        from products
        order by unit_price desc
        limit 10


--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
        select*from customers
        order by company_name asc

--24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
        select company_name, country from customers
        where company_name like 'B%' AND country='UK'
        order by company_name asc


--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5
    ,ordenar por categoria
        select*from products
        where category_id in(1,3,5)
        order by category_id asc



--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
        select*from products 
        where unit_price between 50 and 200

--27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
        select c.customer_id,
            c.company_name,
            o.order_date,
            od.unit_price,
            od.product_id
        from orders o
        inner join customers c
        on c.customer_id=o.customer_id
        inner join order_details od
        on o.order_id=od.order_id

--28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
        select c.category_name, count(p.product_id)as lista
        from categories c
        inner join products p
        on c.category_id=p.category_id
        group by c.category_id, c.category_name
        order by lista desc

--29. Seleccionar los 5 productos mas vendidos

--30. Seleccionar los jefes de los empleados

--31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
        select*from public.products
        where product_name like 'M%' and unit_price between 28 and 129

--32. Obtener todos los clientes del Pais de USA,Francia y UK
        select*from public.customers
        where country in('USA','France','UK')

--33. Obtener todos los productos descontinuados o con stock cero.
        select*from public.products
        WHERE units_in_stock =0 or discontinued=1;

--34. Obtener todas las ordenes hechas por el empleado King Robert
        select*from orders
        where employee_id=7

--35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
        select*from orders
        where customer_id='QUEDE'



--36. Obtener todas las ordenes hechas por el empleado King
    Robert,Davolio Nancy y Fuller Andrew
    
    select*
    from orders o
    inner join employees e
    on o.employee_id=e.employee_id
    where e.employee_id in(1,7,2)

--37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden
    10257
        select p.product_id,
		p.product_name,
		p.unit_price,
		p.units_in_stock,
		o.order_id
        from order_details od 
        inner join orders o
        on od.order_id=o.order_id
        inner join products p
        on p.product_id= od.product_id
        where o.order_id='10257'



--38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
        select p.product_id,
		p.product_name,
		p.unit_price,
		p.units_in_stock,
		o.order_date
        from order_details od 
        inner join orders o
        on od.order_id=o.order_id
        inner join products p
        on p.product_id= od.product_id
        where o.order_date>='1997/01/01' and o.order_date<=CURRENT_DATE;

--39. Calcular los 15 productos mas caros
        select*from products
        order by unit_price desc
        limit 15
--40. Calcular los 5 productos mas baratos
        select*from products
        order by unit_price asc
        limit 15

--41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
        select category_name,
	product_name,
	unit_price,
	units_in_stock

	from  categories c
	inner join products p
	on c.category_id=p.category_id

--42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra
    P

    select c.category_name,
		p.product_name

	from  categories c
	inner join products p
	on c.category_id=p.category_id
	
	where trim(product_name) not like 'P%'
	

--43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
       
        select ca.category_name,sum(pro.units_in_stock) from products pro
        inner join categories ca
        on pro.category_id = ca.category_id
        group by ca.category_name
        order by sum(pro.units_in_stock) desc

--44. Obtener el Nomb re del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select  o.order_id,
		c.customer_id,
		c.company_name,
		s.company_name,
		s.supplier_id,
		e.first_name,
		p.product_name
		
		
        from orders o --orden
        inner join order_details od --ordenes
        on o.order_id=od.order_id
        inner join products p --productos
        on p.product_id=od.product_id
        inner join suppliers s --proveedores
        on p.supplier_id=s.supplier_id
        inner join employees e --empleados
        on e.employee_id=o.employee_id
        inner join customers c  --clientes
        on c.customer_id=o.customer_id

where o.order_id='10794'

--45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
                select c.customer_id,
		extract(year from o.order_date)as an,
		count(o.order_id)

		from customers c
		inner join orders o
		on c.customer_id=o.customer_id

		group by c.customer_id,extract (year from o.order_date)
		order by c.customer_id,an;
--46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
                select 	
		extract (year from o.order_date) as an, 
		extract (month from o.order_date) as mes,
		count (o.order_id) as ordenes


		from orders o
		group by
		extract (year from o.order_date),
		extract	(month from o.order_date)
		order by an,mes
--47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
                
                select c.company_name,
		o.order_id,
		o.order_date,
		p.product_id,
		od.quantity,
                p.product_name,
		s.company_name,
		s.city

		from orders o
		inner join order_details od
		on o.order_id=od.order_id


		inner join customers c
		on o.customer_id=c.customer_id

		inner join products p
		on p.product_id=od.product_id

		inner join suppliers s
		on p.supplier_id=s.supplier_id
                
--48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
                select c.company_name,
                c.contact_name,
                o.order_id,
                o.order_date,
                p.product_id,
                od.quantity,
                p.product_name,
                s.company_name


		from orders o
		inner join order_details od
		on o.order_id=od.order_id


		inner join customers c
		on o.customer_id=c.customer_id

		inner join products p
		on p.product_id=od.product_id

		inner join suppliers s
		on p.supplier_id=s.supplier_id
		where  s.company_name>='A' and s.company_name<'H'   
		AND od.quantity between 23 and 187; 