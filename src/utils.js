export const trackWhatsApp = (e, customUrl) => {
    if (e) e.preventDefault();
    const url = customUrl || (e && e.currentTarget.href);

    if (!url) return;

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {}, {
            event_callback: function () {
                window.open(url, '_blank');
            }
        });
        // Fallback if event_callback fails or is blocked
        setTimeout(() => {
            window.open(url, '_blank');
        }, 500);
    } else {
        window.open(url, '_blank');
    }
};
