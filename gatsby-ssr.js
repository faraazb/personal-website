const React = require("react");

exports.onRenderBody = ({setPostBodyComponents}) => {
    setPostBodyComponents([
        <script
            id={'pageclip'}
            key={'https://s.pageclip.co/v1/pageclip.js'}
            src={'https://s.pageclip.co/v1/pageclip.js'}
        />,
        <script async defer src='https://simple.faraazbiyabani.me/latest.js'></script>,
        <noscript><img src='https://simple.faraazbiyabani.me/noscript.gif' alt=''
                       referrerPolicy="no-referrer-when-downgrade"/></noscript>
    ]);
}
