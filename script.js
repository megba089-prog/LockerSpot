const K = { BLK:'ls_blk', ATT:'ls_att', PIN:'ls_pin', CMP:'ls_cmp' };
var pin = '';

window.onload = function() {
    if(localStorage.getItem(K.BLK)==='true'){ lockdown(); return; }
    var a = parseInt(localStorage.getItem(K.ATT)||'0');
    syncAttDots(a);
    var t = new Date();
    document.getElementById('vaniVal').textContent = "7 su 10";
    document.getElementById('upTime').textContent = t.getHours().toString().padStart(2,'0')+':'+t.getMinutes().toString().padStart(2,'0');
};

function switchTab(t){
    document.getElementById('pC').classList.toggle('hidden', t!=='c');
    document.getElementById('pU').classList.toggle('hidden', t!=='u');
    document.getElementById('tC').classList.toggle('active', t==='c');
    document.getElementById('tU').classList.toggle('active', t==='u');
    
    // NASCONDE MAPPA E LISTA NEI TAB ATTIVI
    var mainElements = document.querySelectorAll('.main-info-element');
    mainElements.forEach(el => el.classList.add('hidden'));
}

function goHome() {
    document.getElementById('pC').classList.add('hidden');
    document.getElementById('pU').classList.add('hidden');
    document.getElementById('tC').classList.remove('active');
    document.getElementById('tU').classList.remove('active');
    
    // MOSTRA LA MAPPA E LISTA IN HOME
    var mainElements = document.querySelectorAll('.main-info-element');
    mainElements.forEach(el => el.classList.remove('hidden'));
}

function depositPackage(){
    var p = (Math.floor(Math.random()*9000)+1000).toString();
    var c = "03";
    localStorage.setItem(K.PIN, p);
    localStorage.setItem(K.CMP, c);
    document.getElementById('genPin').textContent = p;
    document.getElementById('genComp').textContent = '#'+c;
    document.getElementById('depBtn').classList.add('hidden');
    document.getElementById('depSuccess').classList.remove('hidden');
}

function resetCourier(){
    document.getElementById('depBtn').classList.remove('hidden');
    document.getElementById('depSuccess').classList.add('hidden');
}

function addD(d){ if(pin.length<4) { pin+=d; renderDots(); } }
function delD(){ pin=pin.slice(0,-1); renderDots(); }

function renderDots(){
    for(var i=0;i<4;i++) document.getElementById('pd'+i).classList.toggle('filled', i<pin.length);
}

function confirmPin(){
    var stored = localStorage.getItem(K.PIN);
    if(pin===stored && stored){
        document.getElementById('clientMain').classList.add('hidden');
        document.getElementById('clientOK').classList.remove('hidden');
        localStorage.setItem(K.ATT,'0');
        pin=''; renderDots();
    } else {
        var a = parseInt(localStorage.getItem(K.ATT)||'0')+1;
        localStorage.setItem(K.ATT, a.toString());
        syncAttDots(a);
        pin=''; renderDots();
        if(a>=3) { lockdown(); }
    }
}

function syncAttDots(a){
    for(var i=0;i<3;i++) document.getElementById('ad'+i).classList.toggle('used', i<a);
    var r = Math.max(0, 3-a);
    document.getElementById('attLbl').textContent = 'Tentativi rimasti: ' + r;
}

function resetClient(){
    document.getElementById('clientMain').classList.remove('hidden');
    document.getElementById('clientOK').classList.add('hidden');
    syncAttDots(0);
}

function lockdown(){
    localStorage.setItem(K.BLK,'true');
    document.getElementById('app').classList.add('hidden');
    document.getElementById('lockScreen').classList.remove('hidden');
}