// <!--[if lte IE 8]>
// <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css">
//                             <![endif]-->
//                             <!--[if gt IE 8]><!-->
//                                               <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
//                                                                           <!--<![endif]-->
//                                                                           <!--[if lte IE 8]>
// <link rel="stylesheet" href="/combo/1.18.13?/css/layouts/blog-old-ie.css">
//                             <![endif]-->
//                             <!--[if gt IE 8]><!-->
//                                               <link rel="stylesheet" href="/combo/1.18.13?/css/layouts/blog.css">
//                                                                           <!--<![endif]-->
//                                                                           <!--[if lt IE 9]>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
//             <![endif]-->
//             <script>
//             (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//                 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//               m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//             })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
// ga('create', 'UA-41480445-1', 'purecss.io');
// ga('send', 'pageview');
// </script>

export const template = ({type, html, preloadedState}) => `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Test layout">
        <title>Thram CMS ${type} Renderer</title>
        <link rel="stylesheet" type="text/css" href="${type}_theme.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/manifest.js"></script>
        <script src="/vendor.js"></script>
        <script src="/${type}.js"></script>
      </body>
    </html>
    `;