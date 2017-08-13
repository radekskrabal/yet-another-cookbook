export function decorate(text: string, query: string, tagname = 'mark'): string {
    if (query === null) {
        return text;
    }

    const lcQuery = query.toLowerCase();
    if (!text.toLowerCase().includes(lcQuery)) { // nothing to be decorated
        return text;
    }

    let decoratedText = '';
    while (text.toLowerCase().includes(lcQuery)) {
        const i = text.toLowerCase().indexOf(lcQuery);

        if (i > 0) { // prepend text
            decoratedText += text.substring(0, i);
        }

        // append query
        decoratedText += `<${tagname}>${text.substring(i /* query start */, i + query.length /* query end */)}</${tagname}>`;

        // assign remaining text
        text = text.substring(i + query.length);
    }
    // append remaining text
    decoratedText += text;

    return decoratedText;
}
