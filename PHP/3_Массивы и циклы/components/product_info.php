<section class="<?= $product_class ?>">
  <div class="container">
    <h1 class="item-title"><?= $title ?></h1>
    <div class="item-container">
      <div class="item-img">
        <img src="<?= $img_url ?>" width="290" height="222" alt="<?= $title ?>">
      </div>
      <div class="item-info">
        <h2 class="title-advantages">Преимущества товара:</h2>
        <ul class="item-advantages">
          <?php $index = 0; ?>
          <?php while ($index < count($features)): ?>
          <li><?= $features[$index] ?></li>
          <?php $index = $index + 1 ?>
          <?php endwhile;?>
        </ul>
        <div class="item-buy">
          <p class="price-old"><i>Цена </i><?= $price ?></p>
          <?php if ($discount > 0): ?>
            <p class="price-new"><i>Новая цена </i><?= $price_with_discount ?></p>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
