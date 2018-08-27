CREATE TABLE person (
	id integer primary key autoincrement,
  	name varchar(255),
  	age integer,
  	Height	decimal,
  	city  varchar(255),
  	favorite_color
); 

////////////////////////////////////////////////////////////////////////

 INSERT INTO person(name, age, height, city, favorite_color)
VALUES	('Vu', 30, 5.5, 'Dallas', 'Black'),
		('Paul', 25, 5.1, 'Houston', 'Blue'),
        ('Sally', 18, 4.59, 'Austin', 'Green'),
        ('Shea', 25, 5.9, 'Dallas', 'Red'),
        ('Logan', 21, 5.1, 'Austin', 'Yellow'); 
        
        SELECT * FROM person ORDER BY height DESC;

        SELECT * FROM person ORDER BY height ASC;
        
        SELECT * FROM person ORDER BY age DESC;
        
        SELECT * FROM person  WHERE age > 20;
        
        SELECT * FROM person WHERE age = 18; 
        
        SELECT * FROM person WHERE age > 20 AND age < 30;
        
        SELECT * FROM person WHERE age != 27;
        
        SELECT * FROM person WHERE favorite_color != 'Red';
////////////////////////////////////////////////////////////////////////        
         SELECT * FROM person 
        WHERE favorite_color != 'Red' 
        AND favorite_color != 'Blue'; 
        
         SELECT * FROM person 
        WHERE favorite_color = 'Orange'
        OR favorite_color = 'Green'; 
        
         SELECT * FROM person 
        WHERE favorite_color 
        IN ('Orange', 'Green', 'Blue'); 
        
        
         SELECT * FROM person 
        WHERE favorite_color 
        IN ('Orange', 'Purple');  
        
         CREATE TABLE orders (
          personID integer primary key autoincrement,
            product_name varchar(255),
            product_price integer,
            quantity decimal
        ); 
        
 ////////////////////////////////////////////////////////////////////////        
         INSERT INTO orders(product_name, product_price, quantity)
        VALUES ('pizza', 7, 2),
            ('pho', 4, 5);
         
        
        SELECT * FROM orders;
        
////////////////////////////////////////////////////////////////////////         
        SELECT SUM(quantity) FROM orders;
        
        SELECT SUM(product_price) FROM orders;
        
        SELECT SUM(product_price * quantity) FROM orders;
        
        SELECT * FROM artist;
        
         INSERT INTO artist(name)
        VALUES ('Vu'),
            ('Daniel'),
                ('Joe'); 
 ////////////////////////////////////////////////////////////////////////       
        
         SELECT * FROM artist
        ORDER BY name ASC
        LIMIT 5; 
        
         SELECT * FROM artist
        WHERE name LIKE '%Black'; 
        
         
        SELECT * FROM artist WHERE name LIKE '%Black%';
        
 ////////////////////////////////////////////////////////////////////////        
         
         
        SELECT * FROM Employee;
        
         
         SELECT * FROM Employee
        ORDER BY BirthDate ASC
        LIMIT 1;
        
        SELECT * FROM Employee
        ORDER BY BirthDate DESC
        LIMIT 1; 
        
         
        SELECT * FROM Employee
        WHERE ReportsTo = 1;
         
        
         SELECT COUNT(*) FROM Employee
        WHERE City = 'Lethbridge';
////////////////////////////////////////////////////////////////////////         
         
        SELECT * FROM Invoice ; 
        
         SELECT COUNT(Total) FROM Invoice
        WHERE BillingCountry = 'USA';
        
         
         
         SELECT * FROM Invoice
        ORDER BY Total DESC
        LIMIT 1;
         
         
          SELECT * FROM Invoice
        ORDER BY Total ASC
        LIMIT 1; 
         
         SELECT * FROM Invoice
        WHERE Total < 5;  
        
         SELECT COUNT(Total) FROM Invoice
        WHERE Total < 5 ;
          
////////////////////////////////////////////////////////////////////////           
        SELECT COUNT(Total) FROM Invoice
        WHERE BillingState
        IN ('CA', 'TX', 'AZ');
         
         
        SELECT AVG(Total) FROM Invoice;
         
        SELECT SUM(Total) FROM Invoice;
////////////////////////////////////////////////////////////////////////         
         
        