<p align="center">
  <h1 align="center">localized-story-loader-flat</h1>
  <p align="center">A <a href="https://www.storyblok.com" target="_blank">Storyblok</a> plugin to load stories as source of dropdown but adds the value as flat value and not as object.</p>
</p>
<br><br>

## What is localized-story-loader-flat
If you're using a folder structure like:
```
- de
--- home
--- locations
----- First Location
----- Second Location
```
you can now directly use this plugin to access all (for example) *locations* in a dropdown. If you're looking for a *not localized* version (so we wouldn't look for `de` or `en` as root folders - look for the `story-loader-flat`.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production
npm run build
```

For more information see the [docs for field types](https://www.storyblok.com/docs/Guides/Creating-a-field-type-plugin).
