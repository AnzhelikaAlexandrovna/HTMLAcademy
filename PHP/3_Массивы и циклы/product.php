<?php
require('products_db.php');
require('components/header.php');

$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url = get_img_url($id);
$price = get_product_price($id);
$discount = get_product_discount($id);
$is_new = get_product_is_new($id);
$is_last = get_product_is_last($id);
$product_class = 'item';

$features = get_product_features($id);

if ($discount > 0) {
  $price_with_discount = $price - $discount;
}

if ($discount > 1400 || $is_last) {
  $product_class = $product_class . ' item-hot';
};

if ($is_new) {
  $product_class = $product_class . ' item-new';
}

require('components/product_info.php');
require('components/footer.php');
?>
