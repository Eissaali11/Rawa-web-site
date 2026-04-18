// ═══ DATA ═══
const DB={
  projects:[
    {id:1,name:{ar:"مشروع سلسلة التوزيع الوطنية",en:"National Distribution Chain"},desc:{ar:"إدارة شاملة لسلسلة التوزيع.",en:"Comprehensive distribution chain management."},client:"شركة التجزئة الوطنية",duration:{ar:"8 أشهر",en:"8 months"},status:"completed",icon:"<i class='fa-solid fa-store'></i>",img:""},
    {id:2,name:{ar:"المستودع الذكي - الرياض",en:"Smart Warehouse - Riyadh"},desc:{ar:"مستودع ذكي بأنظمة تتبع متقدمة.",en:"Smart warehouse with advanced tracking systems."},client:"مجموعة الأعمال الخليجية",duration:{ar:"12 شهر",en:"12 months"},status:"ongoing",icon:"<i class='fa-solid fa-rocket'></i>",img:""},
    {id:3,name:{ar:"التوصيل السريع للتجارة الإلكترونية",en:"E-commerce Fast Delivery"},desc:{ar:"شراكة لتوصيل 5000 طلب يومياً.",en:"Partnership delivering 5000 orders daily."},client:"منصة رائدة",duration:{ar:"6 أشهر",en:"6 months"},status:"completed",icon:"<i class='fa-solid fa-mobile-screen'></i>",img:""},
    {id:4,name:{ar:"لوجستيات القطاع الصحي",en:"Healthcare Logistics"},desc:{ar:"خدمات لوجستية للمستشفيات.",en:"Logistics services for hospitals."},client:"مجموعة المستشفيات",duration:{ar:"18 شهر",en:"18 months"},status:"ongoing",icon:"<i class='fa-solid fa-hospital'></i>",img:""}
  ],
  news:[
    {id:1,title:{ar:"رعاية تُطلق أسطول توصيل كهربائي",en:"Riaya Launches Electric Delivery Fleet"},excerpt:{ar:"في إطار التزامنا بالاستدامة ورؤية 2030...",en:"As part of our commitment to sustainability and Vision 2030..."},cat:{ar:"إعلان",en:"Announcement"},date:"2026-04-15",icon:"<i class='fa-solid fa-bullhorn'></i>",img:""},
    {id:2,title:{ar:"شراكة استراتيجية مع كبرى شركات الخليج",en:"Strategic Partnership with Gulf Majors"},excerpt:{ar:"أبرمت رعاية اتفاقية شراكة استراتيجية...",en:"Riaya signed a strategic partnership agreement..."},cat:{ar:"شراكة",en:"Partnership"},date:"2026-03-01",icon:"<i class='fa-solid fa-handshake'></i>",img:""},
    {id:3,title:{ar:"رعاية تفوز بجائزة أفضل شركة لوجستية",en:"Riaya Wins Best Logistics Company Award"},excerpt:{ar:"تشرفت رعاية بالفوز بجائزة أفضل شركة...",en:"Riaya was honored with the Best Logistics Company award..."},cat:{ar:"جائزة",en:"Award"},date:"2026-02-10",icon:"<i class='fa-solid fa-trophy'></i>",img:""}
  ],
  team:[
    {id:1,name:{ar:"أحمد العلي",en:"Ahmed Al-Ali"},role:{ar:"المدير التنفيذي",en:"CEO"},bio:{ar:"خبرة أكثر من 15 عاماً في اللوجستيات.",en:"15+ years of logistics expertise."},icon:"<i class='fa-solid fa-user-tie'></i>",img:""},
    {id:2,name:{ar:"سارة المنصور",en:"Sara Al-Mansour"},role:{ar:"مديرة العمليات",en:"Operations Director"},bio:{ar:"متخصصة في تحسين سلاسل الإمداد.",en:"Supply chain optimization specialist."},icon:"<i class='fa-solid fa-user-gear'></i>",img:""},
    {id:3,name:{ar:"خالد الشمري",en:"Khalid Al-Shammari"},role:{ar:"مدير تقنية المعلومات",en:"IT Manager"},bio:{ar:"خبير في أنظمة التتبع والإدارة.",en:"Expert in tracking and management systems."},icon:"<i class='fa-solid fa-laptop-code'></i>",img:""},
    {id:4,name:{ar:"نورة القحطاني",en:"Noura Al-Qahtani"},role:{ar:"مديرة الموارد البشرية",en:"HR Manager"},bio:{ar:"متخصصة في إدارة القوى العاملة.",en:"Workforce management specialist."},icon:"<i class='fa-solid fa-user-shield'></i>",img:""}
  ],
  jobs:[
    {id:1,title:{ar:"مشرف مستودعات",en:"Warehouse Supervisor"},dept:{ar:"العمليات",en:"Operations"},loc:{ar:"الرياض",en:"Riyadh"},type:{ar:"دوام كامل",en:"Full-time"},icon:"<i class='fa-solid fa-warehouse'></i>"},
    {id:2,title:{ar:"سائق توصيل",en:"Delivery Driver"},dept:{ar:"التوصيل",en:"Delivery"},loc:{ar:"جدة",en:"Jeddah"},type:{ar:"دوام كامل",en:"Full-time"},icon:"<i class='fa-solid fa-truck-fast'></i>"},
    {id:3,title:{ar:"منسق لوجستي",en:"Logistics Coordinator"},dept:{ar:"اللوجستيات",en:"Logistics"},loc:{ar:"الرياض",en:"Riyadh"},type:{ar:"دوام كامل",en:"Full-time"},icon:"<i class='fa-solid fa-clipboard-list'></i>"},
    {id:4,title:{ar:"مسؤول موارد بشرية",en:"HR Officer"},dept:{ar:"الموارد البشرية",en:"HR"},loc:{ar:"الرياض",en:"Riyadh"},type:{ar:"دوام كامل",en:"Full-time"},icon:"<i class='fa-solid fa-users'></i>"}
  ],
  gallery:[
    {id:1,title:{ar:"مستودع الرياض",en:"Riyadh Warehouse"},cat:"warehouse",icon:"<i class='fa-solid fa-warehouse'></i>",img:""},
    {id:2,title:{ar:"أسطول التوصيل",en:"Delivery Fleet"},cat:"delivery",icon:"<i class='fa-solid fa-truck-fast'></i>",img:""},
    {id:3,title:{ar:"فريق العمل",en:"Our Team"},cat:"team",icon:"<i class='fa-solid fa-users'></i>",img:""},
    {id:4,title:{ar:"مركز الفرز",en:"Sorting Center"},cat:"warehouse",icon:"<i class='fa-solid fa-boxes-stacked'></i>",img:""},
    {id:5,title:{ar:"عمليات التوصيل",en:"Delivery Operations"},cat:"delivery",icon:"<i class='fa-solid fa-motorcycle'></i>",img:""},
    {id:6,title:{ar:"اجتماع الفريق",en:"Team Meeting"},cat:"team",icon:"<i class='fa-solid fa-handshake'></i>",img:""}
  ],
  partners:[
    {id:1,name:{ar:"مجموعة الخليج",en:"Gulf Group"},type:{ar:"شريك لوجستي",en:"Logistics Partner"},icon:"<i class='fa-solid fa-building'></i>"},
    {id:2,name:{ar:"الصناعات الوطنية",en:"National Industries"},type:{ar:"شريك تشغيلي",en:"Operational Partner"},icon:"<i class='fa-solid fa-industry'></i>"},
    {id:3,name:{ar:"منصة التجارة",en:"Commerce Platform"},type:{ar:"شريك توصيل",en:"Delivery Partner"},icon:"<i class='fa-solid fa-cart-shopping'></i>"},
    {id:4,name:{ar:"القطاع الصحي",en:"Healthcare Sector"},type:{ar:"شريك استراتيجي",en:"Strategic Partner"},icon:"<i class='fa-solid fa-hospital'></i>"},
    {id:5,name:{ar:"التطوير والبناء",en:"Development & Build"},type:{ar:"شريك عمليات",en:"Operations Partner"},icon:"<i class='fa-solid fa-helmet-safety'></i>"}
  ],
  services:[
    {id:1,name:{ar:"النقل واللوجستيات",en:"Transportation & Logistics"},desc:{ar:"نقل موثوق وسريع بين مدن المملكة مع تتبع لحظي.",en:"Reliable and fast transportation across the Kingdom with real-time tracking."},icon:"<i class='fa-solid fa-truck'></i>"},
    {id:2,name:{ar:"إدارة المستودعات",en:"Warehouse Management"},desc:{ar:"حلول تخزين متقدمة وإدارة مخزون فعالة.",en:"Advanced storage solutions and efficient inventory management."},icon:"<i class='fa-solid fa-warehouse'></i>"},
    {id:3,name:{ar:"التوصيل للمرحلة الأخيرة",en:"Last-Mile Delivery"},desc:{ar:"خدمة توصيل سريعة وفعالة لجميع المناطق.",en:"Fast and efficient delivery service to all regions."},icon:"<i class='fa-solid fa-boxes-stacked'></i>"},
    {id:4,name:{ar:"إدارة القوى العاملة",en:"Workforce Management"},desc:{ar:"توفير كوادر احترافية مؤهلة بعناية.",en:"Providing carefully qualified professional workforce."},icon:"<i class='fa-solid fa-users-gear'></i>"},
    {id:5,name:{ar:"المرونة التشغيلية",en:"Operational Flexibility"},desc:{ar:"نماذج عمل مرنة تتكيف مع احتياجات عملك.",en:"Flexible work models that adapt to your changing business needs."},icon:"<i class='fa-solid fa-arrows-rotate'></i>"},
    {id:6,name:{ar:"التقارير والتحليلات",en:"Reports & Analytics"},desc:{ar:"تقارير دورية وتحسين مستمر للعمليات.",en:"Periodic reports and continuous process improvement."},icon:"<i class='fa-solid fa-chart-column'></i>"}
  ],
  testimonials:[
    {id:1,name:{ar:"محمد العتيبي",en:"Mohammed Al-Otaibi"},position:{ar:"مدير العمليات - شركة تصنيع",en:"Operations Director - Manufacturing Co."},text:{ar:"ساهمت رعاية في تحسين سلسلة الإمداد لدينا بشكل كبير، مما أدى إلى توفير التكاليف وزيادة الإنتاجية.",en:"Riaya significantly improved our supply chain, resulting in cost savings and increased productivity."},stars:5,icon:"<i class='fa-solid fa-user-tie'></i>",img:""},
    {id:2,name:{ar:"فهد الشمري",en:"Fahad Al-Shammari"},position:{ar:"الرئيس التنفيذي - شركة توزيع",en:"CEO - Distribution Company"},text:{ar:"فريق احترافي وحلول فعالة في الوقت المناسب. نقدر التزامهم بالجودة والسلامة في كل عملية.",en:"Professional team with timely solutions. We appreciate their commitment to quality and safety in every operation."},stars:5,icon:"<i class='fa-solid fa-user-tie'></i>",img:""}
  ],
  contactInfo:{phone:"+966558619232",whatsapp:"+966558619232",email:"info@raya1.site",website:"raya1.site",locationAr:"الرياض، المملكة العربية السعودية",locationEn:"Riyadh, Saudi Arabia"},
  socialMedia:[
    {id:1,platform:"twitter",url:"#",icon:"𝕏",label:"Twitter / X"},
    {id:2,platform:"linkedin",url:"#",icon:"in",label:"LinkedIn"},
    {id:3,platform:"instagram",url:"#",icon:"<i class='fa-brands fa-instagram'></i>",label:"Instagram"}
  ],
  nid:20
};

