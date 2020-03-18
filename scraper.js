const Nick = require("nickjs");
const nick = new Nick();
const { keyPhraseExtraction } = require('./analysis');
const { saveToCsv } = require('./utils')

  (async () => {
    const tab = await nick.newTab();
    const cookie = {
      name: "li_at",
      value:
        "AQEDAS_LHmIACBwUAAABcOrpSN8AAAFxDvXM31YAVWuwgHmIV8fnzhoj5xh89eXchxYEkWWaKHAUNDJaPTw7HOCd0bSi3M8vXhfY1gkzYVBTxL0ZX6JP7yLAfk7mefDUXl9HBo0NdMlD6DwjBBbTYr0o",
      domain: ".www.linkedin.com"
    };
    await nick.setCookie(cookie);
    await tab.open(
      "https://www.linkedin.com/posts/mark-cuban-06a0755b_smallbusiness-smallbusinesssupport-smallbiz-activity-6644629791930662912-y5k9/"
    );
    await tab.untilVisible(".comments-comments-list"); // Make sure we have loaded the page
    await tab.wait(10000);
    await tab.inject("http://code.jquery.com/jquery-3.2.1.min.js"); // We're going to use jQuery to scrape

    const LinkedInComments = await tab.evaluate((arg, callback) => {
      const data = [];
      $(".comments-comment-item").each((index, element) => {
        console.log(element)
        data.push(
          {
            // TODO: get span
            author: $(element).find('.comments-post-meta__name').find('.hoverable-link-text').text().trim(),
            title: $(element).find('.comments-post-meta__headline').text().trim(),
            comment: $(element).find('.comments-comment-item-content-body').text(),
            // TODO: add # of likes and replies
            time: $(element).find('time').text(),
          }
        );
      });
      callback(null, data);
    });


    console.log(LinkedInComments)
    // TODO: save to csv


    // TODO: shape data for keyPhraseExtraction
    // await keyPhraseExtraction(LinkedInComments)

    await tab.close()
  })()
  .then(() => {
    console.log("Job done!");
    nick.exit();
  })
  .catch(err => {
    console.log(`Something went wrong: ${err}`);
    nick.exit(1);
  });
