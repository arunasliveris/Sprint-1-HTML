        var button = document.getElementById('button');
        var body = document.body;

        function init() 
        {
            if ( arguments.callee.done )
                return;
            arguments.callee.done = true;

            if ( _timer )
                clearInterval( _timer );
            body.className = body.className == 'hide' ? '' : 'hide'; 
        };

        /**
         * for Mozilla/Opera9
         */
        if ( document.addEventListener ) 
        {
            document.addEventListener( "DOMContentLoaded", init, false );
        }

        /**
         * for Internet Explorer
         */
        /*@cc_on @*/
        /*@if (@_win32)
            document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
            var script = document.getElementById("__ie_onload");
            script.onreadystatechange = function() {
                if (this.readyState == "complete") {
                    init(); // call the onload handler
                }
            };
        /*@end @*/

        /**
         * for Safari
         */
        if ( /WebKit/i.test( navigator.userAgent ) )
        {
            var _timer = setInterval( function() 
            {
                if ( /loaded|complete/.test( document.readyState ) ) 
                {
                    init();
                }
            }, 10);
        }

        button.onclick = function() {
            body.className = body.className == 'hide' ? '' : 'hide'; 
        }
