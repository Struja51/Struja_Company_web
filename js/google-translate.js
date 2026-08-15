// Google Translate Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Get currently active language from cookie or default to 'en'
    function getCurrentLanguage() {
        try {
            const cookies = document.cookie.split('; ');
            const googleTransCookie = cookies.find(row => row.startsWith('googtrans='));
            
            if (googleTransCookie) {
                // Cookie format is googtrans=/en/hr (source/target)
                const cookieValue = googleTransCookie.split('=')[1];
                const parts = cookieValue.split('/');
                const targetLang = parts[2]; // Get the target language
                console.log('Current language from cookie:', targetLang, 'Full cookie:', cookieValue);
                return targetLang || 'en';
            }
        } catch(e) {
            console.log('Could not read Google Translate cookie:', e);
        }
        return 'en';
    }
    
    // Set active button based on current language
    function updateActiveButton() {
        const currentLang = getCurrentLanguage();
        console.log('Updating active button to:', currentLang);
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Set language using Google Translate
    function setLanguage(lang) {
        console.log('Setting language to:', lang);
        
        // Determine source and target language
        // Source is always 'en', target is the selected language
        let cookieValue;
        if (lang === 'en') {
            cookieValue = '/en/en';
        } else if (lang === 'hr') {
            cookieValue = '/en/hr';
        } else {
            cookieValue = '/en/en';
        }
        
        // Set cookie for Google Translate with 1-year expiration
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + date.toUTCString();
        
        // For localhost, don't include domain. For production, use domain
        let cookieString;
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Localhost - simple path only
            cookieString = `googtrans=${cookieValue}; ${expires}; path=/`;
        } else {
            // Production - include domain
            cookieString = `googtrans=${cookieValue}; ${expires}; path=/; domain=.${window.location.hostname}`;
        }
        
        console.log('Setting cookie:', cookieString);
        document.cookie = cookieString;
        
        // Verify cookie was set
        console.log('Cookie after setting:', document.cookie);
        
        // Force translation by reloading page
        setTimeout(function() {
            location.reload();
        }, 100);
    }
    
    // Add click listeners to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            console.log('Button clicked for language:', lang);
            setLanguage(lang);
        });
    });
    
    // Initialize active button on page load
    updateActiveButton();
    
    // Check if Google Translate has finished loading
    // Wait for Google Translate widget to be initialized
    setTimeout(updateActiveButton, 500);
    setTimeout(updateActiveButton, 2000);
});


