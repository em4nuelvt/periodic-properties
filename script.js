// --- BANCO DE DADOS COMPLETO (1-118) ---

const rawData = [
    [1,"H","Hidrogênio",1.008,53,2.2,"Não-Metal"],
    [2,"He","Hélio",4.0026,31,0,"Gás Nobre"],
    [3,"Li","Lítio",6.94,167,0.98,"Metal Alcalino"],
    [4,"Be","Berílio",9.0122,112,1.57,"Alcalino Terroso"],
    [5,"B","Boro",10.81,87,2.04,"Semimetal"],
    [6,"C","Carbono",12.011,67,2.55,"Não-Metal"],
    [7,"N","Nitrogênio",14.007,56,3.04,"Não-Metal"],
    [8,"O","Oxigênio",15.999,48,3.44,"Não-Metal"],
    [9,"F","Flúor",18.998,42,3.98,"Halogênio"],
    [10,"Ne","Neônio",20.180,38,0,"Gás Nobre"],
    [11,"Na","Sódio",22.990,190,0.93,"Metal Alcalino"],
    [12,"Mg","Magnésio",24.305,145,1.31,"Alcalino Terroso"],
    [13,"Al","Alumínio",26.982,118,1.61,"Metal Representativo"],
    [14,"Si","Silício",28.085,111,1.90,"Semimetal"],
    [15,"P","Fósforo",30.974,98,2.19,"Não-Metal"],
    [16,"S","Enxofre",32.06,88,2.58,"Não-Metal"],
    [17,"Cl","Cloro",35.45,79,3.16,"Halogênio"],
    [18,"Ar","Argônio",39.948,71,0,"Gás Nobre"],
    [19,"K","Potássio",39.098,243,0.82,"Metal Alcalino"],
    [20,"Ca","Cálcio",40.078,194,1.00,"Alcalino Terroso"],
    [21,"Sc","Escândio",44.956,184,1.36,"Metal Transição"],
    [22,"Ti","Titânio",47.867,176,1.54,"Metal Transição"],
    [23,"V","Vanádio",50.942,171,1.63,"Metal Transição"],
    [24,"Cr","Cromo",51.996,166,1.66,"Metal Transição"],
    [25,"Mn","Manganês",54.938,161,1.55,"Metal Transição"],
    [26,"Fe","Ferro",55.845,156,1.83,"Metal Transição"],
    [27,"Co","Cobalto",58.933,152,1.88,"Metal Transição"],
    [28,"Ni","Níquel",58.693,149,1.91,"Metal Transição"],
    [29,"Cu","Cobre",63.546,145,1.90,"Metal Transição"],
    [30,"Zn","Zinco",65.38,142,1.65,"Metal Transição"],
    [31,"Ga","Gálio",69.723,136,1.81,"Metal Representativo"],
    [32,"Ge","Germânio",72.630,125,2.01,"Semimetal"],
    [33,"As","Arsênio",74.922,114,2.18,"Semimetal"],
    [34,"Se","Selênio",78.96,103,2.55,"Não-Metal"],
    [35,"Br","Bromo",79.904,94,2.96,"Halogênio"],
    [36,"Kr","Criptônio",83.798,88,3.00,"Gás Nobre"],
    [37,"Rb","Rubídio",85.468,265,0.82,"Metal Alcalino"],
    [38,"Sr","Estrôncio",87.62,219,0.95,"Alcalino Terroso"],
    [39,"Y","Ítrio",88.906,212,1.22,"Metal Transição"],
    [40,"Zr","Zircônio",91.224,206,1.33,"Metal Transição"],
    [41,"Nb","Nióbio",92.906,198,1.6,"Metal Transição"],
    [42,"Mo","Molibdênio",95.95,190,2.16,"Metal Transição"],
    [43,"Tc","Tecnécio",98,183,1.9,"Metal Transição"],
    [44,"Ru","Rutênio",101.07,178,2.2,"Metal Transição"],
    [45,"Rh","Ródio",102.91,173,2.28,"Metal Transição"],
    [46,"Pd","Paládio",106.42,169,2.20,"Metal Transição"],
    [47,"Ag","Prata",107.87,165,1.93,"Metal Transição"],
    [48,"Cd","Cádmio",112.41,161,1.69,"Metal Transição"],
    [49,"In","Índio",114.82,156,1.78,"Metal Representativo"],
    [50,"Sn","Estanho",118.71,145,1.96,"Metal Representativo"],
    [51,"Sb","Antimônio",121.76,133,2.05,"Semimetal"],
    [52,"Te","Telúrio",127.60,123,2.1,"Semimetal"],
    [53,"I","Iodo",126.90,115,2.66,"Halogênio"],
    [54,"Xe","Xenônio",131.29,108,2.6,"Gás Nobre"],
    [55,"Cs","Césio",132.91,298,0.79,"Metal Alcalino"],
    [56,"Ba","Bário",137.33,253,0.89,"Alcalino Terroso"],
    [57,"La","Lantânio",138.91,195,1.1,"Lantanídeo"],
    [58,"Ce","Cério",140.12,185,1.12,"Lantanídeo"],
    [59,"Pr","Praseodímio",140.91,247,1.13,"Lantanídeo"],
    [60,"Nd","Neodímio",144.24,206,1.14,"Lantanídeo"],
    [61,"Pm","Promécio",145,205,1.13,"Lantanídeo"],
    [62,"Sm","Samário",150.36,238,1.17,"Lantanídeo"],
    [63,"Eu","Európio",151.96,231,1.2,"Lantanídeo"],
    [64,"Gd","Gadolínio",157.25,233,1.2,"Lantanídeo"],
    [65,"Tb","Térbio",158.93,225,1.2,"Lantanídeo"],
    [66,"Dy","Disprósio",162.50,228,1.22,"Lantanídeo"],
    [67,"Ho","Hólmio",164.93,226,1.23,"Lantanídeo"],
    [68,"Er","Érbio",167.26,226,1.24,"Lantanídeo"],
    [69,"Tm","Túlio",168.93,222,1.25,"Lantanídeo"],
    [70,"Yb","Itérbio",173.05,222,1.1,"Lantanídeo"],
    [71,"Lu","Lutécio",174.97,217,1.27,"Lantanídeo"],
    [72,"Hf","Háfnio",178.49,208,1.3,"Metal Transição"],
    [73,"Ta","Tântalo",180.95,200,1.5,"Metal Transição"],
    [74,"W","Tungstênio",183.84,193,2.36,"Metal Transição"],
    [75,"Re","Rênio",186.21,188,1.9,"Metal Transição"],
    [76,"Os","Ósmio",190.23,185,2.2,"Metal Transição"],
    [77,"Ir","Irídio",192.22,180,2.2,"Metal Transição"],
    [78,"Pt","Platina",195.08,177,2.28,"Metal Transição"],
    [79,"Au","Ouro",196.97,174,2.54,"Metal Transição"],
    [80,"Hg","Mercúrio",200.59,171,2.00,"Metal Transição"],
    [81,"Tl","Tálio",204.38,156,1.62,"Metal Representativo"],
    [82,"Pb","Chumbo",207.2,154,2.33,"Metal Representativo"],
    [83,"Bi","Bismuto",208.98,143,2.02,"Metal Representativo"],
    [84,"Po","Polônio",209,135,2.0,"Semimetal"],
    [85,"At","Astato",210,127,2.2,"Halogênio"],
    [86,"Rn","Radônio",222,120,0,"Gás Nobre"],
    [87,"Fr","Frâncio",223,348,0.7,"Metal Alcalino"],
    [88,"Ra","Rádio",226,283,0.9,"Alcalino Terroso"],
    [89,"Ac","Actínio",227,195,1.1,"Actinídeo"],
    [90,"Th","Tório",232.04,180,1.3,"Actinídeo"],
    [91,"Pa","Protactínio",231.04,180,1.5,"Actinídeo"],
    [92,"U","Urânio",238.03,175,1.38,"Actinídeo"],
    [93,"Np","Netúnio",237,175,1.36,"Actinídeo"],
    [94,"Pu","Plutônio",244,175,1.28,"Actinídeo"],
    [95,"Am","Amerício",243,175,1.13,"Actinídeo"],
    [96,"Cm","Cúrio",247,175,1.28,"Actinídeo"],
    [97,"Bk","Berquélio",247,175,1.3,"Actinídeo"],
    [98,"Cf","Califórnio",251,175,1.3,"Actinídeo"],
    [99,"Es","Einstênio",252,175,1.3,"Actinídeo"],
    [100,"Fm","Férmio",257,175,1.3,"Actinídeo"],
    [101,"Md","Mendelévio",258,175,1.3,"Actinídeo"],
    [102,"No","Nobélio",259,175,1.3,"Actinídeo"],
    [103,"Lr","Laurêncio",266,175,1.3,"Actinídeo"],
    [104,"Rf","Rutherfórdio",267,0,0,"Metal Transição"],
    [105,"Db","Dúbnio",268,0,0,"Metal Transição"],
    [106,"Sg","Seabórgio",269,0,0,"Metal Transição"],
    [107,"Bh","Bóhrio",270,0,0,"Metal Transição"],
    [108,"Hs","Hássio",277,0,0,"Metal Transição"],
    [109,"Mt","Meitnério",278,0,0,"Metal Transição"],
    [110,"Ds","Darmstádio",281,0,0,"Metal Transição"],
    [111,"Rg","Roentgênio",282,0,0,"Metal Transição"],
    [112,"Cn","Copernício",285,0,0,"Metal Transição"],
    [113,"Nh","Nihônio",286,0,0,"Metal Representativo"],
    [114,"Fl","Fleróvio",289,0,0,"Metal Representativo"],
    [115,"Mc","Moscóvio",290,0,0,"Metal Representativo"],
    [116,"Lv","Livermório",293,0,0,"Metal Representativo"],
    [117,"Ts","Tenesso",294,0,0,"Halogênio"],
    [118,"Og","Oganessônio",294,0,0,"Gás Nobre"]
];

