<?php
/**
 * The template for displaying the footer.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>

	</div><!-- #content -->
</div><!-- #page -->

<?php
/**
 * generate_before_footer hook.
 *
 * @since 0.1
 */
do_action( 'generate_before_footer' );
?>

<div <?php generate_do_element_classes( 'footer' ); ?>>
	<?php
	/**
	 * generate_before_footer_content hook.
	 *
	 * @since 0.1
	 */
	do_action( 'generate_before_footer_content' );

	/**
	 * generate_footer hook.
	 *
	 * @since 1.3.42
	 *
	 * @hooked generate_construct_footer_widgets - 5
	 * @hooked generate_construct_footer - 10
	 */
	do_action( 'generate_footer' );

	/**
	 * generate_after_footer_content hook.
	 *
	 * @since 0.1
	 */
	do_action( 'generate_after_footer_content' );
	?>
</div><!-- .site-footer -->

<?php
/**
 * generate_after_footer hook.
 *
 * @since 2.1
 */
do_action( 'generate_after_footer' );

wp_footer();
?>
<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(47590078, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/47590078" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
<?php
// todo by mishanin: убираем вывод яндекс макрета для англ версии и главной странице
if (empty(IS_SITE_LANG_EN) && empty(is_home())) { ?>
<script type="text/javascript">
    (function (w) {
        function start() {
            w.removeEventListener("YaMarketAffiliateLoad", start);
            for (var i = 1; i < 21; i++) {
              if (jQuery('#marketWidget' + i).length > 0) {
                w.YaMarketAffiliate.createWidget({
                  containerId: 'marketWidget' + i,
                  type: 'offers',
                  params: {
                    clid: 2356248,
                    themeId: 10,
                    searchSelector: "#marketWidget" + i +">s",
                    searchMatch: 'exact',
                    searchCount: 4,
                    vid: 3
                  }
                });
              }
            }
        }
        w.YaMarketAffiliate
            ? start()
            : w.addEventListener("YaMarketAffiliateLoad", start);
    })(window);
</script>
<?php } ?>
</body>
</html>