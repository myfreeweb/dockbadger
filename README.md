# dockBadger #
## About ##
a pure JavaScript solution for adding a dock badge (for Fluid and Mozilla Prism) or just a number to the title of current page (for any browser). Very small and useful for displaying **unread messages count** in mail/chat webapps.

## Usage ##
in your $(window).load(function(){})/window.onload/etc. init function:
    dockBadger.init()

when you need to set a number (for example, user receives a message):
    dockBadger.set(number)

when you need to clear the badge (tip: put this in $('body').hover(function() {})):
    dockBadger.set(0)
