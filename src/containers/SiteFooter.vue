<template>
  <footer id="cs-footer">
    <div class="cs-container">
      <div class="cs-row">
        <div class="cs-col cs-col-4-of-12">
          <widget title="Recipe tags" className="widget_tag_cloud">
            <tag-cloud></tag-cloud>
          </widget>
        </div>
        <div class="cs-col cs-col-4-of-12">
          <widget title="Latest posts" className="cs-widget_latest_posts">
            <!-- Post item -->
            <div class="cs-post-item">
              <div class="cs-post-thumb">
                <a href="post_standard.html"><img src="demo/widgets/2.jpg" alt="Bakery"></a>
              </div>
              <div class="cs-post-inner">
                <h3><a href="post_standard.html">Baked Coconut Tenders with Strawberry-Mango Salsa</a></h3>
                <div class="cs-post-meta">
                  <span class="cs-post-meta-category"><a href="blog_category.html">Food</a></span>
                  <span class="cs-post-meta-comments"><a href="post_standard.html">6 Comments</a></span>
                </div>
              </div>
            </div>
            <!-- Post item -->
            <div class="cs-post-item">
              <div class="cs-post-thumb">
                <a href="post_standard.html"><img src="demo/widgets/1.jpg" alt="Bakery"></a>
              </div>
              <div class="cs-post-inner">
                <h3><a href="post_standard.html">Herbed Chicken With Beets and Brussels</a></h3>
                <div class="cs-post-meta">
                  <span class="cs-post-meta-category"><a href="blog_category.html">Recipes</a></span>
                  <span class="cs-post-meta-comments"><a href="post_standard.html">13 Comments</a></span>
                </div>
              </div>
            </div>
          </widget>
        </div>
        <div class="cs-col cs-col-4-of-12">
          <widget title="Recipe categories" className="widget_categories">
            <ul>
              <li><a href="#">Mexican food</a></li>
              <li><a href="#">Light salad</a></li>
              <li><a href="#">Sea-food</a></li>
              <li><a href="#">Low-Carb meat</a></li>
              <li><a href="#">White fried rice</a></li>
            </ul>
          </widget>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Widget from 'components/Widget'
  import TagCloud from 'containers/TagCloud'

  export default {
    name: 'footer',
    components: {
      Widget, TagCloud
    }
  }
</script>

<style>
  
</style>