const tabelaPeriodica = {};
rawData.forEach(item => {
    tabelaPeriodica[item[0]] = {
        simbolo: item[1],
        nome: item[2],
        massa: item[3],
        raio: item[4],
        eletronegatividade: item[5],
        familia: item[6]
    };
});

// --- MAPA DE BUSCA & ESTILOS DINÂMICOS ---

// Paleta de cores Dupla: 
// "bg" = tom pastel para botões/detalhes leves
// "primary" = cor forte para botões ativos, texto destaque e o Hero Card
const estilosFamilia = {
    "Não-Metal":            { bg: "#dcfce7", primary: "#16a34a" }, // Verde
    "Gás Nobre":            { bg: "#f3e8ff", primary: "#9333ea" }, // Roxo
    "Metal Alcalino":       { bg: "#fee2e2", primary: "#dc2626" }, // Vermelho
    "Alcalino Terroso":     { bg: "#fef3c7", primary: "#d97706" }, // Âmbar (Laranja)
    "Semimetal":            { bg: "#ccfbf1", primary: "#0d9488" }, // Azul Petróleo (Teal)
    "Halogênio":            { bg: "#ecfccb", primary: "#65a30d" }, // Verde Lima
    "Metal Representativo": { bg: "#e2e8f0", primary: "#475569" }, // Cinza Azulado
    "Metal Transição":      { bg: "#dbeafe", primary: "#2563eb" }, // Azul (Padrão)
    "Lantanídeo":           { bg: "#fce7f3", primary: "#db2777" }, // Rosa Forte
    "Actinídeo":            { bg: "#ffe4e6", primary: "#e11d48" }  // Rosa Avermelhado
};

