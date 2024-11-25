import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('./src/styles')
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
	],

	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

	dir: {
		input: "src",          // default: "."
		includes: "../src/_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "public"
	},
}