const axios = require('axios');

module.exports = async function() {
    const url = 'https://firestore.googleapis.com/v1/projects/stgz-studio/databases/(default)/documents/tags';
    const response = await axios.get(url);
    return response.data.documents.map(doc => doc.fields);
};