const mapaBusca = {};

function normalizarTexto(txt) {
    return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

Object.keys(tabelaPeriodica).forEach(zStr => {
    const z = parseInt(zStr);
    const el = tabelaPeriodica[z];
    mapaBusca[el.simbolo.toLowerCase()] = z;
    mapaBusca[normalizarTexto(el.nome)] = z;
});

// --- LÓGICA DE DISTRIBUIÇÃO (PAULING) ---
function calcularDistribuicao(z) {
    const ordem = [
        {n:1, t:'s', cap:2}, 
        {n:2, t:'s', cap:2}, {n:2, t:'p', cap:6}, 
        {n:3, t:'s', cap:2}, {n:3, t:'p', cap:6}, 
        {n:4, t:'s', cap:2}, {n:3, t:'d', cap:10}, {n:4, t:'p', cap:6}, 
        {n:5, t:'s', cap:2}, {n:4, t:'d', cap:10}, {n:5, t:'p', cap:6}, 
        {n:6, t:'s', cap:2}, {n:4, t:'f', cap:14}, {n:5, t:'d', cap:10}, {n:6, t:'p', cap:6}, 
        {n:7, t:'s', cap:2}, {n:5, t:'f', cap:14}, {n:6, t:'d', cap:10}, {n:7, t:'p', cap:6}
    ];

    let restante = z;
    let distribuicao = [];
    let camadas = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0};
    let camadasCap = {1:2, 2:8, 3:18, 4:32, 5:32, 6:18, 7:8}; 

    for (let sub of ordem) {
        if (restante <= 0) break;
        let qtd = Math.min(restante, sub.cap);
        distribuicao.push({ label: sub.n + sub.t, n: sub.n, tipo: sub.t, qtd: qtd });
        camadas[sub.n] += qtd;
        restante -= qtd;
    }
    return { distribuicao, camadas, camadasCap };
}

// --- RENDERIZAÇÃO ---

