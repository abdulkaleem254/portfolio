import React, { useEffect, useState } from 'react';
import './InAppBrowserBanner.css';

const InAppBrowserBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isInAppBrowser = /LinkedIn|FBAN|FBAV|Instagram|Twitter/.test(ua);
        if (isInAppBrowser) {
            setShowBanner(true);
        }
    }, []);

    if (!showBanner) return null;

    return (
        <div className="in-app-banner">
            <p>
                🚀 For the best experience, please open this site in your browser.
                <br />
                Tap the <strong>•••</strong> or <strong>share</strong> icon and choose <strong>“Open in browser”</strong>.
            </p>
        </div>
    );
};

export default InAppBrowserBanner;
