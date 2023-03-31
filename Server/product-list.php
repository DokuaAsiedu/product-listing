<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

require "set-product-list.php";

echo json_encode($table);
?>