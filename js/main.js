
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('#Research1 p');
    paragraphs.forEach(p => {
        p.addEventListener('click', function() {
        let ul = this.nextElementSibling;
        let isHidden = getComputedStyle(ul).display === 'none';
        ul.style.display = isHidden ? 'block' : 'none';
    });
    });
});
/*----------------------------------------------------------------------*/




