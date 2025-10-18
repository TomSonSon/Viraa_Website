// Viraa Analytics - Simple Website Tracking
class ViraaAnalytics {
    constructor() {
        this.storageKey = 'viraa_analytics';
        this.data = this.loadData();
        this.init();
    }

    loadData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {
                pageViews: 0,
                appStoreClicks: 0,
                sessions: [],
                lastReset: new Date().toISOString()
            };
        } catch (error) {
            console.warn('Analytics: Could not load stored data', error);
            return {
                pageViews: 0,
                appStoreClicks: 0,
                sessions: [],
                lastReset: new Date().toISOString()
            };
        }
    }

    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (error) {
            console.warn('Analytics: Could not save data', error);
        }
    }

    init() {
        // Track page view
        this.trackPageView();
        
        // Track App Store button clicks
        this.trackAppStoreClicks();
        
        // Track session
        this.trackSession();
    }

    trackPageView() {
        this.data.pageViews++;
        this.saveData();
        console.log(`Analytics: Page view tracked. Total: ${this.data.pageViews}`);
    }

    trackAppStoreClick() {
        this.data.appStoreClicks++;
        this.saveData();
        console.log(`Analytics: App Store click tracked. Total: ${this.data.appStoreClicks}`);
    }

    trackAppStoreClicks() {
        const appStoreLink = document.querySelector('.app-store-link');
        if (appStoreLink) {
            appStoreLink.addEventListener('click', () => {
                this.trackAppStoreClick();
            });
        }
    }

    trackSession() {
        const sessionId = this.generateSessionId();
        const session = {
            id: sessionId,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct',
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language
        };
        
        this.data.sessions.push(session);
        
        // Keep only last 100 sessions to prevent storage bloat
        if (this.data.sessions.length > 100) {
            this.data.sessions = this.data.sessions.slice(-100);
        }
        
        this.saveData();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getStats() {
        return {
            totalPageViews: this.data.pageViews,
            totalAppStoreClicks: this.data.appStoreClicks,
            totalSessions: this.data.sessions.length,
            clickThroughRate: this.data.pageViews > 0 ? 
                ((this.data.appStoreClicks / this.data.pageViews) * 100).toFixed(2) + '%' : '0%',
            lastReset: this.data.lastReset,
            recentSessions: this.data.sessions.slice(-10).reverse()
        };
    }

    resetData() {
        this.data = {
            pageViews: 0,
            appStoreClicks: 0,
            sessions: [],
            lastReset: new Date().toISOString()
        };
        this.saveData();
        console.log('Analytics: Data reset');
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.viraaAnalytics = new ViraaAnalytics();
});

// Make analytics available globally for dashboard access
window.ViraaAnalytics = ViraaAnalytics;

