<?php
/**
 * Plugin Name: Expounder
 * Plugin URI: https://github.com/withinboredom/expounder-wordpress/tree/master/plugin
 * Description: Allows authors of tutorials to hide their explanations if they expect readers to be familiar with a concept.
 * Version: 0.5.0
 * Requires at least: 5.6.2
 * Requires PHP: 7.4
 * Author: withinboredom
 * Author URI: https://withinboredom.info
 * License: GPLv2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: expounder
 */

namespace Expounder;

/**
 * Register the shortcode
 */
add_action ( 'init', function() {
    add_shortcode ( 'ex#', function ( array $attributes, ?string $content = null ): string {
        $attributes = shortcode_atts( [ 'name' => '' ], $attributes, 'ex#' );
        return do_shortcode( '<span data-expounder="' . esc_attr( $attributes['name'] ) . '">' . $content . '</span>' );
    } );
    add_shortcode( 'ex#d', function( array $attributes, ?string $content = null ): string {
        $attributes = shortcode_atts( [ 'name' => '' ], $attributes, 'ex#d' );
        return do_shortcode( '<span data-expounded="' . esc_attr( $attributes['name'] ) . '">' . $content . '</span>' );
    } );
});

/**
 * enqueue front-end scripts
 */
add_action ( 'wp_enqueue_scripts', function() {
    wp_enqueue_script( 'expounder-js', plugins_url( '/js/expounder.js', __FILE__ ), [], '0.5', true );
    wp_enqueue_style( 'expounder-css', plugins_url( '/css/expounder.css', __FILE__ ), [], '0.5' );
} );
