DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(15,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
    ("Hockey Stick", "Sports", 59.99, 30),
    ("Canon EOS 77D", "Photography", 900.00, 5),
    ("Introduction to Javascript", "Books", 29.99, 10),
    ("Introduction to MySQL", "Books", 29.99, 12),
    ("Cast Iron Skillet", "Cooking", 50.00, 8),
    ("Spatula", "Cooking", 11.99, 20),
    ("FujiFilm XF10 Camera", "Photography", 459.99, 6),
    ("Soccer Ball", "Sports", 19.99, 22),
    ("Lego X-Wing Starfighter", "Toys", 24.99, 4),
    ("Lego TIE Fighter", "Sports", 29.99, 3)
;

SELECT * FROM products;