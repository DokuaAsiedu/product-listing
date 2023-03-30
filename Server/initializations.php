<?php
require "database-connection.php";

abstract class Product {
	public $product_type, $product_sku, $product_name, $product_price;

	public $dvd_size;
	public $book_weight;
	public $furniture_height, $furniture_width, $furniture_length;
}

class DVD extends Product {
	public $measurement;

	function __construct() {
		$this->measurement = "Size: $this->dvd_size MB";
	}
}

class Book extends Product {
	public $measurement;

	function __construct() {
		$this->measurement = "Weight: {$this->book_weight}KG";
	}
}

class Furniture extends Product {
	public $measurement;

	function __construct() {
		$this->measurement = "Dimensions: {$this->furniture_height}x{$this->furniture_width}x{$this->furniture_length}";
	}
}

$table = $pdo->query("SELECT * FROM combined_data")->fetchAll(PDO::FETCH_CLASS|PDO::FETCH_CLASSTYPE);

?>