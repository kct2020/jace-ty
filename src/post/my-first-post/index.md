---
title: "Welcome to the Shrewdi Forum"
subtitle: "A brief introduction during installation"
summary: "This is an introductory post. Mainly for internal use. I use it to test this new website"
linkText: "Continue reading my first post"
date: 2021-01-27
tags: "shrewdi"
---

## Welcome
This is the first actual post. But there are some 'development' posts that are automatically generated for testing purposes. So I will delete or edit those as I continue to create this website.

The rest of this post is for testing purposes.

# Images 

```markdown
![Thumbnail](./featured-thumbnail.jpg)
Format: ![Alt Text](./featured-thumbnail.jpg)

```

![GitHub Logo](./featured-thumbnail.jpg)
Format: ![Alt Text](./featured-thumbnail.jpg)


# Custom Tags

## Details / Summary Tags

```js
{{ "{%" | escape }} details 'Reasons to create content', 'font-size:2em;', 'open' {{ "%}" | escape }}

- This
- Is
- A
- Open
- List

{{ "{%" | escape }} details 'Nested Reason' {{ "%}" | escape }}

- This
- Is
- A
- Closed
- List
{{ "{%" | escape }} enddetails {{ "%}" | escape }}

{{ "{%" | escape }} enddetails {{ "%}" | escape }}
```

{% details 'Reasons to create content', 'font-size:2em;', 'open' %}

- This
- Is
- A
- Open
- List

{% details 'Nested Reason' %}

- This
- Is
- A
- Closed
- List
{% enddetails %}

{% enddetails %}
