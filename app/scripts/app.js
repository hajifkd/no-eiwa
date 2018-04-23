function extractWord(url) {
    const WEBLIO_URL_REGEXP = '^https://ejje\\.weblio\\.jp/content/([a-z]+)$';
    const EIJIRO_URL_REGEXP = '^https://eow\\.alc\\.co\\.jp/search\\?q=([a-z]+)';

    let match;

    if ((match = url.match(WEBLIO_URL_REGEXP)) ||
        (match = url.match(EIJIRO_URL_REGEXP))) {
        return match[1];
    } else {
        return null;
    }
}

function main() {
    let url = location.href;
    let word = extractWord(url);

    if (word != null) {
        location.replace(`https://www.oxfordlearnersdictionaries.com/definition/english/${word}?q=${word}`);
    }
}

main();