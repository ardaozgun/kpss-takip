
import { UI } from './ui.js';

export const Auth = {
    user: null,
    init() {
        const savedUser = localStorage.getItem('kpss_user');
        if (savedUser) this.doLogin(savedUser);

        document.getElementById('login-btn').addEventListener('click', () => this.login());
        document.getElementById('logout-btn').addEventListener('click', () => this.logout());
    },
    login() {
        const u = document.getElementById('username').value.trim();
        const p = document.getElementById('password').value;
        
        if (p !== '1234') return UI.toast("Hata: Şifre 1234 olmalı.");
        if (u) this.doLogin(u);
    },
    doLogin(username) {
        this.user = username;
        localStorage.setItem('kpss_user', username);
        document.getElementById('user-display').innerText = username;
        
        document.getElementById('login-view').classList.remove('active');
        document.getElementById('app-layout').style.display = 'flex';
        UI.toast(`Hoş geldin, ${username}!`);
    },
    logout() {
        localStorage.removeItem('kpss_user');
        location.reload();
    }
};
