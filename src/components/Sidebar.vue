
<template>
  <div class="cs-main-sidebar cs-sticky-sidebar">
    <!-- Widget recipe categories -->
    <aside class="widget">
      <h2 class="widget-title"><span>Recipe categories</span></h2>
      <div class="cs-widget_recipes_categories">
        <!-- Category block -->
        <div class="cs-recipe-category-block">
          <a href="recipe_category_layout_2.html">
            <div class="inner">
              <div class="border-frame"></div>
              <h3>Mexican food</h3>
              <div class="more-than-link">More than 30 recipes</div>
              <div class="open-recipe-category"><i class="fa fa-mail-forward"></i></div>
              <img src="demo/widgets/recipe_mexican.jpg" alt="Bakery">
            </div>
          </a>
        </div>
        <!-- Category block -->
        <div class="cs-recipe-category-block">
          <a href="recipe_category_layout_2.html">
            <div class="inner">
              <div class="border-frame"></div>
              <h3>Light salads</h3>
              <div class="more-than-link">More than 12 recipes</div>
              <div class="open-recipe-category"><i class="fa fa-mail-forward"></i></div>
              <img src="demo/widgets/recipe_salads.jpg" alt="Bakery">
            </div>
          </a>
        </div>
        <!-- Category block -->
        <div class="cs-recipe-category-block">
          <a href="recipe_category_layout_2.html">
            <div class="inner">
              <div class="border-frame"></div>
              <h3>Seafood</h3>
              <div class="more-than-link">More than 45 recipes</div>
              <div class="open-recipe-category"><i class="fa fa-mail-forward"></i></div>
              <img src="demo/widgets/recipe_seafood.jpg" alt="Bakery">
            </div>
          </a>
        </div>
      </div>
    </aside>
    <!-- Widget latest recipes -->
    <aside class="widget">
      <h2 class="widget-title"><span>Latest recipes</span></h2>
      <div class="cs-widget_latest_recipes">
        <!-- Recipe -->
        <div class="cs-recipe-item">
          <div class="cs-recipe-thumb">
            <a href="recipe_single_layout_1.html"><img src="demo/widgets/1.jpg" alt="Bakery"></a>
          </div>
          <div class="cs-recipe-inner">
            <h3><a href="post_standard.html">Wonderful wild garlic and sausage fusilli</a></h3>
            <div class="cs-recipe-meta">
              <span><i class="fa fa-calendar"></i> October 22, 2016</span>
            </div>
          </div>
        </div>
        <!-- Recipe -->
        <div class="cs-recipe-item">
          <div class="cs-recipe-thumb">
            <a href="recipe_single_layout_1.html"><img src="demo/widgets/1.jpg" alt="Bakery"></a>
          </div>
          <div class="cs-recipe-inner">
            <h3><a href="post_standard.html">Scottish scallops black pudding with winter salad</a></h3>
            <div class="cs-recipe-meta">
              <span><i class="fa fa-calendar"></i> May 4, 2016</span>
            </div>
          </div>
        </div>
        <!-- Recipe -->
        <div class="cs-recipe-item">
          <div class="cs-recipe-thumb">
            <a href="recipe_single_layout_1.html"><img src="demo/widgets/1.jpg" alt="Bakery"></a>
          </div>
          <div class="cs-recipe-inner">
            <h3><a href="post_standard.html">Mixed fish grill with lemon couscous</a></h3>
            <div class="cs-recipe-meta">
              <span><i class="fa fa-calendar"></i> September 13, 2016</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- Widget tags -->
    <aside class="widget widget_tag_cloud">
      <h2 class="widget-title"><span>Recipe tags</span></h2>
      <div class="tagcloud">
        <a href="#">pasta</a>
        <a href="#">sauce</a>
        <a href="#">chilli</a>
        <a href="#">cheese</a>
        <a href="#">chicken</a>
        <a href="#">fish</a>
        <a href="#">tomato</a>
        <a href="#">meat</a>
        <a href="#">salt</a>
        <a href="#">sugar</a>
        <a href="#">oil</a>
        <a href="#">pasta</a>
        <a href="#">sauce</a>
        <a href="#">chilli</a>
        <a href="#">cheese</a>
        <a href="#">chicken</a>
        <a href="#">fish</a>
        <a href="#">tomato</a>
        <a href="#">meat</a>
        <a href="#">salt</a>
        <a href="#">sugar</a>
        <a href="#">oil</a>
      </div>
    </aside>
  </div>
</template>

<script>
  /* global jQuery */
  
  export default {
    name: 'sidebar',
    mounted () {
      jQuery('.cs-sticky-sidebar').theiaStickySidebar({
        additionalMarginTop: 10
      })
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
