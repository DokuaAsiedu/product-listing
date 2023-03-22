DROP DATABASE IF EXISTS product_listing;
CREATE DATABASE product_listing;
USE product_listing;

CREATE TABLE main_info (
	Product_SKU varchar(255) NOT NULL,
    Product_Name varchar(255) NOT NULL,
    Product_Price decimal(9, 2) NOT NULL,
    Product_Type varchar(255) NOT NULL,
    PRIMARY KEY (Product_SKU)
);

INSERT INTO main_info VALUES ('JVC200123', 'Acme DISC', 1.00, 'DVD');
INSERT INTO main_info VALUES ('GGWP0007', 'War and Peace', 20.00, 'Book');
INSERT INTO main_info VALUES ('TR120555', 'Chair', 40.00, 'Furniture');

CREATE TABLE dvd_details (
	Product_SKU varchar(255) NOT NULL,
    Size decimal(9, 2) NOT NULL,
    FOREIGN KEY (Product_SKU) REFERENCES main_info(Product_SKU)
);

INSERT INTO dvd_details VALUES ('JVC200123', 700);

CREATE TABLE book_details (
	Product_SKU varchar(255) NOT NULL,
    Weight decimal(9, 2) NOT NULL,
    FOREIGN KEY (Product_SKU) REFERENCES main_info(Product_SKU)
);

INSERT INTO book_details VALUES ('GGWP0007', 2);

CREATE TABLE furniture_details (
	Product_SKU varchar(255) NOT NULL,
    Height decimal(9, 2) NOT NULL,
    Width decimal(9, 2) NOT NULL,
    Length decimal(9, 2) NOT NULL,
    FOREIGN KEY (Product_SKU) REFERENCES main_info(Product_SKU)
);

INSERT INTO furniture_details VALUES ('TR120555', 24, 45, 15);