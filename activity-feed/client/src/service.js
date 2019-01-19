const get = (url) => {
    const option = {
        method: "GET"
    };
    return fetch(url, option);
}
export default get;