// ═══ LANG / THEME ═══
let lang = localStorage.getItem('riaya-lang') || 'ar';
let theme = localStorage.getItem('riaya-theme') || 'dark';
function applyLang(){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('dir', lang==='ar'?'rtl':'ltr');
  document.getElementById('lang-btn').textContent = lang==='ar'?'EN':'عر';
}
function applyTheme(){
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-btn').textContent = '';
  document.getElementById('theme-btn').innerHTML = theme==='dark'?"<i class='fa-solid fa-moon'></i>":"<i class='fa-solid fa-sun'></i>";
}
function toggleLang(){
  lang = lang==='ar'?'en':'ar';
  localStorage.setItem('riaya-lang', lang);
  applyLang();
  renderAll();
}
function toggleTheme(){
  theme = theme==='dark'?'light':'dark';
  localStorage.setItem('riaya-theme', theme);
  applyTheme();
}
function t(obj){ return typeof obj==='object'?(obj[lang]||obj.ar||''):obj; }

// ═══ VIEWS ═══
const isDash = location.pathname.includes('dashboard');
function goView(n){
  if(n==='dashboard' && !isDash){ location.href='dashboard.html'; return; }
  if(n==='website' && isDash){ location.href='index.html'; return; }
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const el=document.getElementById(n+'-view');
  if(el){el.classList.add('active');}
  else{document.getElementById('notfound-view').classList.add('active');}
  window.scrollTo(0,0);
  if(n==='dashboard'){renderAll();setTimeout(animProgs,500);}
}
function goSec(sel){
  if(isDash){ location.href='index.html'+sel; return; }
  goView('website');
  setTimeout(()=>{const el=document.querySelector(sel);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},130);
}
function toggleMenu(){document.getElementById('mob-nav').classList.toggle('open');}

