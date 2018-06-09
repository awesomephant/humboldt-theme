<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$myClass = wp_get_post_terms($post->ID, 'bio_class')[0]->slug;
$context['myClass'] = wp_get_post_terms($post->ID, 'bio_class')[0];
$args = array(
	'post_type' => 'object',
	'showposts' => 6,
	'tax_query' => array(
		array(
			'taxonomy' => 'bio_class',
			'field'    => 'slug',
			'terms'    => $myClass,
		),
	),
);
$context['related_class'] = Timber::get_posts( $args );
if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
