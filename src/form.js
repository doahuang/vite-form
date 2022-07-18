const submitform = (e, el) => {
    e.preventDefault();
    const data = new FormData(el).entries();
    const url = new URL(el.action);
    for (const [key, value] of data) {
        if (url.searchParams.has(key)) {
            url.searchParams.set(key, `${url.searchParams.get(key)}|${value}`);
        } else {
            if (
                (key === '_sacat' && value !== '0') ||
                (key !== '_sacat' && value)
            ) {
                url.searchParams.set(key, value);
            }
        }
    }
    location.href = url;
};
