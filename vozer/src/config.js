let BASE_URL = 'https://vozer.vn';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}