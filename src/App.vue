<template>
  <div id="cs-wrapper" class="wide">
    <site-header></site-header>
    <router-view></router-view>
    <page-footer>
      <widget slot="left-column" title="Recipe tags" className="widget_tag_cloud">
        <tag-cloud></tag-cloud>
      </widget>
      <widget slot="mid-column" title="Latest posts" className="cs-widget_latest_posts">
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
      <widget slot="right-column" title="Recipe categories" className="widget_categories">
        <ul>
          <li><a href="#">Mexican food</a></li>
          <li><a href="#">Light salad</a></li>
          <li><a href="#">Sea-food</a></li>
          <li><a href="#">Low-Carb meat</a></li>
          <li><a href="#">White fried rice</a></li>
        </ul>
      </widget>
    </page-footer>
    <!-- Copyright -->
    <div id="cs-copyright">
      <div class="cs-container">
        &copy; Copyright 2016. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
  import SiteHeader from 'containers/SiteHeader'
  import PageFooter from 'components/PageFooter'
  import Widget from 'components/Widget'
  import TagCloud from 'containers/TagCloud'
  
  export default {
    name: 'app',
    components: {
      SiteHeader,
      PageFooter,
      Widget,
      TagCloud
    }
  }
</script>

<style lang="scss">
  @import "scss/app";
</style>
