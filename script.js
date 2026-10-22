const dragons = [
  {name:'Fúria da Noite',example:'Banguela',class:'Ataque',source:'🎬 Filme',film:'Trilogia principal',trait:'Extremamente rápido, inteligente e preciso em voo.',power:'Rajada de plasma',rarity:'Lendário'},
  {name:'Fúria da Luz',example:'Fúria da Luz',class:'Ataque',source:'🎬 Filme',film:'O Mundo Escondido',trait:'Ágil, furtiva e capaz de camuflar-se durante o voo.',power:'Rajada de plasma',rarity:'Raríssimo'},
  {name:'Nadder Mortal',example:'Tempestade',class:'Rastreador',source:'🎬 Filme',film:'Trilogia principal',trait:'Ótimo olfato, manobras rápidas e espinhos defensivos.',power:'Fogo de magnésio',rarity:'Comum'},
  {name:'Pesadelo Monstruoso',example:'Dente-de-Gancho',class:'Ataque',source:'🎬 Filme',film:'Trilogia principal',trait:'Temperamental e poderoso; pode envolver o corpo em chamas.',power:'Fogo intenso',rarity:'Comum'},
  {name:'Gronckle',example:'Batatão',class:'Pedregulho',source:'🎬 Filme',film:'Trilogia principal',trait:'Compacto e resistente; alimenta-se de rochas e minerais.',power:'Lava explosiva',rarity:'Comum'},
  {name:'Zíper Arrepiante',example:'Bafo & Arroto',class:'Mistério',source:'🎬 Filme',film:'Trilogia principal',trait:'Duas cabeças cooperam: uma libera gás, a outra acende.',power:'Explosão de gás',rarity:'Incomum'},
  {name:'Terror Terrível',example:'Vários',class:'Ataque',source:'🎬 Filme',film:'Trilogia principal',trait:'Pequeno, ágil e curioso; costuma andar em grupos.',power:'Pequenas rajadas',rarity:'Comum'},
  {name:'Morte Rubra',example:'Rainha do ninho',class:'Pedregulho',source:'🎬 Filme',film:'Como Treinar o Seu Dragão',trait:'Gigantesca, dominante e capaz de controlar um ninho inteiro.',power:'Fogo massivo',rarity:'Lendário'},
  {name:'Besta Implacável',example:'Alfa de Valka',class:'Maré',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Colossal; congela grandes áreas e influencia outros dragões.',power:'Sopro congelante',rarity:'Lendário'},
  {name:'Corta-Tempestade',example:'Pula-Nuvem',class:'Afiada',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Quatro asas oferecem controle excepcional e força aérea.',power:'Rajada flamejante',rarity:'Raro'},
  {name:'Rumblehorn',example:'Quebra-Crânios',class:'Rastreador',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Excelente rastreador, forte e muito leal.',power:'Chamas concentradas',rarity:'Raro'},
  {name:'Hotburple',example:'Grump',class:'Pedregulho',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Parente do Gronckle, robusto e de temperamento tranquilo.',power:'Lava',rarity:'Incomum'},
  {name:'Scuttleclaw',example:'Filhotes',class:'Rastreador',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Sociável, veloz e frequentemente visto em grupos.',power:'Fogo',rarity:'Incomum'},
  {name:'Hobblegrunt',example:'Diversos',class:'Mistério',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Suas cores mudam conforme o humor e o ambiente.',power:'Fogo',rarity:'Incomum'},
  {name:'Raincutter',example:'Diversos',class:'Afiada',source:'🎬 Filme',film:'Como Treinar o Seu Dragão 2',trait:'Grande envergadura e excelente desempenho em tempestades.',power:'Fogo',rarity:'Raro'},
  {name:'Deathgripper',example:'Caçadores de Grimmel',class:'Ataque',source:'🎬 Filme',film:'O Mundo Escondido',trait:'Predador agressivo, usado por Grimmel para caçar.',power:'Fogo e ferrão',rarity:'Raro'},
  {name:'Crimson Goregutter',example:'Diversos',class:'Pedregulho',source:'🎬 Filme',film:'O Mundo Escondido',trait:'Grande porte, chifres marcantes e força impressionante.',power:'Fogo',rarity:'Raro'},
  {name:'Hobgobbler',example:'Colônia',class:'Mistério',source:'🎬 Filme',film:'O Mundo Escondido',trait:'Pequeno e inquieto; aparece em grande número.',power:'Pequenas chamas',rarity:'Incomum'},
  {name:'Skrill',example:'Skrill',class:'Trovão',source:'📺 Universo expandido',film:'Séries',trait:'Absorve eletricidade de tempestades e dispara descargas.',power:'Relâmpago',rarity:'Lendário'},
  {name:'Morte Sussurrante',example:'Whispering Death',class:'Pedregulho',source:'📺 Universo expandido',film:'Séries',trait:'Escava túneis com enorme velocidade e possui muitos dentes.',power:'Fogo em anel',rarity:'Raro'},
  {name:'Morte Gritante',example:'Screaming Death',class:'Pedregulho',source:'📺 Universo expandido',film:'Séries',trait:'Versão gigantesca e extremamente perigosa da espécie anterior.',power:'Rajadas devastadoras',rarity:'Lendário'},
  {name:'Changewing',example:'Changewing',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Camuflagem quase invisível e ácido corrosivo.',power:'Ácido',rarity:'Raro'},
  {name:'Scauldron',example:'Scauldron',class:'Maré',source:'📺 Universo expandido',film:'Séries',trait:'Dragão marinho que aquece água e a dispara sob pressão.',power:'Água fervente',rarity:'Raro'},
  {name:'Thunderdrum',example:'Thornado',class:'Maré',source:'📺 Universo expandido',film:'Séries',trait:'Produz ondas sonoras muito poderosas.',power:'Explosão sônica',rarity:'Raro'},
  {name:'Speed Stinger',example:'Speed Stinger',class:'Afiada',source:'📺 Universo expandido',film:'Séries',trait:'Corre em altíssima velocidade e caça em bandos.',power:'Ferrão paralisante',rarity:'Raro'},
  {name:'Flightmare',example:'Flightmare',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Brilha após alimentar-se de algas especiais.',power:'Névoa paralisante',rarity:'Raro'},
  {name:'Dramillion',example:'Dramillion',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Imita diferentes tipos de fogo de outras espécies.',power:'Múltiplos fogos',rarity:'Raríssimo'},
  {name:'Triple Stryke',example:'Sleuther',class:'Afiada',source:'📺 Universo expandido',film:'Séries',trait:'Três caudas com ferrões e grande habilidade em combate.',power:'Ferrões',rarity:'Raro'},
  {name:'Razorwhip',example:'Windshear',class:'Afiada',source:'📺 Universo expandido',film:'Séries',trait:'Escamas metálicas e cauda extremamente cortante.',power:'Fogo',rarity:'Raro'},
  {name:'Eruptodon',example:'Eruptodon',class:'Pedregulho',source:'📺 Universo expandido',film:'Séries',trait:'Absorve lava e ajuda a estabilizar atividade vulcânica.',power:'Lava',rarity:'Raríssimo'},
  {name:'Sentinela',example:'Sentinels',class:'Pedregulho',source:'📺 Universo expandido',film:'Séries',trait:'Guardião pétreo com sentidos aguçados apesar da cegueira.',power:'Força e percepção',rarity:'Raro'},
  {name:'Typhoomerang',example:'Torch',class:'Ataque',source:'📺 Universo expandido',film:'Séries',trait:'Gigantesco e capaz de criar anéis de fogo durante o voo.',power:'Anel de fogo',rarity:'Raro'},
  {name:'Smothering Smokebreath',example:'Smokebreath',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Pequeno, coleciona metal e produz nuvens densas de fumaça.',power:'Fumaça',rarity:'Incomum'},
  {name:'Seashocker',example:'Seashocker',class:'Maré',source:'📺 Universo expandido',film:'Séries',trait:'Dragão marinho de duas cabeças com descargas elétricas.',power:'Eletricidade',rarity:'Raro'},
  {name:'Catastrophic Quaken',example:'Quaken',class:'Pedregulho',source:'📺 Universo expandido',film:'Séries',trait:'Enrola o corpo e causa impactos sísmicos.',power:'Onda de impacto',rarity:'Raro'},
  {name:'Boneknapper',example:'Boneknapper',class:'Mistério',source:'📺 Universo expandido',film:'Curta / séries',trait:'Usa ossos como armadura e busca peças para completar sua carapaça.',power:'Fogo',rarity:'Raro'},
  {name:'Timberjack',example:'Timberjack',class:'Afiada',source:'📺 Universo expandido',film:'Livros / séries',trait:'Possui asas enormes e afiadas, capazes de cortar obstáculos durante o voo.',power:'Fogo',rarity:'Raro'},
  {name:'Snaptrapper',example:'Snaptrapper',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Dragão de múltiplas cabeças que usa aroma adocicado para atrair presas.',power:'Fogo',rarity:'Raro'},
  {name:'Death Song',example:'Garf',class:'Mistério',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Atrai outros dragões com um canto hipnótico e lança substância âmbar pegajosa.',power:'Âmbar',rarity:'Raríssimo'},
  {name:'Buffalord',example:'Buffalord',class:'Mistério',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Pacífico e territorial, famoso por sua resistência e comportamento incomum.',power:'Sopro defensivo',rarity:'Raríssimo'},
  {name:'Cavern Crasher',example:'Cavern Crasher',class:'Pedregulho',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Escava e invade cavernas, alimentando-se de reservas de outros dragões.',power:'Gás inflamável',rarity:'Raro'},
  {name:'Armorwing',example:'Armorwing',class:'Mistério',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Reveste o corpo com peças de metal e usa calor para fundi-las à armadura.',power:'Fogo',rarity:'Raro'},
  {name:'Snow Wraith',example:'Snow Wraith',class:'Ataque',source:'📺 Universo expandido',film:'Séries',trait:'Adaptado ao gelo, é furtivo e possui excelente percepção térmica.',power:'Fogo gelado',rarity:'Raro'},
  {name:'Sand Wraith',example:'Sand Wraith',class:'Ataque',source:'📺 Universo expandido',film:'Séries',trait:'Camufla-se em areia e ataca com enorme velocidade.',power:'Rajada de fogo',rarity:'Raro'},
  {name:'Singetail',example:'Singetail',class:'Ataque',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Consegue disparar fogo em várias direções e possui grande resistência.',power:'Fogo multidirecional',rarity:'Raro'},
  {name:'Shellfire',example:'Shellfire',class:'Maré',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Dragão marinho gigantesco com ataques de longo alcance.',power:'Projéteis flamejantes',rarity:'Lendário'},
  {name:'Submaripper',example:'Submaripper',class:'Maré',source:'📺 Universo expandido',film:'Séries',trait:'Enorme predador marinho que cria redemoinhos e emboscadas submarinas.',power:'Força oceânica',rarity:'Lendário'},
  {name:'Shockjaw',example:'Shockjaw',class:'Maré',source:'📺 Universo expandido',film:'Séries',trait:'Dragão aquático veloz que produz descargas elétricas.',power:'Eletricidade',rarity:'Raro'},
  {name:'Slitherwing',example:'Slitherwing',class:'Mistério',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Serpentino, venenoso e normalmente encontrado em grupos.',power:'Veneno',rarity:'Raro'},
  {name:'Fireworm Queen',example:'Rainha Fireworm',class:'Ataque',source:'📺 Universo expandido',film:'Séries',trait:'Rainha de uma colônia de Fireworms e capaz de produzir calor extremo.',power:'Calor intenso',rarity:'Raro'},
  {name:'Fireworm',example:'Fireworm',class:'Ataque',source:'📺 Universo expandido',film:'Séries',trait:'Pequeno dragão luminoso que vive em colônias e pode incendiar objetos ao toque.',power:'Calor corporal',rarity:'Comum'},
  {name:'Night Terror',example:'Smidvarg e colônias',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Pequenos dragões que voam em formação, criando silhuetas maiores para defesa.',power:'Fogo em grupo',rarity:'Incomum'},
  {name:'Sandbuster',example:'Sandbuster',class:'Mistério',source:'📺 Universo expandido',film:'Corrida até o Limite',trait:'Habita cavernas arenosas e protege seu território com ataques rápidos.',power:'Fogo',rarity:'Raro'},
  {name:'Windstriker',example:'Windstriker',class:'Afiada',source:'📺 Universo expandido',film:'Séries',trait:'Dragão ágil de grande envergadura, adaptado a correntes de vento.',power:'Fogo',rarity:'Raro'},
  {name:'Hackatoo',example:'Hackatoo',class:'Afiada',source:'📺 Universo expandido',film:'Séries',trait:'Possui bico e estruturas cortantes, sendo extremamente ágil em ataques rasantes.',power:'Fogo',rarity:'Incomum'},
  {name:'Moldruffle',example:'Moldruffle',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Espécie de porte médio conhecida por comportamento defensivo e aparência incomum.',power:'Fogo',rarity:'Incomum'},
  {name:'Grapple Grounder',example:'Grapple Grounder',class:'Mistério',source:'📺 Universo expandido',film:'Séries',trait:'Usa corpo e cauda para agarrar superfícies e oponentes.',power:'Fogo',rarity:'Raro'}
];

const trainers = [
 {name:'Soluço Haddock',pair:'Banguela • Fúria da Noite',role:'Cavaleiro, inventor e líder',text:'Lidera pelo conhecimento, observação e confiança entre humanos e dragões.'},
 {name:'Astrid Hofferson',pair:'Tempestade • Nadder Mortal',role:'Guerreira e estrategista',text:'Disciplinada, rápida e uma das cavaleiras mais habilidosas de Berk.'},
 {name:'Perna-de-Peixe Ingerman',pair:'Batatão • Gronckle',role:'Especialista em espécies',text:'Conhece detalhes de comportamento, classe e características de inúmeros dragões.'},
 {name:'Melequento Jorgenson',pair:'Dente-de-Gancho • Pesadelo',role:'Cavaleiro de ataque',text:'Impulsivo e competitivo, mas desenvolve forte parceria com seu dragão.'},
 {name:'Cabeçaquente Thorston',pair:'Bafo & Arroto • Zíper Arrepiante',role:'Cavaleira',text:'Criativa, ousada e imprevisível; trabalha em dupla com o irmão.'},
 {name:'Cabeçadura Thorston',pair:'Bafo & Arroto • Zíper Arrepiante',role:'Cavaleiro',text:'Excêntrico e destemido, completa a dupla mais caótica da academia.'},
 {name:'Valka Haddock',pair:'Pula-Nuvem • Corta-Tempestade',role:'Protetora de dragões',text:'Passou anos observando dragões e compreende profundamente seus hábitos.'},
 {name:'Bocão Bonarroto',pair:'Grump • Hotburple',role:'Ferreiro e mentor',text:'Constrói equipamentos e ajuda a preparar cavaleiros e montarias.'},
 {name:'Stoico, o Imenso',pair:'Quebra-Crânios • Rumblehorn',role:'Chefe de Berk',text:'Representa a transição de Berk de caçadores para aliados dos dragões.'},
 {name:'Eret, Filho de Eret',pair:'Aliado dos cavaleiros',role:'Explorador e aliado',text:'Antigo caçador que passa a colaborar com os cavaleiros de Berk.'},
 {name:'Heather',pair:'Windshear • Razorwhip',role:'Cavaleira aliada',text:'Habilidosa, independente e importante aliada dos Cavaleiros de Dragão.'},
 {name:'Dagur, o Descontrolado',pair:'Sleuther • Triple Stryke',role:'Chefe e cavaleiro aliado',text:'Começa como rival e se torna um aliado importante na defesa dos dragões.'},
 {name:'Gustav Larson',pair:'Fanghook • Pesadelo Monstruoso',role:'Aprendiz de cavaleiro',text:'Jovem admirador dos cavaleiros que busca provar sua habilidade como treinador.'},
 {name:'Mala',pair:'Protetora dos dragões',role:'Rainha e aliada',text:'Lidera os Defensores da Asa e constrói uma forte aliança com os cavaleiros.'},
 {name:'Throk',pair:'Defensor da Asa',role:'Guerreiro aliado',text:'Guerreiro leal e protetor, participa de missões ao lado dos cavaleiros.'},
 {name:'Atali',pair:'Aliada dos dragões',role:'Exploradora',text:'Representa outros aliados e comunidades que convivem com dragões no universo da academia.'}
];

const q = [
 {q:'Qual espécie é conhecida por extrema velocidade e rajadas de plasma?',a:['Gronckle','Fúria da Noite','Nadder Mortal','Hotburple'],c:1},
 {q:'Qual treinadora voa com Tempestade?',a:['Astrid','Valka','Cabeçaquente','Perna-de-Peixe'],c:0},
 {q:'Qual classe combina com dragões ligados ao mar?',a:['Afiada','Ataque','Maré','Pedregulho'],c:2},
 {q:'Qual dragão possui quatro asas?',a:['Corta-Tempestade','Deathgripper','Skrill','Razorwhip'],c:0},
 {q:'Quem é conhecido por estudar espécies em detalhes?',a:['Melequento','Perna-de-Peixe','Eret','Stoico'],c:1}
];

const $ = s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const slugify = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const imgFallback = (el,label)=>{el.style.display='none'; const box=el.nextElementSibling; if(box){box.style.display='grid'; box.querySelector('span').textContent=label;}};
function route(){const id=location.hash.slice(1)||'home';$$('.page').forEach(x=>x.classList.toggle('active',x.id===id));$$('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));$('#nav').classList.remove('open');window.scrollTo({top:0});}
addEventListener('hashchange',route);route();
$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');
$('#dragonCount').textContent=dragons.length;
$('#trainerCount').textContent=trainers.length;

function renderDragons(list=dragons){$('#dragonGrid').innerHTML=list.map((d,i)=>{const file=`assets/dragoes/${slugify(d.name)}.jpg`;return `<article class="dragon-card" data-name="${d.name}"><div class="dragon-image"><img src="${file}" alt="Imagem de ${d.name}" onerror="imgFallback(this,'Adicione: ${file}')"><div class="image-placeholder"><b>🐉</b><span>Adicione: ${file}</span></div></div><div class="dragon-body"><div class="top"><span class="badge">${d.class}</span><span>${d.source}</span></div><h3>${d.name}</h3><p>${d.example!=='Diversos'&&d.example!=='Vários'?`Exemplo: ${d.example}. `:''}${d.trait}</p><footer><span>${d.film}</span><span>${d.rarity}</span></footer></div></article>`}).join('')||'<p>Nenhum dragão encontrado.</p>';$$('.dragon-card').forEach(c=>c.onclick=()=>openDragon(c.dataset.name));}
renderDragons();
function filterDragons(){const term=$('#dragonSearch').value.toLowerCase();const cl=$('#classFilter').value;renderDragons(dragons.filter(d=>(cl==='todos'||d.class===cl)&&(`${d.name} ${d.example} ${d.trait}`).toLowerCase().includes(term)));}
$('#dragonSearch').oninput=filterDragons;$('#classFilter').onchange=filterDragons;
function openDragon(name){const d=dragons.find(x=>x.name===name);const file=`assets/dragoes/${slugify(d.name)}.jpg`;$('#modalContent').innerHTML=`<div class="modal-content"><div class="modal-image"><img src="${file}" alt="${d.name}" onerror="imgFallback(this,'Adicione: ${file}')"><div class="image-placeholder"><b>🐉</b><span>Adicione: ${file}</span></div></div><span class="eyebrow">${d.source} • ${d.class}</span><h2>${d.name}</h2><p>${d.trait}</p><div class="modal-table"><div><small>EXEMPLO</small><b>${d.example}</b></div><div><small>APARIÇÃO</small><b>${d.film}</b></div><div><small>HABILIDADE</small><b>${d.power}</b></div><div><small>RARIDADE</small><b>${d.rarity}</b></div></div></div>`;$('#dragonModal').showModal();}
$('#modalClose').onclick=()=>$('#dragonModal').close();
$('#randomDragonBtn').onclick=()=>{const d=dragons[Math.floor(Math.random()*dragons.length)];location.hash='dragoes';setTimeout(()=>openDragon(d.name),180)};

$('#trainerGrid').innerHTML=trainers.map(t=>{const file=`assets/treinadores/${slugify(t.name)}.jpg`;return `<article class="trainer glass"><div class="trainer-image"><img src="${file}" alt="Imagem de ${t.name}" onerror="imgFallback(this,'Adicione: ${file}')"><div class="image-placeholder"><b>🛡️</b><span>Adicione: ${file}</span></div></div><div class="trainer-body"><span class="pair">${t.pair}</span><h3>${t.name}</h3><b>${t.role}</b><p>${t.text}</p></div></article>`}).join('');

const places={
 'Grande Salão':'Centro político e social de Berk, usado para reuniões e decisões importantes.',
 'Arena de Treinamento':'Área clássica de prática onde novos cavaleiros aprendem a observar e lidar com dragões.',
 'Forja do Bocão':'Oficina de equipamentos, selas, peças e invenções para cavaleiros.',
 'Penhasco de Voo':'Ponto alto usado para decolagens, observação do clima e treinos aéreos.',
 'Porto de Berk':'Entrada marítima da ilha e área de chegada de barcos e exploradores.',
 'Bosque de Treino':'Área mais tranquila para exercícios de confiança e comandos.',
 'Academia de Dragões':'Centro de estudos, treinamento e integração entre cavaleiros e dragões.'
};
$$('.pin').forEach(p=>p.onclick=()=>{$('#placePanel').innerHTML=`<span class="eyebrow">LOCAL SELECIONADO</span><h3>${p.dataset.place}</h3><p>${places[p.dataset.place]}</p>`});

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
$('#updateCard').onclick=()=>{const vals=[$('#studentName').value,$('#studentCourse').value,$('#studentReg').value];const bs=$$('.id-data b');bs[0].textContent=vals[0];bs[1].textContent=vals[1];bs[3].textContent=vals[2];toast('Carteirinha atualizada!');};
$('#printCard').onclick=()=>window.print();

let qi=0,answers=[];
function renderQuiz(){const item=q[qi];$('#quizCard').innerHTML=`<span class="eyebrow">PERGUNTA ${qi+1} DE ${q.length}</span><h3>${item.q}</h3><div>${item.a.map((a,i)=>`<button class="option ${answers[qi]===i?'selected':''}" data-i="${i}">${a}</button>`).join('')}</div><div class="quiz-nav"><span class="quiz-progress">${'●'.repeat(qi+1)}${'○'.repeat(q.length-qi-1)}</span><button class="btn primary" id="nextQ">${qi===q.length-1?'Ver resultado':'Próxima'}</button></div>`;$$('.option').forEach(o=>o.onclick=()=>{answers[qi]=+o.dataset.i;renderQuiz()});$('#nextQ').onclick=()=>{if(answers[qi]===undefined)return toast('Escolha uma resposta.'); if(qi<q.length-1){qi++;renderQuiz()}else showResult()};}
function showResult(){const score=q.reduce((s,x,i)=>s+(answers[i]===x.c),0);const ranks=['Recruta Viking','Aprendiz de Cavaleiro','Cavaleiro de Berk','Mestre de Dragões','Lenda de Berk'];const idx=Math.min(4,Math.max(0,score-1));$('#quizCard').innerHTML=`<div class="result"><div class="medal">${score>=4?'🏆':'🛡️'}</div><span class="eyebrow">RESULTADO</span><h3>${ranks[idx]}</h3><p>Você acertou <b>${score}</b> de <b>${q.length}</b> perguntas.</p><button class="btn primary" id="restart">Refazer quiz</button></div>`;$('#restart').onclick=()=>{qi=0;answers=[];renderQuiz()}}
renderQuiz();
