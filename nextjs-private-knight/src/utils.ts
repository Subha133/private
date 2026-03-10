export const trackWhatsApp = (e?: React.MouseEvent, customUrl?: string) => {
    if (e) e.preventDefault();
    const url = customUrl || (e && e.currentTarget instanceof HTMLAnchorElement ? e.currentTarget.href : '');

    if (!url) return;

    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {}, {
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
