import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import remarkMath from "remark-math";

import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import rehypeKatex from "rehype-katex";
import { rehypeGithubAlerts } from "rehype-github-alerts";
import rehypePrettyCode from "rehype-pretty-code";

import config from "@/../config.json"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "frontmatter" }],
      remarkGfm,
      [remarkGithub, { repository: config.githubId + '/' + config.githubRepo }],
      remarkMath
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeGithubAlerts,
      [rehypePrettyCode, { theme: 'github-dark', },]
    ],
  },
});

export default withMDX(nextConfig);
