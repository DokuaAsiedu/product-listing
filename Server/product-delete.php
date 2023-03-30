<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

// require "database-connection.php";
// require "initializations.php";
require "set-product-list.php";

if (isset($_POST)) {
	foreach ($_POST as $key => $value) {
		$type = new $value;
		$type->deleteProduct($pdo, $value, $key);
	}
}

require "product-list.php";
?>