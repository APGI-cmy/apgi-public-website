export const PORTAL='https://training-platform-v2-staging.vercel.app';
export function safeImage(value){
 if(typeof value!=='string')return null;
 try{const url=new URL(value,PORTAL);return url.protocol==='https:'&&(url.origin===PORTAL||url.hostname.endsWith('.supabase.co')&&url.pathname.startsWith('/storage/v1/object/public/'))?url.href:null;}catch{return null;}
}
export function normaliseCourse(course){
 if(!course||typeof course!=='object'||typeof course.slug!=='string'||!/^[a-z0-9][a-z0-9-]*$/.test(course.slug)||typeof course.title!=='string'||typeof course.description!=='string'||typeof course.level!=='string'||typeof course.duration!=='string')return null;
 const href=new URL(`/courses/${encodeURIComponent(course.slug)}`,PORTAL).href;
 return {slug:course.slug,title:course.title,description:course.description,level:course.level,duration:course.duration,href,cover:course.cover&&safeImage(course.cover.src)?{src:safeImage(course.cover.src),alt:typeof course.cover.alt==='string'?course.cover.alt:course.title}:null};
}
function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text)el.textContent=text;return el;}
function renderCourse(course){
 const article=element('article','public-course-card');article.dataset.courseSlug=course.slug;
 const cover=element('div','public-course-cover');if(course.cover){const img=element('img');img.src=course.cover.src;img.alt=course.cover.alt;img.loading='lazy';img.addEventListener('error',()=>img.remove(),{once:true});cover.append(img);}
 const body=element('div','public-course-body');body.append(element('span','public-course-level',course.level),element('h3','',course.title),element('p','',course.description),element('p','',course.duration));
 const link=element('a','public-course-link','Explore course');link.href=course.href;body.append(link);article.append(cover,body);return article;
}
function renderFeatured(courses){
 const course=courses.find(item=>item.cover);
 for(const panel of document.querySelectorAll('[data-featured-course]')){
  const content=panel.querySelector('[data-feature-content]');const fallback=panel.querySelector('[data-feature-fallback]');
  content.hidden=true;fallback.hidden=false;content.replaceChildren();
  if(!course)continue;
  const link=element('a','featured-course-image');link.href=course.href;
  const image=element('img');image.alt=course.cover.alt;image.loading='eager';image.decoding='async';image.fetchPriority='high';
  const reveal=()=>{if(content.contains(image)&&image.naturalWidth){content.hidden=false;fallback.hidden=true;}};
  image.addEventListener('load',reveal,{once:true});image.addEventListener('error',()=>{if(content.contains(image)){content.hidden=true;fallback.hidden=false;}},{once:true});
  link.append(image);const body=element('div','featured-course-body');
  body.append(element('p','eyebrow','Featured training'),element('h2','',course.title));
  const action=element('a','button','Explore course');action.href=course.href;body.append(action);content.append(link,body);image.src=course.cover.src;reveal();
 }
}
function applyBrand(brand){
 if(!brand)return;
 for(const [key,name] of Object.entries({primaryColor:'--brand-navy',secondaryColor:'--brand-blue',accentColor:'--brand-mid-blue',paleColor:'--brand-pale-blue'}))if(/^#[0-9a-f]{6}$/i.test(brand[key]))document.documentElement.style.setProperty(name,brand[key]);
 const logo=safeImage(brand.logoUrl);if(logo)document.querySelectorAll('[data-apgi-logo]').forEach(img=>{img.src=logo;});
 const mark=brand.watermark;const src=mark&&safeImage(mark.src);const layer=document.querySelector('[data-brand-watermark]');
 if(layer){layer.replaceChildren();if(src){const image=element('img');image.src=src;image.alt='';layer.style.opacity=String(Math.max(0,Math.min(1,Number(mark.opacity)||.07)));layer.append(image);}}
}
async function refresh(){
 const containers=[...document.querySelectorAll('[data-live-catalogue]')];
 try{
  const response=await fetch(`${PORTAL}/api/public/catalogue`,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('unavailable');
  const payload=await response.json();if(payload.schemaVersion!==1||!Array.isArray(payload.courses))throw Error('invalid catalogue');
  const courses=payload.courses.map(normaliseCourse).filter(Boolean);applyBrand(payload.branding);renderFeatured(courses);
  for(const container of containers){const limit=Number(container.dataset.limit)||courses.length;const grid=element('div','public-course-grid');courses.slice(0,limit).forEach(c=>grid.append(renderCourse(c)));container.replaceChildren(courses.length?grid:element('p','','New learning pathways will appear here when they are published.'));container.setAttribute('aria-busy','false');}
 }catch{
  renderFeatured([]);
  for(const container of containers){const message=element('p','','The latest course list is temporarily unavailable. ');message.setAttribute('role','status');const link=element('a','','View courses in the training portal');link.href=`${PORTAL}/courses`;message.append(link);container.replaceChildren(message);container.setAttribute('aria-busy','false');}
 }
}
if(typeof document!=='undefined'){void refresh();setInterval(()=>{if(!document.hidden)void refresh();},60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)void refresh();});}
