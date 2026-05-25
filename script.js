let currentUser = JSON.parse(localStorage.getItem('ls_user')) || null;
let activeRole = localStorage.getItem('ls_role') || 'cliente';
let currentPin = "";
let correctPin = localStorage.getItem('ls_saved_pin') || "1234"; 
let failedAttempts = parseInt(localStorage.getItem('ls_failed_attempts')) || 0;

const lockerLocations = [
    { name: "LockerSpot Milano Centrale", addr: "Piazza Duca d'Aosta, Milano", lat: 45.4858, lng: 9.2032, vani: "8 su 10 liberi" },
    { name: "LockerSpot Roma Termini", addr: "Via Giolitti, Roma", lat: 41.9014, lng: 12.5021, vani: "5 su 10 liberi" },
    { name: "LockerSpot Firenze S.M.N.", addr: "Piazza della Stazione, Firenze", lat: 43.7765, lng: 11.2478, vani: "9 su 10 liberi" }
];

let map = null;

window.onload = function() {
    checkSecurityLock();
    if(currentUser) { showApp(); } else { showAuth(); }
    renderHomeLockers();
};

function checkSecurityLock() {
    if(failedAttempts >= 3) {
        document.getElementById('lockScreen').classList.remove('hidden');
        document.getElementById('authScreen').classList.add('hidden');
        document.getElementById('app').classList.add('hidden');
    }
}

function authTab(tab) {
    document.getElementById('atLogin').classList.toggle('active', tab === 'login');
    document.getElementById('atReg').classList.toggle('active', tab === 'reg');
    document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
    document.getElementById('regForm').classList.toggle('hidden', tab !== 'reg');
    document.getElementById('authErr').classList.add('hidden');
}

function selRole(role) {
    activeRole = role;
    document.getElementById('roleC').classList.toggle('sel', role === 'cliente');
    document.getElementById('roleF').classList.toggle('sel', role === 'corriere');
}

function doRegister() {
    const name = document.getElementById('rName').value.trim();
    const email = document.getElementById('rEmail').value.trim();
    const pass = document.getElementById('rPass').value.trim();

    if(!name || !email || pass.length < 6) {
        showAuthError("Compila tutti i campi. Password min 6 caratteri.");
        return;
    }
    currentUser = { name: name, email: email, role: activeRole };
    localStorage.setItem('ls_user', JSON.stringify(currentUser));
    localStorage.setItem('ls_role', activeRole);
    showApp();
}

function doLogin() {
    const email = document.getElementById('liEmail').value.trim();
    const pass = document.getElementById('liPass').value.trim();

    if(!email || !pass) {
        showAuthError("Inserisci email e password.");
        return;
    }
    activeRole = localStorage.getItem('ls_role') || 'cliente';
    currentUser = { name: email.split('@')[0], email: email, role: activeRole };
    localStorage.setItem('ls_user', JSON.stringify(currentUser));
    showApp();
}

function showAuthError(msg) {
    const err = document.getElementById('authErr');
    err.innerText = msg;
    err.classList.remove('hidden');
}

function showAuth() {
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
}

function showApp() {
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    
    document.getElementById('heroName').innerText = currentUser.name;
    document.getElementById('avatarBtn').innerText = currentUser.name.charAt(0).toUpperCase();
    document.getElementById('profName').innerText = currentUser.name;
    document.getElementById('profRole').innerText = currentUser.role === 'corriere' ? "🚚 Corriere" : "🧑 Cliente";
    
    document.getElementById('courierPanel').classList.toggle('hidden', currentUser.role !== 'corriere');
    document.getElementById('clientPanel').classList.toggle('hidden', currentUser.role !== 'cliente');
    
    goTab('home');
}

function doLogout() {
    localStorage.removeItem('ls_user');
    currentUser = null;
    showAuth();
}

