(() => {
 const button=document.querySelector('[data-theme-toggle]');
 let theme='light';
 try{const stored=localStorage.getItem('apgi-training-theme');theme=stored==='dark'||stored==='light'?stored:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch{}
 function apply(){document.documentElement.dataset.theme=theme;if(button)button.textContent=theme==='light'?'Dark':'Light';}
 apply();button?.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';apply();try{localStorage.setItem('apgi-training-theme',theme);}catch{}});
})();
