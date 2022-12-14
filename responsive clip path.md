# How to create responsive clip path

-   Cut the clip path numbers, paste to this url: https://yoksel.github.io/relative-clip-path/
-   Paste the code as the format below

```html
<svg width="0" height="0">
    <defs>
        <clipPath id="id of the shape" clipPathUnits="objectBoundingBox">
            <path d="paste path here" />
        </clipPath>
    </defs>
</svg>
```

## If not working
-   Paste the original path to this site: https://codepen.io/leaverou/full/RmwzKv
-   Copy the **absolute path**, paste it to some editor and replace the commas(,) with spaces
-   Paste it to https://yoksel.github.io/relative-clip-path/ again. Should be working fine now

-   Apply it to your content by referring to clip-path: url("#the id of shape")
