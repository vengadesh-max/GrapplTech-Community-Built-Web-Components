document.addEventListener('DOMContentLoaded', () => {
    const hOffset = document.getElementById('h-offset');
    const vOffset = document.getElementById('v-offset');
    const blurRadius = document.getElementById('blur-radius');
    const spreadRadius = document.getElementById('spread-radius');
    const shadowColor = document.getElementById('shadow-color');
    const inset = document.getElementById('inset');
    const generateCodeButton = document.getElementById('generate-code');
    const cssCode = document.getElementById('css-code');
    const textBox = document.getElementById('text-box');

    function updateTextBoxShadow() {
        const h = hOffset.value;
        const v = vOffset.value;
        const blur = blurRadius.value;
        const spread = spreadRadius.value;
        const color = shadowColor.value;
        const insetValue = inset.checked ? 'inset' : '';
        const shadowValue = `${insetValue} ${h}px ${v}px ${blur}px ${spread}px ${color}`;
        
        textBox.style.boxShadow = shadowValue;
        cssCode.value = `box-shadow: ${shadowValue};`;
    }

    hOffset.addEventListener('input', updateTextBoxShadow);
    vOffset.addEventListener('input', updateTextBoxShadow);
    blurRadius.addEventListener('input', updateTextBoxShadow);
    spreadRadius.addEventListener('input', updateTextBoxShadow);
    shadowColor.addEventListener('input', updateTextBoxShadow);
    inset.addEventListener('change', updateTextBoxShadow);
    generateCodeButton.addEventListener('click', updateTextBoxShadow);

    // Initialize with default values
    updateTextBoxShadow();
});