// ═══ PANELS ═══
function showP(n,el){
  document.querySelectorAll('.dp').forEach(p=>p.classList.remove('act'));
  document.querySelectorAll('.sb-it').forEach(i=>i.classList.remove('act'));
  document.getElementById('panel-'+n).classList.add('act');
  if(el)el.classList.add('act');
  renderAll();if(n==='overview')setTimeout(animProgs,400);
}

// ═══ RENDER ═══
function renderAll(){
  renderPrjList();renderPrjWeb();
  renderNewsList();renderNewsWeb();
  renderTeamList();renderTeamWeb();
  renderJobsList();renderJobsWeb();
  renderGalList();renderGalWeb();
  renderPtnList();renderPtnWeb();
  renderSvcList();renderSvcWeb();
  renderTestList();renderTestWeb();
  renderContactPanel();renderContactWeb();
  renderSocialList();renderSocialWeb();
  initRv();
}

function renderPrjList(filter='all'){
  const el=document.getElementById('prj-list');if(!el)return;
  const items=filter==='all'?DB.projects:DB.projects.filter(p=>p.status===filter);
  el.innerHTML=items.map(p=>`<div class="ir"><div class="ir-l"><div class="ithumb">${p.img?`<img src="${p.img}">`:`${p.icon}`}</div><div><div class="itit">${t(p.name)}</div><div class="imeta">${p.client} · ${t(p.duration)} · <span class="bdg ${p.status==='completed'?'bdg-g':'bdg-o'}">${p.status==='completed'?'✓':'●'}</span></div></div></div><div class="ia"><button class="ib" onclick="editPrj(${p.id})">✏️</button><button class="ib d" onclick="delItem('projects',${p.id})">🗑️</button></div></div>`).join('');
}
function renderPrjWeb(){
  const el=document.getElementById('prj-display');if(!el)return;
  el.innerHTML=DB.projects.map((p,i)=>`<div class="prj-card rv d${(i%4)+1}"><div class="prj-img">${p.img?`<img src="${p.img}"><div class="prj-ov"></div>`:`${p.icon}`}<div class="prj-status ${p.status==='completed'?'st-done':'st-go'}">${p.status==='completed'?'✓ '+( lang==='ar'?'مكتمل':'Done'):'● '+(lang==='ar'?'جاري':'Ongoing')}</div></div><div class="prj-body"><h3>${t(p.name)}</h3><p>${t(p.desc)}</p><div class="prj-meta"><div class="pm">${lang==='ar'?'العميل':'Client'}: <span>${p.client}</span></div><div class="pm">${lang==='ar'?'المدة':'Duration'}: <span>${t(p.duration)}</span></div></div></div></div>`).join('');
}
function renderNewsList(){
  const el=document.getElementById('news-list');if(!el)return;
  el.innerHTML=DB.news.map(n=>`<div class="ir"><div class="ir-l"><div class="ithumb">${n.img?`<img src="${n.img}">`:`${n.icon}`}</div><div><div class="itit">${t(n.title)}</div><div class="imeta">${n.date} · <span class="bdg bdg-o">${t(n.cat)}</span></div></div></div><div class="ia"><button class="ib" onclick="editNews(${n.id})">✏️</button><button class="ib d" onclick="delItem('news',${n.id})">🗑️</button></div></div>`).join('');
}
function renderNewsWeb(){
  const el=document.getElementById('news-display');if(!el)return;
  el.innerHTML=DB.news.map((n,i)=>`<div class="news-card rv d${(i%3)+1}"><div class="news-img">${n.img?`<img src="${n.img}"><div class="news-ov"></div>`:`${n.icon}`}<span class="news-cat">${t(n.cat)}</span></div><div class="news-body"><div class="news-date">${n.date}</div><div class="news-tit">${t(n.title)}</div><div class="news-exc">${t(n.excerpt)}</div></div></div>`).join('');
}
function renderTeamList(){
  const el=document.getElementById('team-list');if(!el)return;
  el.innerHTML=DB.team.map(m=>`<div class="ir"><div class="ir-l"><div class="ithumb">${m.img?`<img src="${m.img}">`:`${m.icon}`}</div><div><div class="itit">${t(m.name)}</div><div class="imeta">${t(m.role)}</div></div></div><div class="ia"><button class="ib" onclick="editTeam(${m.id})">✏️</button><button class="ib d" onclick="delItem('team',${m.id})">🗑️</button></div></div>`).join('');
}
function renderTeamWeb(){
  const el=document.getElementById('team-display');if(!el)return;
  el.innerHTML=DB.team.map((m,i)=>`<div class="team-card rv d${(i%4)+1}"><div class="team-avatar">${m.img?`<img src="${m.img}">`:`${m.icon}`}</div><div class="team-name">${t(m.name)}</div><div class="team-role">${t(m.role)}</div><div class="team-bio">${t(m.bio)}</div></div>`).join('');
}
function renderJobsList(){
  const el=document.getElementById('jobs-list');if(!el)return;
  el.innerHTML=DB.jobs.map(j=>`<div class="ir"><div class="ir-l"><div class="ithumb">${j.icon}</div><div><div class="itit">${t(j.title)}</div><div class="imeta">${t(j.dept)} · ${t(j.loc)} · ${t(j.type)}</div></div></div><div class="ia"><button class="ib" onclick="editJob(${j.id})">✏️</button><button class="ib d" onclick="delItem('jobs',${j.id})">🗑️</button></div></div>`).join('');
}
function renderJobsWeb(){
  const el=document.getElementById('jobs-display');if(!el)return;
  el.innerHTML=DB.jobs.map((j,i)=>`<div class="job-card rv d${(i%4)+1}" onclick="goSec('#contact-s')"><div class="job-left"><div class="job-ic">${j.icon}</div><div><div class="job-title">${t(j.title)}</div><div class="job-meta">${t(j.dept)} · ${t(j.loc)}</div><div class="job-tags"><span class="job-tag">${t(j.type)}</span><span class="job-tag">${t(j.loc)}</span></div></div></div><div class="job-right"><button class="btn-cta" style="font-size:12px;padding:8px 16px;"><span data-ar>قدّم الآن</span><span data-en>Apply Now</span></button></div></div>`).join('');
}
function renderGalList(){
  const el=document.getElementById('gallery-list');if(!el)return;
  el.innerHTML=DB.gallery.map(g=>`<div class="ir"><div class="ir-l"><div class="ithumb">${g.img?`<img src="${g.img}">`:`${g.icon}`}</div><div><div class="itit">${t(g.title)}</div><div class="imeta">${g.cat}</div></div></div><div class="ia"><button class="ib" onclick="editGal(${g.id})">✏️</button><button class="ib d" onclick="delItem('gallery',${g.id})">🗑️</button></div></div>`).join('');
}
function renderGalWeb(filter='all'){
  const el=document.getElementById('gallery-display');if(!el)return;
  const items=filter==='all'?DB.gallery:DB.gallery.filter(g=>g.cat===filter);
  el.innerHTML=items.map((g,i)=>`<div class="gal-item rv d${(i%6)+1}" onclick="openLB('${g.img||''}','${g.icon}')"><div>${g.img?`<img src="${g.img}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">`:`<span style="font-size:56px">${g.icon}</span>`}</div><div class="gal-overlay"><div class="gal-zoom">🔍</div></div></div>`).join('');
}
function filterGal(f,btn){document.querySelectorAll('.gf-btn').forEach(b=>b.classList.remove('act'));btn.classList.add('act');renderGalWeb(f);}
function renderPtnList(){
  const el=document.getElementById('ptn-list');if(!el)return;
  el.innerHTML=DB.partners.map(p=>`<div class="ir"><div class="ir-l"><div class="ithumb">${p.img?`<img src="${p.img}">`:`${p.icon}`}</div><div><div class="itit">${t(p.name)}</div><div class="imeta">${t(p.type)}</div></div></div><div class="ia"><button class="ib" onclick="editPtn(${p.id})">✏️</button><button class="ib d" onclick="delItem('partners',${p.id})">🗑️</button></div></div>`).join('');
}
function renderPtnWeb(){
  const el=document.getElementById('ptn-display');if(!el)return;
  el.innerHTML=DB.partners.map((p,i)=>`<div class="ptn-card rv d${(i%5)+1}"><span class="ptn-logo">${p.img?`<img src="${p.img}" style="width:60px;height:60px;object-fit:contain;border-radius:12px;">`:`${p.icon}`}</span><div class="ptn-name">${t(p.name)}</div><div class="ptn-type">${t(p.type)}</div></div>`).join('');
}
function renderSvcList(){
  const el=document.getElementById('svc-list');if(!el)return;
  el.innerHTML=DB.services.map(s=>`<div class="ir"><div class="ir-l"><div class="ithumb">${s.icon}</div><div><div class="itit">${t(s.name)}</div><div class="imeta">${t(s.desc).slice(0,50)}...</div></div></div><div class="ia"><button class="ib" onclick="editSvc(${s.id})">✏️</button><button class="ib d" onclick="delItem('services',${s.id})">🗑️</button></div></div>`).join('');
}
function renderSvcWeb(){
  const el=document.getElementById('svc-display');if(!el)return;
  el.innerHTML=DB.services.map((s,i)=>`<div class="svc-card rv d${(i%3)+1}"><div class="svc-ic">${s.icon}</div><h3>${t(s.name)}</h3><p>${t(s.desc)}</p></div>`).join('');
}