function atualizarDashboard(z) {
    if (!tabelaPeriodica[z]) return;

    const dados = tabelaPeriodica[z];
    const res = calcularDistribuicao(z);

    // 1. INJEÇÃO DE CORES DINÂMICAS
    // Altera as variáveis CSS globais para a cor da família selecionada
    const estilo = estilosFamilia[dados.familia] || { bg: "#ffffff", primary: "#2563eb" };
    document.documentElement.style.setProperty('--primary', estilo.primary);
    document.documentElement.style.setProperty('--primary-light', estilo.bg);

    // UI Updates
    document.getElementById('welcome-msg').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    // Preenchimento de texto
    document.getElementById('el-name').textContent = dados.nome;
    document.getElementById('el-symbol').textContent = dados.simbolo;
    document.getElementById('el-family').textContent = dados.familia;
    document.getElementById('el-z').textContent = z;
    document.getElementById('el-mass').textContent = dados.massa + (dados.massa ? ' u' : '');
    document.getElementById('el-radius').textContent = dados.raio > 0 ? dados.raio + ' pm' : 'N/A';
    document.getElementById('el-electro').textContent = dados.eletronegatividade > 0 ? dados.eletronegatividade : 'N/A';
    
    const configText = res.distribuicao.map(d => `${d.label}<sup>${d.qtd}</sup>`).join(' ');
    document.getElementById('el-config-text').innerHTML = configText;

    // Renderizar Camadas
    const layersDiv = document.getElementById('layers-visual');
    layersDiv.innerHTML = '';
    const nomesCamadas = {1: 'K', 2: 'L', 3: 'M', 4: 'N', 5: 'O', 6: 'P', 7: 'Q'};
    
    for (let n in res.camadas) {
        if (res.camadas[n] > 0) {
            const total = res.camadas[n];
            const max = res.camadasCap[n] || 8; 
            const porcentagem = (total / max) * 100;
            
            const row = document.createElement('div');
            row.className = 'layer-row';
            row.innerHTML = `
                <div class="layer-name">${nomesCamadas[n]}</div>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${porcentagem}%"></div>
                </div>
                <div class="layer-value"><strong>${total}</strong> / ${max} e<sup>-</sup></div>
            `;
            layersDiv.appendChild(row);
        }
    }

    // Renderizar Orbitais (Hund)
    const orbitalsDiv = document.getElementById('orbitals-visual');
    orbitalsDiv.innerHTML = '';

    res.distribuicao.forEach(subnivel => {
        const group = document.createElement('div');
        group.className = 'orbital-group';
        
        const label = document.createElement('div');
        label.className = 'orbital-label';
        label.textContent = subnivel.label; 

        const boxesContainer = document.createElement('div');
        boxesContainer.className = 'boxes-container';

        const numOrbitais = {'s':1, 'p':3, 'd':5, 'f':7}[subnivel.tipo];
        const estados = calcularHund(numOrbitais, subnivel.qtd);

        estados.forEach(estado => {
            const box = document.createElement('div');
            box.className = 'orbital-box';
            if (estado === 1) box.innerHTML = '↑';
            if (estado === 2) box.innerHTML = '⇅';
            boxesContainer.appendChild(box);
        });

        group.appendChild(label);
        group.appendChild(boxesContainer);
        orbitalsDiv.appendChild(group);
    });
    
    // Scroll & Active State
    document.querySelectorAll('.element-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.element-btn[data-z="${z}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function calcularHund(numOrbitais, qtdEletrons) {
    let estados = new Array(numOrbitais).fill(0);
    let restante = qtdEletrons;
    for(let i=0; i<numOrbitais; i++) { if(restante > 0) { estados[i]++; restante--; } }
    for(let i=0; i<numOrbitais; i++) { if(restante > 0) { estados[i]++; restante--; } }
    return estados;
}

function init() {
    const grid = document.getElementById('element-grid');
    for (let i = 1; i <= 118; i++) {
        if (tabelaPeriodica[i]) {
            const el = tabelaPeriodica[i];
            const btn = document.createElement('div');
            btn.className = 'element-btn';
            btn.dataset.z = i;
            
            // Define apenas o fundo (bg) inicialmente para a lista
            const estilo = estilosFamilia[el.familia] || { bg: "#ffffff" };
            btn.style.setProperty('--item-bg', estilo.bg);

            btn.innerHTML = `<strong>${el.simbolo}</strong><span>${i}</span>`;
            btn.onclick = () => atualizarDashboard(i);
            grid.appendChild(btn);
        }
    }

    const input = document.getElementById('search-input');
    const executarBusca = () => {
        const val = normalizarTexto(input.value.trim());
        if (!val) return;
        let z = 0;
        if (!isNaN(val)) z = parseInt(val);
        else if (mapaBusca[val]) z = mapaBusca[val];

        if (z > 0 && z <= 118) atualizarDashboard(z);
        else {
            input.style.borderColor = '#ef4444'; // Vermelho erro
            setTimeout(() => input.style.borderColor = 'var(--border)', 1000);
        }
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') executarBusca();
    });
}

init();
