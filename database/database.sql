
USE dermaxx;

CREATE TABLE IF NOT EXISTS products 
(
    id INT AUTO_INCREMENT NOT NULL, 
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    brand VARCHAR(255) NOT NULL,
    PRIMARY KEY(id));


INSERT INTO products (name, price, brand)
VALUES ("Madagascar Centella Light Cleaning Oil", 17.88, "SKIN 1004");

CREATE TABLE IF NOT EXISTS routines (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    products_ids JSON
);
