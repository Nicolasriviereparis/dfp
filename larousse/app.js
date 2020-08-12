function changeHandler(e) { 
  let speed = navigator.connection.downlink;
  let body = document.querySelector('#body');
  let alert = document.querySelector('#offline-alert');
   if (speed >= 0.1 && speed < .5) {
    body.classList.add('bad-network');
    body.classList.remove('offline');
    alert.innerHTML = 'Mauvaise connexion...';

  } else if (speed < 0.1) {
    body.classList.remove('bad-network');
    body.classList.add('offline');
    alert.innerHTML = 'Hors connexion.';
  }else{
    body.classList.remove('bad-network');
    body.classList.remove('offline');
    alert.innerHTML = '';
  }
}
navigator.connection.onchange = changeHandler; 


// Prompt install PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  if(deferredPrompt != null){
    console.log(deferredPrompt);
    $('#installPromptModal').removeClass('hidden');
    document.querySelector('.btn-close').addEventListener('click', () =>{
      $('#installPromptModal').addClass('hidden');
    });
  }
});

let buttonInstall = document.querySelector('#install-btn');

buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  // hideMyInstallPromotion();
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    // if (choiceResult.outcome === 'accepted') {
    // } else {
    // }
  });
});
