function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function handleNetworkChange(event) {
  if (navigator.onLine) {
    document.querySelector('#body').classList.remove('offline');
  } else {
    document.querySelector('#body').classList.add('offline');
  }
}


window.addEventListener('load', () => {
  window.addEventListener('online', handleNetworkChange);
  window.addEventListener('offline', handleNetworkChange);
});

docReady(handleNetworkChange);





let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  $('#installPromptModal').modal('show');
});

let buttonInstall = document.querySelector('#install-btn');

buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  // hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    // if (choiceResult.outcome === 'accepted') {
    //   console.log('User accepted the install prompt');
    // } else {
    //   console.log('User dismissed the install prompt');
    // }
    $('#installPromptModal').modal('hide');
  });
});
