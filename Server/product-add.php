<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

if (isset($_POST)) {
	print_r($_POST);
	// echo 'is set!';
	// foreach ($_POST as $key => $value) {
	// 	print_r("$key: $value");
	// 	// echo 'is set!';
	// }
}
else { 
	echo "is not set";
}
?>