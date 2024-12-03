SELECT * FROM customers WHERE country = 'USA';

SELECT * FROM suppliers WHERE city = 'Berlin';

SELECT * FROM employees WHERE employee_id IN (3, 5, 8);

SELECT * FROM products WHERE units_in_stock > 0 AND supplier_id IN (1, 3, 5);

SELECT * FROM products WHERE unit_price BETWEEN 20 AND 90;

SELECT * FROM orders WHERE order_date BETWEEN '1997-01-01' AND '1997-07-15';

SELECT * FROM orders 
WHERE DATE_PART('year', order_date) = 1997 AND employee_id IN (1, 3, 4, 8);

SELECT * FROM orders WHERE DATE_PART('year', order_date) = 1996;

SELECT * FROM orders 
WHERE DATE_PART('year', order_date) = 1997 AND DATE_PART('month', order_date) = 4;

SELECT * FROM orders 
WHERE DATE_PART('year', order_date) = 1998 AND DATE_PART('day', order_date) = 1;

SELECT * FROM customers WHERE fax IS NULL;

SELECT * FROM customers WHERE fax IS NOT NULL;

SELECT p.product_name, p.unit_price, p.units_in_stock, c.category_name
FROM products p
JOIN categories c ON p.category_id = c.category_id;

SELECT p.product_name, p.unit_price, p.supplier_id, s.company_name
FROM products p
JOIN suppliers s ON p.supplier_id = s.supplier_id;

SELECT od.order_id, od.product_id, od.unit_price, od.quantity, 
       od.unit_price * od.quantity AS total_paid
FROM order_details od;

SELECT o.order_id, o.order_date, od.product_id, od.unit_price, e.employee_id, 
       e.first_name || ' ' || e.last_name AS employee_name
FROM orders o
JOIN order_details od ON o.order_id = od.order_id
JOIN employees e ON o.employee_id = e.employee_id;

SELECT * FROM products ORDER BY units_in_stock ASC LIMIT 10;

SELECT * FROM products ORDER BY units_in_stock DESC LIMIT 10;

SELECT * FROM products ORDER BY unit_price ASC LIMIT 10;

SELECT * FROM products ORDER BY unit_price DESC LIMIT 10;

SELECT * FROM products ORDER BY unit_price ASC LIMIT 10;

SELECT * FROM products ORDER BY unit_price DESC LIMIT 10;

SELECT * FROM customers ORDER BY company_name;

SELECT * FROM customers 
WHERE company_name ILIKE 'B%' AND country = 'UK'
ORDER BY company_name;

SELECT * FROM products 
WHERE category_id IN (1, 3, 5) 
ORDER BY category_id;

SELECT * FROM products WHERE unit_price BETWEEN 50 AND 200;

SELECT c.company_name, c.customer_id, o.order_date, od.unit_price, p.product_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id;

SELECT c.category_name, COUNT(p.product_id) AS product_count
FROM categories c
LEFT JOIN products p ON c.category_id = p.category_id
GROUP BY c.category_name;

SELECT p.product_name, SUM(od.quantity) AS total_sold
FROM products p
JOIN order_details od ON p.product_id = od.product_id
GROUP BY p.product_name
ORDER BY total_sold DESC
LIMIT 5;

SELECT e.employee_id, e.first_name || ' ' || e.last_name AS employee_name, 
       e2.first_name || ' ' || e2.last_name AS manager_name
FROM employees e
LEFT JOIN employees e2 ON e.reports_to = e2.employee_id;

SELECT * FROM products 
WHERE product_name ILIKE 'M%' AND unit_price BETWEEN 28 AND 129;

SELECT * FROM customers WHERE country IN ('USA', 'France', 'UK');

SELECT * FROM products WHERE discontinued = TRUE OR units_in_stock = 0;

SELECT o.*
FROM orders o
JOIN employees e ON o.employee_id = e.employee_id
WHERE e.first_name = 'Robert' AND e.last_name = 'King';

SELECT o.*
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.company_name = 'Que delicia';

SELECT o.*
FROM orders o
JOIN employees e ON o.employee_id = e.employee_id
WHERE (e.first_name = 'Robert' AND e.last_name = 'King') OR
      (e.first_name = 'Nancy' AND e.last_name = 'Davolio') OR
      (e.first_name = 'Andrew' AND e.last_name = 'Fuller');

SELECT p.product_id, p.product_name, p.unit_price, p.units_in_stock
FROM order_details od
JOIN products p ON od.product_id = p.product_id
WHERE od.order_id = 10257;

SELECT p.product_id, p.product_name, p.unit_price, p.units_in_stock
FROM order_details od
JOIN orders o ON od.order_id = o.order_id
JOIN products p ON od.product_id = p.product_id
WHERE o.order_date >= '1997-01-01';

SELECT * FROM products ORDER BY unit_price DESC LIMIT 15;

SELECT * FROM products ORDER BY unit_price ASC LIMIT 5;

SELECT c.category_name, p.product_name, p.unit_price, p.units_in_stock
FROM categories c
JOIN products p ON c.category_id = p.category_id;

SELECT c.category_name, p.product_name, p.unit_price, p.units_in_stock
FROM categories c
JOIN products p ON c.category_id = p.category_id
WHERE p.product_name NOT ILIKE 'P%';

SELECT c.category_name, SUM(p.units_in_stock) AS total_stock
FROM categories c
JOIN products p ON c.category_id = p.category_id
GROUP BY c.category_name;

SELECT c.company_name AS customer_name, 
       s.company_name AS supplier_name, 
       e.first_name || ' ' || e.last_name AS employee_name, 
       p.product_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN employees e ON o.employee_id = e.employee_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
JOIN suppliers s ON p.supplier_id = s.supplier_id
WHERE o.order_id = 10794;

SELECT o.customer_id, 
       EXTRACT(YEAR FROM o.order_date) AS year, 
       COUNT(o.order_id) AS order_count
FROM orders o
GROUP BY o.customer_id, year
ORDER BY o.customer_id, year;

SELECT EXTRACT(YEAR FROM o.order_date) AS year, 
       EXTRACT(MONTH FROM o.order_date) AS month, 
       COUNT(o.order_id) AS order_count
FROM orders o
GROUP BY year, month
ORDER BY year, month;

SELECT c.company_name AS customer_company, 
       o.order_id, 
       o.order_date, 
       p.product_id, 
       od.quantity, 
       p.product_name, 
       s.company_name AS supplier_company, 
       s.city AS supplier_city
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
JOIN suppliers s ON p.supplier_id = s.supplier_id;

SELECT c.company_name AS customer_company, 
       c.contact_name, 
       o.order_id, 
       o.order_date, 
       p.product_id, 
       od.quantity, 
       p.product_name, 
       s.company_name AS supplier_company
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
JOIN suppliers s ON p.supplier_id = s.supplier_id
WHERE s.company_name ILIKE '[A-G]%' AND od.quantity BETWEEN 23 AND 187;




