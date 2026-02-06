/**
 * Sends data to the Make.com webhook.
 * uses navigator.sendBeacon for reliable delivery during navigation/redirects,
 * falling back to fetch with keepalive.
 * 
 * @param {Object} data - The payload to send.
 */
export const sendWebhook = (data) => {
    const WEBHOOK_URL = 'https://hook.us1.make.com/at6p771s3llmxmxvt4svmnjrl428bcu3';

    try {
        const payload = JSON.stringify(data);
        const blob = new Blob([payload], { type: 'application/json' });

        // Prefer sendBeacon for fire-and-forget reliability during re-navigation
        if (navigator.sendBeacon) {
            navigator.sendBeacon(WEBHOOK_URL, blob);
        } else {
            // Fallback for environments without sendBeacon
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: payload,
                keepalive: true, // Critical for successful request during page unload/redirect
            }).catch(err => console.error('Webhook fetch error:', err));
        }
    } catch (error) {
        console.error('Failed to send webhook:', error);
    }
};