// ═══ CRUD SAVES ═══
function savePrj(){
  const eid=document.getElementById('prj-eid').value;
  const obj={name:{ar:document.getElementById('prj-name').value,en:document.getElementById('prj-name').value},desc:{ar:document.getElementById('prj-desc').value,en:document.getElementById('prj-desc').value},client:document.getElementById('prj-client').value,duration:{ar:document.getElementById('prj-dur').value,en:document.getElementById('prj-dur').value},status:document.getElementById('prj-st').value,icon:document.getElementById('prj-ic').value||'🚀',img:document.getElementById('prj-img').value};
  if(!obj.name.ar)return toast('⚠️ أدخل اسم المشروع');
  if(eid){const i=DB.projects.findIndex(p=>p.id==eid);if(i!==-1)DB.projects[i]={...DB.projects[i],...obj};}
  else{obj.id=DB.nid++;DB.projects.push(obj);}
  closeMo('prj-mo');renderAll();toast('✅ تم حفظ المشروع');resetUp('prj-up','prj-prev','prj-img');clearF(['prj-eid','prj-name','prj-desc','prj-client','prj-dur','prj-ic']);
}
function editPrj(id){const p=DB.projects.find(x=>x.id===id);if(!p)return;document.getElementById('prj-eid').value=id;document.getElementById('prj-name').value=t(p.name);document.getElementById('prj-desc').value=t(p.desc);document.getElementById('prj-client').value=p.client;document.getElementById('prj-dur').value=t(p.duration);document.getElementById('prj-st').value=p.status;document.getElementById('prj-ic').value=p.icon;if(p.img){const pv=document.getElementById('prj-prev');pv.src=p.img;pv.style.display='block';document.getElementById('prj-img').value=p.img;}openMo('prj-mo');}
function saveNews(){
  const eid=document.getElementById('news-eid').value;
  const obj={title:{ar:document.getElementById('news-tit').value,en:document.getElementById('news-tit').value},excerpt:{ar:document.getElementById('news-exc').value,en:document.getElementById('news-exc').value},cat:{ar:document.getElementById('news-cat').value,en:document.getElementById('news-cat').value},date:document.getElementById('news-dt').value||new Date().toISOString().split('T')[0],icon:document.getElementById('news-ic').value||'📰',img:document.getElementById('news-img').value};
  if(!obj.title.ar)return toast('⚠️ أدخل العنوان');
  if(eid){const i=DB.news.findIndex(n=>n.id==eid);if(i!==-1)DB.news[i]={...DB.news[i],...obj};}
  else{obj.id=DB.nid++;DB.news.unshift(obj);}
  closeMo('news-mo');renderAll();toast('✅ تم حفظ الخبر');resetUp('news-up','news-prev','news-img');clearF(['news-eid','news-tit','news-exc','news-dt','news-ic']);
}
function editNews(id){const n=DB.news.find(x=>x.id===id);if(!n)return;document.getElementById('news-eid').value=id;document.getElementById('news-tit').value=t(n.title);document.getElementById('news-exc').value=t(n.excerpt);document.getElementById('news-cat').value=t(n.cat);document.getElementById('news-dt').value=n.date;document.getElementById('news-ic').value=n.icon;if(n.img){const pv=document.getElementById('news-prev');pv.src=n.img;pv.style.display='block';document.getElementById('news-img').value=n.img;}openMo('news-mo');}
function saveTeam(){
  const eid=document.getElementById('team-eid').value;
  const obj={name:{ar:document.getElementById('team-nm').value,en:document.getElementById('team-nm').value},role:{ar:document.getElementById('team-rl').value,en:document.getElementById('team-rl').value},bio:{ar:document.getElementById('team-bio').value,en:document.getElementById('team-bio').value},icon:document.getElementById('team-ic').value||'👨‍💼',img:document.getElementById('team-img').value};
  if(!obj.name.ar)return toast('⚠️ أدخل الاسم');
  if(eid){const i=DB.team.findIndex(m=>m.id==eid);if(i!==-1)DB.team[i]={...DB.team[i],...obj};}
  else{obj.id=DB.nid++;DB.team.push(obj);}
  closeMo('team-mo');renderAll();toast('✅ تم حفظ العضو');clearF(['team-eid','team-nm','team-rl','team-bio','team-ic']);resetUp('team-up','team-prev','team-img');
}
function editTeam(id){const m=DB.team.find(x=>x.id===id);if(!m)return;document.getElementById('team-eid').value=id;document.getElementById('team-nm').value=t(m.name);document.getElementById('team-rl').value=t(m.role);document.getElementById('team-bio').value=t(m.bio);document.getElementById('team-ic').value=m.icon;openMo('team-mo');}
function saveJob(){
  const eid=document.getElementById('job-eid').value;
  const obj={title:{ar:document.getElementById('job-tit').value,en:document.getElementById('job-tit').value},dept:{ar:document.getElementById('job-dep').value,en:document.getElementById('job-dep').value},loc:{ar:document.getElementById('job-loc').value,en:document.getElementById('job-loc').value},type:{ar:document.getElementById('job-tp').value,en:document.getElementById('job-tp').value},icon:document.getElementById('job-ic').value||'💼'};
  if(!obj.title.ar)return toast('⚠️ أدخل المسمى الوظيفي');
  if(eid){const i=DB.jobs.findIndex(j=>j.id==eid);if(i!==-1)DB.jobs[i]={...DB.jobs[i],...obj};}
  else{obj.id=DB.nid++;DB.jobs.push(obj);}
  closeMo('job-mo');renderAll();toast('✅ تم حفظ الوظيفة');clearF(['job-eid','job-tit','job-dep','job-loc','job-ic']);
}
function editJob(id){const j=DB.jobs.find(x=>x.id===id);if(!j)return;document.getElementById('job-eid').value=id;document.getElementById('job-tit').value=t(j.title);document.getElementById('job-dep').value=t(j.dept);document.getElementById('job-loc').value=t(j.loc);document.getElementById('job-tp').value=t(j.type);document.getElementById('job-ic').value=j.icon;openMo('job-mo');}
function saveGal(){
  const eid=document.getElementById('gal-eid').value;
  const obj={title:{ar:document.getElementById('gal-tit').value,en:document.getElementById('gal-tit').value},cat:document.getElementById('gal-cat').value,icon:document.getElementById('gal-ic').value||'🖼️',img:document.getElementById('gal-img').value};
  if(eid){const i=DB.gallery.findIndex(g=>g.id==eid);if(i!==-1)DB.gallery[i]={...DB.gallery[i],...obj};}
  else{obj.id=DB.nid++;DB.gallery.push(obj);}
  closeMo('gal-mo');renderAll();toast('✅ تم حفظ الصورة');resetUp('gal-up','gal-prev','gal-img');clearF(['gal-eid','gal-tit','gal-ic']);
}
function savePtn(){
  const eid=document.getElementById('ptn-eid').value;
  const obj={name:{ar:document.getElementById('ptn-nm').value,en:document.getElementById('ptn-nm').value},type:{ar:document.getElementById('ptn-tp').value,en:document.getElementById('ptn-tp').value},icon:document.getElementById('ptn-ic').value||'🏢',img:document.getElementById('ptn-img')?document.getElementById('ptn-img').value:''};
  if(!obj.name.ar)return toast('⚠️ أدخل الاسم');
  if(eid){const i=DB.partners.findIndex(p=>p.id==eid);if(i!==-1)DB.partners[i]={...DB.partners[i],...obj};}
  else{obj.id=DB.nid++;DB.partners.push(obj);}
  closeMo('ptn-mo');renderAll();toast('✅ تم حفظ الشريك');clearF(['ptn-eid','ptn-nm','ptn-tp','ptn-ic']);if(document.getElementById('ptn-img'))resetUp('ptn-up','ptn-prev','ptn-img');
}
function editPtn(id){const p=DB.partners.find(x=>x.id===id);if(!p)return;document.getElementById('ptn-eid').value=id;document.getElementById('ptn-nm').value=t(p.name);document.getElementById('ptn-tp').value=t(p.type);document.getElementById('ptn-ic').value=p.icon;if(p.img&&document.getElementById('ptn-prev')){const pv=document.getElementById('ptn-prev');pv.src=p.img;pv.style.display='block';document.getElementById('ptn-img').value=p.img;}openMo('ptn-mo');}
function saveSvc(){
  const eid=document.getElementById('svc-eid').value;
  const obj={name:{ar:document.getElementById('svc-nm').value,en:document.getElementById('svc-nm').value},desc:{ar:document.getElementById('svc-dc').value,en:document.getElementById('svc-dc').value},icon:document.getElementById('svc-ic').value||'⚙️'};
  if(!obj.name.ar)return toast('⚠️ أدخل اسم الخدمة');
  if(eid){const i=DB.services.findIndex(s=>s.id==eid);if(i!==-1)DB.services[i]={...DB.services[i],...obj};}
  else{obj.id=DB.nid++;DB.services.push(obj);}
  closeMo('svc-mo');renderAll();toast('✅ تم حفظ الخدمة');clearF(['svc-eid','svc-nm','svc-dc','svc-ic']);
}
function editSvc(id){const s=DB.services.find(x=>x.id===id);if(!s)return;document.getElementById('svc-eid').value=id;document.getElementById('svc-nm').value=t(s.name);document.getElementById('svc-dc').value=t(s.desc);document.getElementById('svc-ic').value=s.icon;openMo('svc-mo');}
function editGal(id){const g=DB.gallery.find(x=>x.id===id);if(!g)return;document.getElementById('gal-eid').value=id;document.getElementById('gal-tit').value=t(g.title);document.getElementById('gal-cat').value=g.cat;document.getElementById('gal-ic').value=g.icon;if(g.img){const pv=document.getElementById('gal-prev');pv.src=g.img;pv.style.display='block';document.getElementById('gal-img').value=g.img;}openMo('gal-mo');}
// ═══ TESTIMONIALS CRUD ═══
function saveTest(){
  const eid=document.getElementById('test-eid').value;
  const obj={name:{ar:document.getElementById('test-nm').value,en:document.getElementById('test-nm').value},position:{ar:document.getElementById('test-pos').value,en:document.getElementById('test-pos').value},text:{ar:document.getElementById('test-txt').value,en:document.getElementById('test-txt').value},stars:parseInt(document.getElementById('test-stars').value)||5,icon:document.getElementById('test-ic').value||'👨‍💼',img:document.getElementById('test-img')?document.getElementById('test-img').value:''};
  if(!obj.name.ar)return toast('⚠️ أدخل الاسم');
  if(eid){const i=DB.testimonials.findIndex(x=>x.id==eid);if(i!==-1)DB.testimonials[i]={...DB.testimonials[i],...obj};}
  else{obj.id=DB.nid++;DB.testimonials.push(obj);}
  closeMo('test-mo');renderAll();toast('✅ تم حفظ التقييم');clearF(['test-eid','test-nm','test-pos','test-txt','test-ic']);if(document.getElementById('test-img'))resetUp('test-up','test-prev','test-img');
}
function editTest(id){const x=DB.testimonials.find(v=>v.id===id);if(!x)return;document.getElementById('test-eid').value=id;document.getElementById('test-nm').value=t(x.name);document.getElementById('test-pos').value=t(x.position);document.getElementById('test-txt').value=t(x.text);document.getElementById('test-stars').value=x.stars;document.getElementById('test-ic').value=x.icon;if(x.img&&document.getElementById('test-prev')){const pv=document.getElementById('test-prev');pv.src=x.img;pv.style.display='block';document.getElementById('test-img').value=x.img;}openMo('test-mo');}
function renderTestList(){
  const el=document.getElementById('test-list');if(!el)return;
  el.innerHTML=DB.testimonials.map(x=>`<div class="ir"><div class="ir-l"><div class="ithumb">${x.img?`<img src="${x.img}">`:`${x.icon}`}</div><div><div class="itit">${t(x.name)}</div><div class="imeta">${t(x.position)} · ${'★'.repeat(x.stars)}</div></div></div><div class="ia"><button class="ib" onclick="editTest(${x.id})">✏️</button><button class="ib d" onclick="delItem('testimonials',${x.id})">🗑️</button></div></div>`).join('');
}
function renderTestWeb(){
  const el=document.getElementById('test-display');if(!el)return;
  el.innerHTML=DB.testimonials.map((x,i)=>`<div class="test-card rv d${(i%3)+1}"><div class="test-quote">"</div><div class="test-stars">${'★'.repeat(x.stars)}</div><div class="test-txt">${t(x.text)}</div><div class="test-author"><div class="test-av">${x.img?`<img src="${x.img}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`:`${x.icon}`}</div><div><div class="test-name">${t(x.name)}</div><div class="test-pos">${t(x.position)}</div></div></div></div>`).join('');
}
// ═══ CONTACT INFO ═══
function renderContactPanel(){
  const el=document.getElementById('ct-phone');if(!el)return;
  const c=DB.contactInfo;
  document.getElementById('ct-phone').value=c.phone;
  document.getElementById('ct-whatsapp').value=c.whatsapp;
  document.getElementById('ct-email').value=c.email;
  document.getElementById('ct-website').value=c.website;
  document.getElementById('ct-loc-ar').value=c.locationAr;
  document.getElementById('ct-loc-en').value=c.locationEn;
}
function saveContact(){
  DB.contactInfo.phone=document.getElementById('ct-phone').value;
  DB.contactInfo.whatsapp=document.getElementById('ct-whatsapp').value;
  DB.contactInfo.email=document.getElementById('ct-email').value;
  DB.contactInfo.website=document.getElementById('ct-website').value;
  DB.contactInfo.locationAr=document.getElementById('ct-loc-ar').value;
  DB.contactInfo.locationEn=document.getElementById('ct-loc-en').value;
  renderContactWeb();toast('✅ تم حفظ بيانات التواصل');
}
function renderContactWeb(){
  const el=document.getElementById('contact-info-display');if(!el)return;
  const c=DB.contactInfo;
  el.innerHTML=`<div class="ci-item"><div class="ci-ic">📞</div><div><div class="ci-lbl"><span data-ar>الهاتف</span><span data-en>Phone</span></div><div class="ci-val">${c.phone}</div></div></div><div class="ci-item"><div class="ci-ic">💬</div><div><div class="ci-lbl">WhatsApp</div><div class="ci-val">${c.whatsapp}</div></div></div><div class="ci-item"><div class="ci-ic">📧</div><div><div class="ci-lbl">Email</div><div class="ci-val">${c.email}</div></div></div><div class="ci-item"><div class="ci-ic">🌐</div><div><div class="ci-lbl"><span data-ar>الموقع</span><span data-en>Website</span></div><div class="ci-val"><a href="https://${c.website}/" target="_blank" style="color:inherit;text-decoration:none;">${c.website}</a></div></div></div><div class="ci-item"><div class="ci-ic">📍</div><div><div class="ci-lbl"><span data-ar>الموقع الجغرافي</span><span data-en>Location</span></div><div class="ci-val"><span data-ar>${c.locationAr}</span><span data-en>${c.locationEn}</span></div></div></div><div id="social-display" class="social-display" style="display:flex;gap:10px;margin-top:16px;"></div>`;
  // Update footer too
  const fp=document.getElementById('ft-phone');if(fp)fp.textContent='📞 '+c.phone;
  const fe=document.getElementById('ft-email');if(fe)fe.textContent='📧 '+c.email;
  const fw=document.getElementById('ft-website');if(fw){fw.innerHTML='<span style="display:inline-flex;align-items:center;gap:6px;">🌐 <a href="https://'+c.website+'/" target="_blank" style="color:inherit;text-decoration:none;">'+c.website+'</a></span>';}
}
// ═══ SOCIAL MEDIA ═══
function renderSocialList(){
  const el=document.getElementById('social-list');if(!el)return;
  el.innerHTML=DB.socialMedia.map(s=>`<div class="ir"><div class="ir-l"><div class="ithumb" style="font-size:18px;font-weight:700;">${s.icon}</div><div><div class="itit">${s.label}</div><div class="imeta">${s.url}</div></div></div><div class="ia"><button class="ib" onclick="editSocial(${s.id})">✏️</button><button class="ib d" onclick="delItem('socialMedia',${s.id})">🗑️</button></div></div>`).join('');
}
function renderSocialWeb(){
  const el=document.getElementById('social-display');if(!el)return;
  el.innerHTML=DB.socialMedia.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.label}">${s.icon}</a>`).join('');
  const ftEl=document.getElementById('social-footer');if(ftEl)ftEl.innerHTML=DB.socialMedia.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.label}">${s.icon}</a>`).join('');
}
function saveSocial(){
  const eid=document.getElementById('social-eid').value;
  const obj={platform:document.getElementById('social-plat').value,url:document.getElementById('social-url').value,icon:document.getElementById('social-ic').value,label:document.getElementById('social-lbl').value};
  if(!obj.label)return toast('⚠️ أدخل اسم المنصة');
  if(eid){const i=DB.socialMedia.findIndex(s=>s.id==eid);if(i!==-1)DB.socialMedia[i]={...DB.socialMedia[i],...obj};}
  else{obj.id=DB.nid++;DB.socialMedia.push(obj);}
  closeMo('social-mo');renderAll();toast('✅ تم حفظ الرابط');clearF(['social-eid','social-plat','social-url','social-ic','social-lbl']);
}
function editSocial(id){const s=DB.socialMedia.find(x=>x.id===id);if(!s)return;document.getElementById('social-eid').value=id;document.getElementById('social-plat').value=s.platform;document.getElementById('social-url').value=s.url;document.getElementById('social-ic').value=s.icon;document.getElementById('social-lbl').value=s.label;openMo('social-mo');}
// ═══ AUTH ═══
function hashPw(p){let h=0;for(let i=0;i<p.length;i++){h=((h<<5)-h)+p.charCodeAt(i);h|=0;}return h.toString(36);}
function checkAuth(){const a=JSON.parse(localStorage.getItem('riaya-auth')||'null');if(!a)return false;if(Date.now()-a.time>86400000){localStorage.removeItem('riaya-auth');return false;}return true;}
function logout(){localStorage.removeItem('riaya-auth');location.href='login.html';}
function delItem(type,id){if(!confirm(lang==='ar'?'هل أنت متأكد من الحذف؟':'Are you sure you want to delete?'))return;DB[type]=DB[type].filter(i=>i.id!==id);renderAll();toast('🗑️ '+(lang==='ar'?'تم الحذف':'Deleted'));}
function filterPrj(f,btn){document.querySelectorAll('.tab').forEach(t=>t.classList.remove('act'));btn.classList.add('act');renderPrjList(f);}

