const Nick = require("nickjs");
const nick = new Nick({
  htttpProxy: "http://roberthuangr@gmail.com:password123@proxy.com:3128"
});

(async () => {
  const tab = await nick.newTab();

  // const cookie = {
  //   name: "li_at",
  //   value:
  //     "AQEDAS_LHmIACBwUAAABcOrpSN8AAAFxDvXM31YAVWuwgHmIV8fnzhoj5xh89eXchxYEkWWaKHAUNDJaPTw7HOCd0bSi3M8vXhfY1gkzYVBTxL0ZX6JP7yLAfk7mefDUXl9HBo0NdMlD6DwjBBbTYr0o",
  //   domain: ".www.linkedin.com"
  // };
  // await nick.setCookie(cookie);

  await tab.open(
    "https://www.linkedin.com/posts/mark-cuban-06a0755b_smallbusiness-smallbusinesssupport-smallbiz-activity-6644629791930662912-y5k9/"
  );

  await tab.untilVisible("section.comment"); // Make sure we have loaded the page

  await tab.inject("http://code.jquery.com/jquery-3.2.1.min.js"); // We're going to use jQuery to scrape
  const LinkedInComments = await tab.evaluate((arg, callback) => {
    // Here we're in the page context. It's like being in your browser's inspector tool
    const data = [];
    $(".comment").each((index, element) => {
      data.push({
        comment: $(element)
          .find("span")
          .text()
      });
    });
    callback(null, data);
  });

  console.log(JSON.stringify(LinkedInComments, null, 2));
})()
  .then(() => {
    console.log("Job done!");
    nick.exit();
  })
  .catch(err => {
    console.log(`Something went wrong: ${err}`);
    nick.exit(1);
  });
