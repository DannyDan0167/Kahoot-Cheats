(function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);

    var button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-globe"></i>';
    button.style.position = 'fixed';
    button.style.right = '10px';
    button.style.bottom = '10px';
    button.style.zIndex = '1000';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.padding = '10px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'purple';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.opacity = '0.5';
    button.querySelector('i').style.fontSize = '24px';

    document.body.appendChild(button);

    function simulateAltHKeyPress() {
        var event = new KeyboardEvent('keydown', {
            key: 'h',
            code: 'KeyH',
            keyCode: 72,
            charCode: 0,
            bubbles: true,
            altKey: true
        });
        document.dispatchEvent(event);
    }

    button.addEventListener('click', simulateAltHKeyPress);
})();