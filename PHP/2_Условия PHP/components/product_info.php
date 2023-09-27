<section class="<?= $product_class ?>">
  <div class="container">
    <h1 class="item-title"><?= $title ?></h1>
    <div class="item-img">
      <img src="<?= $img_url ?>" width="510" height="392" alt="<?= $title ?>">
    </div>
    <div class="item-buy">
      <div class="price">
        <p class="price-old"><i>Цена </i><?= $price ?></p>
        <?php if ($discount > 0): ?>
        <p class="price-new"><i>Новая цена </i><?= $price_with_discount ?></p>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>
