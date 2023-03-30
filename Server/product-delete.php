<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

require "database-connection.php"; 

if (isset($_POST)) {
	foreach ($_POST as $product_sku => $product_type) {
		// echo "$key: $value";
		$pdo->prepare("DELETE FROM {$product_type}_details WHERE product_sku = '$product_sku'")->execute();
		$pdo->prepare("DELETE FROM main_info WHERE product_sku = '$product_sku'")->execute();
	}
}

require "product-list.php";
?>