// ═══ IMAGE UPLOAD ═══
function upImg(input,dataId,prevId,areaId){
  const file=input.files[0];if(!file)return;
  if(file.size>5*1024*1024)return toast('⚠️ الصورة أكبر من 5MB');
  const reader=new FileReader();
  reader.onload=e=>{
    const d=e.target.result;
    document.getElementById(dataId).value=d;
    const pv=document.getElementById(prevId);pv.src=d;pv.style.display='block';
    const area=document.getElementById(areaId);
    const ic=area.querySelector('.up-ic');const tx=area.querySelector('.up-txt');
    if(ic)ic.style.display='none';if(tx)tx.textContent='✓ تم الرفع';
    area.style.borderColor='var(--or)';area.style.background='var(--or-g)';
  };reader.readAsDataURL(file);
}
function dov(e){e.preventDefault();e.currentTarget.classList.add('dov');}
function dlv(e){e.currentTarget.classList.remove('dov');}
function drop(e,di,pi,ai){e.preventDefault();e.currentTarget.classList.remove('dov');const file=e.dataTransfer.files[0];if(!file||!file.type.startsWith('image/'))return;const fakeIn={files:[file]};upImg(fakeIn,di,pi,ai);}
function resetUp(areaId,prevId,dataId){
  const pv=document.getElementById(prevId);if(pv){pv.src='';pv.style.display='none';}
  document.getElementById(dataId).value='';
  const area=document.getElementById(areaId);if(area){area.style.borderColor='';area.style.background='';const ic=area.querySelector('.up-ic');const tx=area.querySelector('.up-txt');if(ic)ic.style.display='block';if(tx)tx.textContent='اسحب أو انقر للرفع';}
}
function clearF(ids){ids.forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});}

