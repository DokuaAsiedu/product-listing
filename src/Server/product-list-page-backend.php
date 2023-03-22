<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

require "config.php";

$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

try {
	$pdo = new PDO($dsn, $user, $password);

	if ($pdo) {
		echo "Connected to the $db database successfully!" . "<br>";
	}
} catch (PDOException $e) {
	echo $e->getMessage();
}

class Product {
	public $product_sku, $product_name, $product_price, $product_type;

	function __construct($product_sku, $product_name, $product_price, $product_type) {
		$this->product_sku = $product_sku;
		$this->product_name = $product_name;
		$this->product_price = $product_price;
		$this->product_type = $product_type;
	}

	function listProductDetails() {
		return (
			"<div className='item'>
				<p>$this->product_sku</p>
				<p>$this->product_name</p>
				<p>$this->product_price</p>
				<p>$this->product_type</p>
			</div>"
		);
		// echo "$this->product_sku" . "<br>";
		// echo "$this->product_name" . "<br>";
		// echo "$this->product_price" . "<br>";
		// echo "$this->product_type" . "<br>";
		// echo "<br>";
	}
}

$table = $pdo->query("Select * from main_info");

$table->setFetchMode(PDO::FETCH_ASSOC);

$products_array = [];

foreach($table->fetchAll() as $row) {
	$product_entry = new Product($row["Product_SKU"], $row["Product_Name"], $row["Product_Price"], $row["Product_Type"]);

	array_push($products_array, $product_entry->listProductDetails());
};


foreach ($products_array as $key => $value) {
	print_r($value);
}

echo 'Here!';

?>