// ==========================================
// PROTOCOLO PARANORMAL - SISTEMA DE VIGÍLIA
// ==========================================

// Mensagens no console para quem ousar inspecionar
console.log("%cProtocolo Paranormal", "color: red; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 0px black; font-family: 'Courier New', monospace;");
console.log("%cAviso: Você não deveria estar inspecionando o código. Eles podem estar observando.", "color: #ffcc00; font-size: 14px; font-family: monospace;");
console.log("%cVocê foi registrado como Afetado. Boa sorte.", "color: #ff3333; font-size: 14px; font-family: monospace; font-style: italic;");

// ==========================================
// SISTEMA DE MUDANÇA DO TÍTULO DA ABA
// ==========================================

const tituloOriginal = document.title;

// Frases bizarras que vão aparecer na aba
const frasesBizarras = [
    "Ele está atrás de você...",
    "Não olhe para trás.",
    "Você ouviu isso?",
    "Está te observando.",
    "O Medo é uma via de mão dupla.",
    "Protocolo Paranormal // ERRO 404: Realidade não encontrada",
    "Saia deste site.",
    "Afetado detectado.",
    "Eu sei onde você está.",
    "A Criatura se manifesta sem motivo.",
    "Não responda se algo chamar pelo seu nome.",
    "Por que você continua lendo?",
    "Você já foi escolhido.",
    "Olhe pela janela.",
    "Não durma esta noite.",
    "Você não está só.",
    "O sorriso não é seu.",
    "Cicatrizes paranormais detectadas.",
    "Estaremos dentro de você."
];

let indexFrase = 0;

// Função que troca o título aleatoriamente
function iniciarVigiliaTitulo() {
    setInterval(() => {
        // Só muda o título se a aba estiver visível (o evento visibilitychange cuida do resto)
        if (!document.hidden) {
            // 60% de chance de mostrar uma frase bizarra, 40% de chance de voltar ao título normal
            if (Math.random() < 0.6) {
                document.title = frasesBizarras[indexFrase];
                indexFrase = (indexFrase + 1) % frasesBizarras.length;
            } else {
                document.title = tituloOriginal;
            }
        }
    }, 5000); // Muda a cada 5 segundos
}

// ==========================================
// EFEITO DE VISIBILIDADE (QUANDO O USUÁRIO MUDA DE ABA)
// ==========================================

const frasesAusencia = [
    "Onde você foi?",
    "Volte. Nós não terminamos.",
    "Você achou que eu não ia notar?",
    "Eu estou esperando.",
    "Não desligue.",
    "Eles viram você sair.",
    "Está ficando escuro aqui.",
    "Você deixou a porta aberta."
];

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // Quando o usuário sai da aba
        const fraseAleatoria = frasesAusencia[Math.floor(Math.random() * frasesAusencia.length)];
        document.title = fraseAleatoria;
    } else {
        // Quando o usuário volta, espera 2 segundos antes de restaurar o título normal
        setTimeout(() => {
            document.title = tituloOriginal;
        }, 2000);
    }
});

// ==========================================
// EFEITO DE "ALGO ESTÁ OBSERVANDO" NO MOUSE (OPCIONAL)
// ==========================================

// Se o usuário ficar parado por muito tempo, o título muda para algo sinistro
let timerInatividade;
document.addEventListener("mousemove", () => {
    clearTimeout(timerInatividade);
    timerInatividade = setTimeout(() => {
        if (!document.hidden) {
            document.title = "Você parou de se mexer...";
        }
    }, 30000); // 30 segundos sem mexer o mouse
});

// ==========================================
// INICIALIZAÇÃO
// ==========================================
iniciarVigiliaTitulo();