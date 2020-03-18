
const { TextAnalyticsClient, TextAnalyticsApiKeyCredential } = require("@azure/ai-text-analytics");

async function keyPhraseExtraction(keyPhrasesInput) {
  // TODO: move this to a process env
  const key = 'AZURE_KEY';
  // TODO: move this to a process env
  const endpoint = `AZURE_ENDPOINT`;
  const textAnalyticsClient = new TextAnalyticsClient(endpoint, new TextAnalyticsApiKeyCredential(key));
  const keyPhraseResult = await textAnalyticsClient.extractKeyPhrases(keyPhrasesInput);

  let data = []
  keyPhraseResult.forEach(document => {
    document.keyPhrases.forEach((keyPhrase) => {
      data.push(keyPhrase)
    })
  });
  console.log(data);
  // TODO: save to file
}

module.exports = { keyPhraseExtraction }