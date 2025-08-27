(function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'block';
    });
  }
  const form = document.getElementById('subscribeForm');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = {name: form.name.value, email: form.email.value};
      try{
        await fetch('/api/subscribe', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
        alert('Inscrito! Obrigado.');
        form.reset();
      }catch(err){alert('Erro ao inscrever — tente novamente');}
    });
  }
})();