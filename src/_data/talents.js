// const axios = require('axios');

// module.exports = async function() {
//     const url = 'https://firestore.googleapis.com/v1/projects/stgz-studio/databases/(default)/documents/talents';
//     const response = await axios.get(url);
//     return response.data.documents.map(doc => doc.fields);
// };


const axios = require("axios");

module.exports = async function () {
  const baseUrl =
    "https://firestore.googleapis.com/v1/projects/stgz-studio/databases/(default)/documents/talents";

  const response = await axios.get(baseUrl);
  const talents = response.data.documents;

  // Map over talents and fetch commissions for each
  const talentsWithCommissions = await Promise.all(
    talents.map(async (talent) => {
      const talentFields = talent.fields;
      const commissionUrl = `${baseUrl}/${talentFields.talent_slug.stringValue}/commissions`;

      let commissions = [];
      try {
        const commissionResponse = await axios.get(commissionUrl);
        commissions = commissionResponse.data.documents || [];
      } catch (error) {
        console.error(
          `Error fetching commissions for ${talentFields.talent_slug.stringValue}:`,
          error
        );
      }

      // Return the talent data augmented with commissions
      return {
        ...talentFields,
        commissions: commissions.map((doc) => doc.fields),
      };
    })
  );

  return talentsWithCommissions;
};
