		<footer id="footer" class="inner">
          <?php Typecho_Widget::widget('Widget_Stat')->to($stat); ?>
           <span>博客已运行</span><span id="span_dt_dt"></span>&nbsp;&nbsp; <br>
<p><?php _e('统计日期：%s  分类：<strong>%s</strong>　文章：<strong>%s</strong>篇　评论 <strong>%s</strong>条',date('n月j日'), $stat->categoriesNum, $stat->publishedPostsNum, $stat->publishedCommentsNum); ?></p>
			&copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title() ?></a> 由 <a href="http://www.typecho.org" target="_blank">Typecho</a> 强力驱动 Theme by <a href="https://uefeng.com" target="_blank">Junichi</a>&nbsp;&nbsp;
         <br><a href='http://www.miibeian.gov.cn' target='_blank'> </a>&nbsp;&nbsp;
		</footer>
	</div>
</div>
<?php $this->footer(); ?>

<script src="<?php $this->options->themeUrl('js/functions.js'); ?>"></script>
<?php if(!empty($this->options->search_form) && in_array('Pjax', $this->options->search_form)): ?>
<script src="<?php $this->options->themeUrl('js/prism.js'); ?>" data-no-instant></script>
<script src="//cdn.staticfile.org/instantclick/3.0.1/instantclick.min.js" data-no-instant></script>
<script data-no-instant>
	InstantClick.on('change', function(isInitialLoad) {
		if (isInitialLoad === false) {
			if (typeof Prism !== 'undefined') Prism.highlightAll(true,null);
			if (typeof ga !== 'undefined') ga('send', 'pageview', location.pathname + location.search);
		}
	});
	InstantClick.init();
</script>


<?php else : ?>
<script src="<?php $this->options->themeUrl('js/prism.js'); ?>"></script>
<?php endif; ?>
</body>
</html>
