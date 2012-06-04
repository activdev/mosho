Mosho
===
[Check out the demo](http://pdehn.github.com/mosho/demo)

Mosho is another browser-based presentation framework. Inspired by impress.js, but in my own flavor.

If you're familiar with impress, the basics are the same. Use data-(x|y|z|rot(x|y|z)|scale) attributes to move around mosho-slide class elements all wrapped in a mosho class container.

Arrows and spacebar move start transitions from slide to slide, and hash links are followed appropriately.

The rest of these docs are mostly for reference. If you'd like to get a feel for what the code looks like, check out everything in the demo directory.

Slide (.mosho-slide) attributes
---

###data-x, data-y, data-z = *number*
translate the slide in 3d space

###data-rotx, data-roty, data-rotz = *number*
rotate the slide in 3d space (order is x,z,y)
 
###data-scale = *number*
make the slide bigger (>1) or smaller (0 < x < 1) than it would otherwise be

###data-next, data-prev = *slide-id*
introduce non-linear flow by changing destination slide in either direction
 
###data-transition = *duration timing-function delay*
like CSS transitions, minus the property specifier. Get's applied to the container
element (think camera) before transitioning to the element with this transition

Slide groups (.mosho-group)
---
Slides can be nested inside .mosho-group elements to apply common styling and transforms.
Any data-(xyz|rotxyz) transform attributes on the group are applied to the transform
attributes of children.

CSS Notes
---
All slides will have the mosho-slide class.

The current slide is given the mosho-active class, all others have the mosho-inactive class.

Mosho API
---
Mosho was designed to fit goals I had a desire to fill. I'm open to suggestions.

###mosho.init()
Start mosho. Prior to this, mosho does nothing. Triggers "mosho:pre-init" and "mosho:post-init" events on the document.

###mosho.show(*slide-id*)
Jump directly to the specified slide.

Triggers appropriate "mosho:enter:*slide-id*", "mosho:leave:*slide-id*",
"mosho:pre-show", and "mosho:post-show" events on the document.
post/pre-show events' detail parameter contains:

  * prevSlide: the Slide object being transitioned from
  * nextSlide: the Slide object being transitioned to

###mosho.next(), mosho.prev()
Looks at current slide and then calls mosho.jump() appropriately.

###mosho.enter(*slide-id*, *callback*), mosho.leave(*slide-id*, *callback*)
Helper functions to add listeners for entering or leaving the specified slides.

###mosho.plugin(*plugin*)
Currently, it's just a convenient way to attach a collection of callbacks to
pre/post init/jump events. I have plans to expand functionality later. *Plugin* should be an object containing at least one of the following:

 * preInit: *callback*
 * postInit: *callback*
 * preShow: *callback*
 * postShow: *callback*

###mosho.getElement(*element-id*?)
Get's the Scene Element object with specified id, or returns current slide if no id is given.

Up next
---
This version of Mosho contains the major features I wanted, but I've got more I already want to be adding.

 * auto-scaling
   
   I do like this about impress.js, and I hope to get around to it next.
 
 * More plugin features
   
   In particular, I'd like to add support for custom scene tree types and clean
   ways to push/pop element (transform|style|...) states between transitions
 
 * Dynamic scene tree elements
   
   Supporting runtime insertion/deletion/restructuring of slides/groups seems like
   a useful feature - it's probably going to be my next major update.
 
 # Documentation
   
   I'm fully aware the internal documentation could use work. 
 
 * other stuff
   
   I'm always open to suggestions, but I'd prefer to add support for highly specialized
   changes in the form of supporting plugins where possible.

License
---
Right now it's under MIT