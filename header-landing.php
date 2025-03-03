<?php
namespace Jefferson\Herringbone;


/**
 * Herringbone Theme Template - Header Variant for Landing Pages.
 *
 * @package herringbone
 * @author Jefferson Real <me@jeffersonreal.uk>
 * @copyright Copyright (c) 2022, Jefferson Real
 */

?>

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: https://ogp.me/ns/website#">

<head>
	<?php
	$seo = new Seo_Meta;
	echo $seo->head_meta;
	wp_head();
	?>
</head>

<body <?php body_class(); ?> >

	<header 
        class="header"
        style="transform: translate( 0, -100% );
               position: fixed;"
        hidden="true"
    >
		<div class="header_inner header_inner-landing">

			<div class="header_content header_content-left header_content-third">

				<a class="siteTitle" href="<?php echo get_bloginfo( 'wpurl' );?>" aria-label="Home">
					<?php
					if ( has_custom_logo() ) {

						$logo_id = get_theme_mod( 'custom_logo' );
						$logo_src = wp_get_attachment_image_src( $logo_id , 'full' );
						echo '<img class="siteTitle_logo" src="' . esc_url( $logo_src[0] ) . '">';
					} 
					?>
					<div class="siteTitle_text">
						<p class="siteTitle_sitename">
							<?php echo get_bloginfo( 'name' ); ?>
						</p>
						<span class="siteTitle_tagline">
							<?php echo get_bloginfo( 'description' ); ?>
						</span>
					</div>
				</a>

			</div>

			<div class="header_content header_content-middle">

				<?php
					Menu_Walker::output_theme_location_menu( array(
						'theme_location'	=> 'landing-page-primary-menu',
						'menu_class'		=> 'mainMenu',
						'nav_or_div'		=> 'nav',
						'nav_aria_label'	=> 'Main Menu',
						'html_tab_indents'  => 3,
						'button_class'		=> 'button button-noback',
					) );
				?>

			</div>

			<div class="header_content header_content-right header_content-third">
			</div>

		</div>

	</header>

    <button aria-label="Toggle Menu" title="Toggle Menu" type="button" class="menuToggle">
        <svg class="burger" version="1.1" preserveAspectRatio="xMidYMid meet" height="100" width="100" viewBox="0 0 100 100">
            <defs>
                <filter id="gooeyness">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 10 -5" result="gooeyness"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="gooeyness" operator="atop"></feComposite>
                </filter>
            </defs>
            <g class="menuToggle_lines">
                <path class="line line1" d="M 50,25 H 10" />
                <path class="line line2" d="M 50,25 H 90" />

                <path class="line line3" d="M 50,50 H 10" />
                <path class="line line4" d="M 50,50 H 90" />

                <path class="line line5" d="M 50,75 H 10" />
                <path class="line line6" d="M 50,75 H 90" />
            </g>
            <g class="menuToggle_x">
                <path class="line" d="M 25,25 L 75,75"></path>
                <path class="line" d="M 75,25 L 25,75"></path>
            </g>
        </svg>
    </button>
<!--<script> console.log( 'wp-template: header-landing.php' );</script>-->