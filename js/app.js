function restartAnimation() {
    const becomeElement = document.querySelector('.become');
    const lastGlobalElement = document.querySelector('.last-global');

    becomeElement.parentNode.removeChild(becomeElement);
    lastGlobalElement.parentNode.removeChild(lastGlobalElement);

    const newBecomeElement = becomeElement.cloneNode(true);
    const newLastGlobalElement = lastGlobalElement.cloneNode(true);

    becomeElement.parentNode.appendChild(newBecomeElement);
    lastGlobalElement.parentNode.appendChild(newLastGlobalElement);
}

document.querySelector('.last').addEventListener('mouseenter', () => restartAnimation());



/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


