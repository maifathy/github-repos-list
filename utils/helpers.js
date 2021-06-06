export const getData = async (url = '') => {
    const response = await fetch(url);

    try {
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`GET method error: ${e}`);
    }
}