// ═══ MODALS ═══
function openMo(id){document.getElementById(id).classList.add('open');}
function closeMo(id){document.getElementById(id).classList.remove('open');}

// ═══ LIGHTBOX ═══
function openLB(img,icon){const lb=document.getElementById('lightbox');const lbImg=document.getElementById('lb-img');if(img){lbImg.src=img;lb.classList.add('open');}else{toast(icon+' ('+( lang==='ar'?'لا توجد صورة':'No image')+')');}};
function closeLB(){document.getElementById('lightbox').classList.remove('open');}

// ═══ CONTACT FORM ═══
function submitForm(){
  const name=document.getElementById('cf-name').value.trim();
  if(!name)return toast(lang==='ar'?'⚠️ أدخل اسمك':'⚠️ Enter your name');
  const num=Math.floor(Math.random()*90000)+10000;
  document.getElementById('ticket-num').textContent=num;
  document.getElementById('ticket-num2').textContent=num;
  document.getElementById('auto-reply').classList.add('show');
  toast('✅ '+(lang==='ar'?'تم إرسال رسالتك بنجاح!':'Message sent successfully!'));
}

// ═══ TOAST ═══
function toast(msg){const t=document.getElementById('toast');document.getElementById('toast-msg').textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}

// ═══ REVEAL ═══
const rvo=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('vis'),i*75);rvo.unobserve(e.target);}});
},{threshold:.1});
function initRv(){document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-sc').forEach(el=>{if(!el.classList.contains('vis'))rvo.observe(el);});}

// ═══ PROGRESS BARS ═══
function animProgs(){document.querySelectorAll('.pf[data-w]').forEach(el=>{el.style.width=el.dataset.w;});}

// ═══ CURSOR ═══
const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function animC(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animC);})();
document.querySelectorAll('a,button,[onclick]').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.transform='translate(-50%,-50%) scale(1.8)';ring.style.borderColor='var(--or)';dot.style.transform='translate(-50%,-50%) scale(.4)';});
  el.addEventListener('mouseleave',()=>{ring.style.transform='translate(-50%,-50%) scale(1)';ring.style.borderColor='rgba(255,107,26,.45)';dot.style.transform='translate(-50%,-50%) scale(1)';});
});

