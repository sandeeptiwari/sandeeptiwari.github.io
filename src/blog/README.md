# Blog Architecture

This folder contains the reusable blog content architecture for the portfolio.

## What this architecture gives you

- One shared styling system for all blog posts
- XML-based content authoring that is easy for team members to understand
- Support for dot, numbered, and arrow bullet lists
- Support for heading styles, summaries, code blocks, and images
- A clean structure that can work from local XML files or API responses
- A single rendering path for all blogs

## Folder responsibilities

- `blogContent.js` - XML parsing and normalization logic
- `BlogRenderer.js` - converts parsed blocks into HTML
- `blog.css` - shared styles for all blog content
- `BlogPage.js` - loads an XML blog and renders it
- `README.md` - team usage guide

## Supported XML tags

### Top-level structure

- `article` - root element
- `meta` - metadata section
- `content` - article body section

### Metadata tags

- `title` - blog title
- `slug` - unique blog identifier used in the URL
- `author` - author name
- `date` - publish date
- `category` - blog topic/category
- `readTime` - reading time text
- `summary` - short summary shown in the blog card and top section
- `thumbnail` - article cover image
  - attributes: `src`, `alt`
- `tags` - wrapper for tag list
- `tag` - individual tag item

### Content tags

- `tle` - title block
- `hd1`, `hd2`, `hd3` - heading blocks
- `smr` - summary block
- `p` - paragraph
- `quote` - quote or callout block
- `img` - image block
  - attributes: `src`, `alt`, `caption`
- `list type="dot|number|arrow"` - list block
  - child elements: `item`
- `codeJ` - JavaScript code block
- `codeP` - Python code block
- `codeS` - Scala code block
- `codeT` - TypeScript code block
- `codeJava` - Java code block

## How to create a new blog

### Step 1: Use the configured XML file

The current portfolio is configured to load the XML article from:

```text
public/blogs/articles/aws-gist.xml
```

If you add new blog XML files later, keep them in the same folder and make sure the homepage `url` slug matches the XML `<slug>` value.

### Step 2: Add metadata

Start with the `meta` section.

```xml
<meta>
  <title>My First Blog</title>
  <slug>my-first-blog</slug>
  <author>Sandeep Tiwari</author>
  <date>2026-09-14</date>
  <category>Architecture</category>
  <readTime>5 min read</readTime>
  <summary>
    This blog explains how to create a reusable XML-based content structure.
  </summary>
  <thumbnail src="/images/blogs/my-first-blog.jpg" alt="My first blog thumbnail" />
  <tags>
    <tag>Blog</tag>
    <tag>Architecture</tag>
    <tag>React</tag>
  </tags>
</meta>
```

### Step 3: Add the article body

Use the supported content tags.

#### Example structure

```xml
<content>
  <tle>My First Blog</tle>
  <smr>Short summary text shown at the top of the article.</smr>

  <hd1>Why this structure helps</hd1>
  <p>Write paragraphs using the simple p tag.</p>

  <hd2>Supported list styles</hd2>
  <list type="dot">
    <item>Dot bullet list</item>
    <item>Reusable for simple explanations</item>
  </list>

  <list type="number">
    <item>First step</item>
    <item>Second step</item>
  </list>

  <list type="arrow">
    <item>Arrow list for recommendations</item>
    <item>Nice for action items</item>
  </list>

  <hd3>Code example</hd3>
  <codeJ><![CDATA[
const message = 'Hello world';
console.log(message);
  ]]></codeJ>

  <img src="/images/blogs/example-image.png" alt="Example image for the blog" caption="Helpful diagram" />
</content>
```

### Step 4: Add blog metadata to the homepage list

Update the blog list in `src/data/blogs.js`.

```js
{
  url: "/blogs/my-first-blog",
  title: "My First Blog",
  description: "This blog explains how to create a reusable XML-based content structure.",
  category: "Architecture",
  readTime: "5 min read",
}
```

> The homepage card uses the data from `src/data/blogs.js`, so the card will appear automatically when the new entry is added.

### Step 5: Create the image assets

If you use a thumbnail or image in the article, place the file in a folder such as:

```text
public/images/blogs/
```

Then reference it in the XML using the `src` attribute.

