export const UI = {
    init() {
        this.bindEvents();
        this.loadTheme();
    },
    bindEvents() {
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target));
        });
    },
    toggleTheme() {
        const root = document.documentElement;
        const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('kpss_theme', newTheme);
    },
    loadTheme() {
        const savedTheme = localStorage.getItem('kpss_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    },
    switchTab(btn) {
        document.querySelectorAll('.nav-item, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    },
    toast(message) {
        const t = document.getElementById('toast');
        t.innerText = message;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }
};
