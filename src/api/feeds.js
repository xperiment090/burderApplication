
const uri = `https://burgervergleich.autoteile.check24.de/api/comparison/type/burger`;

const getAllFeeds = () => {
    try {
        return fetch(uri)
        .then(response => response.json())
    }
    catch(e) {
        console.error(`Error: ${e}`);
    }
}

export {getAllFeeds};