const changeradio = (e, el) => {
    if (e.target.tagName !== 'INPUT' || e.target.type !== 'radio') {
        return;
    }
    for (const input of el.querySelectorAll('input[type=radio]')) {
        if (input.id !== e.target.id) {
            input.checked = false;
        }
        const types = ['select', 'input:not([type=radio])'];
        const children = input.parentElement.querySelectorAll(types.join(','));
        for (const child of children) {
            child.disabled = !input.checked;
        }
    }
};

export default changeradio;
