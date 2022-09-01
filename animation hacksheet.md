# Animation Hacksheet

## These will (probably) fuck up your performance:

-   every box attribute(width, height, padding, etc)
-   overflow attributes(x, y...)
-   position attributes(top, left...)
-   font attributes
-   display
-   topposition
-   float
-   text-align
-   line-height
-   vertical-align
-   clear
-   white-space

## These will be better:

-   background attributes(image, position...)
-   outline attributes(color, style...)
-   visibility
-   text-decoration
-   color
-   border-style
-   border-radius
-   box-shadow

## Hacks?

-   use translation to move item instead of using position attribute
-   use 3dtranslation to force gpu activation to increase performance
