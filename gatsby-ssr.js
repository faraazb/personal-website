const React = require("react");

exports.onRenderBody = ({setPostBodyComponents}) => {
    setPostBodyComponents([
        <script
            id={'pageclip'}
            key={'https://s.pageclip.co/v1/pageclip.js'}
            src={'https://s.pageclip.co/v1/pageclip.js'}
        />,
        <script async defer data-hostname='faraaz.tech' src='https://scripts.simpleanalyticscdn.com/latest.js'></script>,
        <noscript><img src='https://queue.simpleanalyticscdn.com/noscript.gif?hostname=faraaz.tech' alt=''
                       referrerPolicy="no-referrer-when-downgrade"/></noscript>
    ]);
}
