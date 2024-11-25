select 
	first_name as Nombre,
	last_name as Apellido
from employees;

select 
	*
from employees
where city = 'London'

order by last_name desc


select 
	*
from employees
where city <> 'London'

order by last_name desc

select 
	*
from employees
where birth_date >= '1955-03-04' and birth_date <= '1960-05-29'

order by last_name desc


select 
	*
from employees
where birth_date >= '1955-03-04' or birth_date <= '1960-05-29'

order by last_name desc

select 
	*
from employees
where employee_id not in (5,7,9)

order by last_name desc

select 
	*
from employees
where region is not null

order by last_name desc

select * from 
Customers


SELECT DISTINCT  Country  FROM Customers;


SELECT  * FROM Products
ORDER BY unit_price DESC
limit 5

SELECT  Product_name, product_id FROM Products
ORDER BY 1 asc, 2 desc
limit 5


update Products
set discontinued  = 0,
units_in_stock = 30
where product_id = 2


delete from Products 
where product_id = 2


SELECT MIN(unit_price)
FROM Products;

SELECT MAX(unit_price)
FROM Products;

SELECT AVG(unit_price)
FROM Products;

Select * from Products

select count(1), supplier_id from products
group by supplier_id
order by 2


SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');


select 
	*
from employees
where birth_date >= '1955-03-04' and birth_date <= '1960-05-29'


select * from employees
where birth_date BETWEEN '1955-03-04' and '1960-05-29'




SELECT Product_Name FROM Products, Suppliers WHERE Products.Supplier_ID = Suppliers.supplier_ID AND unit_price < 20


SELECT contact_name
FROM Suppliers
WHERE EXISTS (SELECT Product_Name FROM Products WHERE Products.Supplier_ID = Suppliers.supplier_ID AND unit_price < 50)


SELECT * FROM Customers
WHERE company_name LIKE 'A%';

SELECT * FROM Customers
WHERE company_name LIKE '%es';

SELECT * FROM Customers
WHERE company_name LIKE '%es%';


SELECT * FROM Customers
WHERE City LIKE '_ondon';

SELECT * FROM Customers
WHERE City LIKE 'L___on';


SELECT * FROM Customers
WHERE company_name LIKE '[BSP]%';

SELECT * FROM Customers
WHERE company_name LIKE '[A-F]%';

SELECT * FROM customers
WHERE city LIKE 'L_nd__';


Select * from Products, Categories
where Products.category_id = Categories.category_id

select * from Products p
inner join Categories c on p.category_id = c.category_id


select p.product_name, c.category_name from Products p
inner join Categories c on p.category_id = c.category_id

insert into Employees (employee_id,last_name, first_name)
values(10,'Pineda','Roberto')

select * from orders
insert into orders(order_id, customer_id)
values(11078,'SAVEA')

select * from Employees

select E.last_name, e.first_name, o.order_id from Employees E
left join orders o   on o.employee_id = e.employee_id
and o.order_id is null;

select E.last_name, e.first_name, o.order_id from Employees E
RIGHT  join orders o   on o.employee_id = e.employee_id and E.employee_id is null;

select E.last_name, e.first_name, o.order_id from  orders o 
left  join Employees e  on o.employee_id = e.employee_id and e.employee_id is null;