// ═══ PARTICLES ═══
function makeParticles(){
  const c=document.getElementById('particles');if(!c)return;
  for(let i=0;i<35;i++){const p=document.createElement('div');p.className='particle';p.style.cssText=`left:${Math.random()*100}%;--dx:${(Math.random()-.5)*180}px;animation-duration:${9+Math.random()*14}s;animation-delay:${Math.random()*12}s;width:${1+Math.random()*3}px;height:${1+Math.random()*3}px;`;c.appendChild(p);}
}

// ═══ NAVBAR SCROLL ═══
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60);});

// ═══ COUNTER ═══
function counter(id,target,suf){
  const el=document.getElementById(id);if(!el)return;
  let cur=0;const step=target/60;
  const ti=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=Math.round(cur)+suf;if(cur>=target)clearInterval(ti);},25);
}

// ═══ INIT ═══
window.addEventListener('load',()=>{
  applyLang();
  applyTheme();
  renderAll();
  if(isDash){
    setTimeout(animProgs,500);
  } else {
    makeParticles();
    counter('c1',500,'+');counter('c2',15000,'+');counter('c3',99,'%');
    const loader=document.getElementById('loader');
    if(loader) setTimeout(()=>{loader.classList.add('out');initRv();},2100);
    // handle hash scroll from dashboard redirect
    if(location.hash){
      setTimeout(()=>{const el=document.querySelector(location.hash);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},2300);
    }
  }
  initRv();
});
