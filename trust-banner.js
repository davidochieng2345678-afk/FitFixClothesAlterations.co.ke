document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('fitfixTrustPopupClosed') === 'true') {
        return; 
    }

    const popup = document.createElement('div');
    
    popup.innerHTML = `
        <div id="fitfix-trust-popup" style="position: fixed; bottom: 20px; right: 20px; max-width: 340px; width: calc(100% - 40px); background: #111; border: 2px solid #D4AF37; border-radius: 12px; padding: 20px; z-index: 999999; box-shadow: 0 10px 30px rgba(0,0,0,0.6); font-family: Arial, sans-serif; display: flex; flex-direction: column; gap: 12px; animation: slideIn 0.5s ease-out;">
            
            <button id="close-fitfix-popup" style="position: absolute; top: 8px; right: 12px; background: transparent; border: none; color: #888; font-size: 26px; font-weight: bold; cursor: pointer; line-height: 1; padding: 0;">&times;</button>
            
            <a href="https://fitfixclothesalterations.co.ke/registration.html" style="text-decoration: none; display: block; padding-right: 20px;">
                <h3 style="color: #D4AF37; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">🛡️ Verified Kenyan Business</h3>
                <p style="color: #ccc; margin: 0; font-size: 13px; line-height: 1.4;">
                    Reg No: BN-B8S6O3PE<br>
                    <span style="color: #D4AF37; text-decoration: underline; font-weight: bold;">Tap to view our Certificate</span>
                </p>
            </a>
            
            <div style="border-top: 1px solid #333; padding-top: 12px;">
                <p style="color: #25D366; margin: 0; font-size: 14px; font-weight: bold;">
                    🚚 Free Door-to-Door Pickup & Delivery Across Nairobi
                </p>
            </div>
        </div>
        <style>
            @keyframes slideIn {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;
    
    document.body.appendChild(popup);

    document.getElementById('close-fitfix-popup').addEventListener('click', function() {
        document.getElementById('fitfix-trust-popup').style.display = 'none';
        sessionStorage.setItem('fitfixTrustPopupClosed', 'true');
    });
});
