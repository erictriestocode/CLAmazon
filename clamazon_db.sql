DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(4,2) NULL,
  stock_quantity INT NULL,

--   raw_total DECIMAL(10,4) NULL,
--   raw_usa DECIMAL(10,4) NULL,
--   raw_uk DECIMAL(10,4) NULL,
--   raw_eur DECIMAL(10,4) NULL,
--   raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

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

;