### Step 6: Use the correct file naming pattern

We recommend matching the URL slug and file name:

```text
slug: my-first-blog
file: public/blogs/articles/my-first-blog.xml
```

This keeps the system predictable and easier for the team to manage.

## Supported list styles

### Dot list

```xml
<list type="dot">
  <item>First point</item>
  <item>Second point</item>
</list>
```

### Numbered list

```xml
<list type="number">
  <item>First step</item>
  <item>Second step</item>
</list>
```

### Arrow list

```xml
<list type="arrow">
  <item>Action item one</item>
  <item>Action item two</item>
</list>
```

## Supported code tags

- `codeJ` → JavaScript
- `codeP` → Python
- `codeS` → Scala
- `codeT` → TypeScript
- `codeJava` → Java

Example:

```xml
<codeP><![CDATA[
print('Hello world')
]]></codeP>
```

## Image support

Use the `img` tag when you want a blog image.

```xml
<img
  src="/images/blogs/example-image.png"
  alt="Meaningful description for accessibility"
  caption="Optional caption text"
/>
```

### Important image rule

Every image should have an `alt` attribute. This improves accessibility and also helps search engines understand the image.

## Current rendering behavior

The parser in `blogContent.js` does the following:

1. Reads the XML string
2. Extracts `meta` data
3. Converts each content node into a normalized block
4. Passes the result to `BlogRenderer.js`

`BlogRenderer.js` then converts each block into the right HTML structure.

## Why this is easy for the team

A content writer only needs to know:

- how to create an XML file
- which tags are supported
- how to add metadata
- how to add lists, code, and images

They do not need to write custom CSS or HTML for every blog.

## Best practice for future blog authors

1. Keep the title clear and short
2. Add a strong summary
3. Use `hd1`, `hd2`, `hd3` for structure
4. Use lists for grouped ideas
5. Add image `alt` text always
6. Use code tags for code snippets
7. Keep XML valid and properly closed

## Current configured XML article

The app is currently configured to use this XML article:

```text
public/blogs/articles/aws-gist.xml
```

Keep the homepage card entry in `src/data/blogs.js` aligned with the XML `<slug>` value so the route resolves correctly.

## Recommended workflow for the team

1. Create an XML file under `public/blogs/articles/`
2. Add the blog metadata in `src/data/blogs.js`
3. Add the thumbnail or images under `public/images/blogs/`
4. Use the supported tags only
5. Validate that the final page renders correctly

## How to add a new XML tag easily

This architecture is designed so new content tags can be added without rewriting the blog rendering logic.

### 1. Add a parser mapping in `blogConfig.js`

In `src/blog/blogConfig.js`, add a new tag entry. Each entry defines:

- the XML tag name
- the parser function that converts the XML node into a normalized block
- the React component that renders that block

Example:

```js
export const blogTagConfig = {
  warning: {
    blockType: "callout",
    parser: (node) => ({
      type: "callout",
      value: node.textContent.trim(),
    }),
    component: WarningBlock,
  },
};
```

### 2. Create the React component

Add a small component that receives `block` and renders the UI.

```js
function WarningBlock({ block, index }) {
  return (
    <div key={index} className="blog-callout">
      {block.value}
    </div>
  );
}
```

### 3. Make the parser return a structured block

The parser does not generate raw HTML. Instead it returns a normalized object like this:

```js
{ type: "callout", value: "Important message" }
```

This gives you a clean separation between:

- XML input
- normalized blog block data
- React-based rendering

### 4. Reuse same update pattern for all future tags

When a team member wants a new tag, they only need to update:

- `blogConfig.js` for the parser + component mapping
- optionally the shared CSS file for styling

The parser and renderer will automatically pick up the new tag without having to modify the core logic.

## Professional rendering model

This design keeps the content layer clean and professional:

- XML contains only structured content
- React components handle the actual presentation
- shared CSS ensures consistent blog styling across every post
- no raw HTML is required inside article files
- all article content flow is centralized and configurable

## Notes

- This architecture already supports the team requirement for dot, number, and arrow lists.
- XML can be authored locally or fetched from an API, because the parser works on the XML string itself.
- The renderer is centralized, so all blog pages will use the same content styling rules.