function goTab(tabId) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.add('hidden');
        p.style.display = 'none';
    });
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const targetPage = document.getElementById('page' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
    targetPage.classList.remove('hidden');
    
    if(tabId === 'map' || tabId === 'chat') {
        targetPage.style.display = 'flex';
    } else {
        targetPage.style.display = 'block';
    }
    
    const navBtn = document.getElementById('btnTab' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
    if(navBtn) navBtn.classList.add('active');

    if(tabId === 'map') setTimeout(initMap, 200);
}

function renderHomeLockers() {
    const container = document.getElementById('homeLockerList');
    container.innerHTML = "";
    lockerLocations.forEach(loc => {
        container.innerHTML += `
            <div class="li" onclick="goTab('map')">
                <div class="li-info">
                    <div class="li-n">${loc.name}</div>
                    <div class="li-m">${loc.addr}</div>
                </div>
                <span class="li-badge">${loc.vani}</span>
            </div>
        `;
    });
}

function initMap() {
    if (map !== null) return; 
    map = L.map('map').setView([42.5041, 12.6463], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap' }).addTo(map);

    lockerLocations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(map);
        marker.on('click', () => {
            document.getElementById('mpName').innerText = loc.name;
            document.getElementById('mpAddr').innerText = loc.addr;
            document.getElementById('mpTag').innerText = loc.vani;
        });
    });
}

function depositPackage() {
    const pin = Math.floor(1000 + Math.random() * 9000).toString(); 
    correctPin = pin;
    localStorage.setItem('ls_saved_pin', pin);
    
    document.getElementById('genPin').innerText = pin;
    document.getElementById('depBtn').classList.add('hidden');
    document.getElementById('depSuccess').classList.remove('hidden');
}

function resetCourier() {
    document.getElementById('depBtn').classList.remove('hidden');
    document.getElementById('depSuccess').classList.add('hidden');
}

function addD(num) {
    if(currentPin.length >= 4) return;
    currentPin += num;
    updatePinDots();
}

function delD() {
    currentPin = currentPin.slice(0, -1);
    updatePinDots();
}

function updatePinDots() {
    for(let i=0; i<4; i++) {
        const dot = document.getElementById('pd' + i);
        if(i < currentPin.length) {
            dot.classList.add('filled');
            dot.classList.remove('err');
        } else {
            dot.classList.remove('filled', 'err');
        }
    }
}

function confirmPin() {
    if(currentPin.length < 4) return;
    
    if(currentPin === correctPin) {
        document.getElementById('clientMain').classList.add('hidden');
        document.getElementById('clientOK').classList.remove('hidden');
        failedAttempts = 0;
        localStorage.setItem('ls_failed_attempts', 0);
    } else {
        failedAttempts++;
        localStorage.setItem('ls_failed_attempts', failedAttempts);
        
        for(let i=0; i<4; i++) { document.getElementById('pd'+i).classList.add('err'); }
        
        setTimeout(() => {
            currentPin = "";
            updatePinDots();
            const attRimasti = 3 - failedAttempts;
            if(attRimasti <= 0) {
                checkSecurityLock();
            } else {
                document.getElementById('attLbl').innerText = `PIN Errato! Tentativi rimasti: ${attRimasti}`;
                document.getElementById('ad' + (failedAttempts-1)).classList.add('used');
            }
        }, 500);
    }
}

function resetClient() {
    currentPin = "";
    updatePinDots();
    document.getElementById('clientMain').classList.remove('hidden');
    document.getElementById('clientOK').classList.add('hidden');
    document.getElementById('attLbl').innerText = "Tentativi rimasti: 3";
    for(let i=0; i<3; i++) { document.getElementById('ad'+i).classList.remove('used'); }
}

function openChat() {
    document.getElementById('convList').classList.add('hidden');
    document.getElementById('chatView').classList.remove('hidden');
    document.getElementById('chatView').style.display = 'flex';
}

function backToConvList() {
    document.getElementById('chatView').classList.add('hidden');
    document.getElementById('chatView').style.display = 'none';
    document.getElementById('convList').classList.remove('hidden');
}

function sendMsg() {
    const input = document.getElementById('chatIn');
    const txt = input.value.trim();
    if(!txt) return;

    const msgs = document.getElementById('chatMsgs');
    msgs.innerHTML += `<div class="msg me"><div class="msg-bubble">${txt}</div></div>`;
    input.value = "";
    
    setTimeout(() => {
        msgs.innerHTML += `<div class="msg them"><div class="msg-bubble">Ricevuto! Il supporto tecnico ha preso in carico la tua richiesta.</div></div>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 1000);
    msgs.scrollTop = msgs.scrollHeight;
}
