document.addEventListener("DOMContentLoaded", function() {
    // Check if user closed the popup in this session
    if (sessionStorage.getItem('fitfixTrustPopupClosed') === 'true') {
        return; 
    }

    // Inject the CSS styles once
    if (!document.getElementById('fitfix-popup-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'fitfix-popup-styles';
        styleSheet.innerHTML = `
            @keyframes fitfixSlideIn {
                0% { transform: translateY(40px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
            
            .fitfix-trust-card {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 350px;
                max-width: calc(100% - 32px);
                background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
                border: 1.5px solid #D4AF37;
                border-radius: 16px;
                padding: 24px;
                box-shadow: 0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                z-index: 999999;
                animation: fitfixSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                display: flex;
                flex-direction: column;
                gap: 16px;
                box-sizing: border-box;
            }

            .fitfix-close-btn {
                position: absolute;
                top: -12px;
                right: -12px;
                width: 34px;
                height: 34px;
                background: #D4AF37;
                color: #111;
                border: 2px solid #111;
                border-radius: 50%;
                font-size: 22px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                transition: transform 0.2s ease, background 0.2s ease;
                line-height: 1;
            }

            .fitfix-close-btn:hover {
                transform: scale(1.1);
                background: #fce485;
            }

            .fitfix-header {
                text-decoration: none;
                display: block;
                padding-right: 15px;
            }

            .fitfix-title {
                color: #D4AF37;
                margin: 0 0 6px 0;
                font-size: 16px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 6px;
                letter-spacing: 0.5px;
            }

            .fitfix-reg {
                color: #a0a0a0;
                margin: 0;
                font-size: 13px;
                line-height: 1.5;
            }

            .fitfix-link {
                color: #D4AF37;
                text-decoration: underline;
                font-weight: 600;
                transition: color 0.2s;
            }
            
            .fitfix-link:hover {
                color: #fce485;
            }

            .fitfix-divider {
                height: 1px;
                background: linear-gradient(90deg, transparent, #333, transparent);
                margin: 2px 0;
            }

            .fitfix-features {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .fitfix-feature-item {
                margin: 0;
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
                text-decoration: none;
            }

            .fitfix-delivery { color: #25D366; }
            
            .fitfix-location { 
                color: #00BFFF; 
                font-size: 13px; 
                transition: color 0.2s ease;
            }
            
            .fitfix-location:hover {
                color: #66d9ff;
                text-decoration: underline;
            }

            @media (prefers-reduced-motion: reduce) {
                .fitfix-trust-card { animation: none; }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Create the HTML structure
    const popup = document.createElement('div');
    popup.className = 'fitfix-trust-card';
    popup.id = 'fitfix-trust-popup';
    
    popup.innerHTML = `
        <button id="close-fitfix-popup" class="fitfix-close-btn" aria-label="Close popup">&times;</button>
        
        <a href="https://fitfixclothesalterations.co.ke/registration.html" class="fitfix-header">
            <h3 class="fitfix-title">🛡️ Verified Kenyan Business</h3>
            <p class="fitfix-reg">
                Reg No: BN-B8S6O3PE<br>
                <span class="fitfix-link">Tap to view our Certificate</span>
            </p>
        </a>
        
        <div class="fitfix-divider"></div>
        
        <div class="fitfix-features">
            <p class="fitfix-feature-item fitfix-delivery">
                <span>🚚</span> Free Door-to-Door Pickup & Delivery
            </p>
            <!-- Clickable Location Link -->
            <a href="https://maps.google.com/?q=Diamond+Plaza+Parklands+Nairobi" target="_blank" style="text-decoration: none;">
                <p class="fitfix-feature-item fitfix-location">
                    <span>📍</span> Moved to Diamond Plaza Parklands, 1st Floor (Parking Available)
                </p>
            </a>
        </div>
    `;
    
    document.body.appendChild(popup);

    // Close button logic
    document.getElementById('close-fitfix-popup').addEventListener('click', function() {
        const popupElement = document.getElementById('fitfix-trust-popup');
        popupElement.style.display = 'none';
        sessionStorage.setItem('fitfixTrustPopupClosed', 'true');
    });
});
