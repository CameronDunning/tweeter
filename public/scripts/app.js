/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

const renderTweets = data => {
  for (let elem of data) {
    let $tweet = createTweetElement(elem);
    $("#tweets").append($tweet);
  }
};

const createTweetElement = tweetObject => {
  const tweet = `
  <article>
    <header>
      <div class="left">
        <img src="${tweetObject.user.avatars}">
        <span class="name">${tweetObject.user.name}</span>
      </div>
      <div class="right">
        <span class="handle">${tweetObject.user.handle}</span>
      </div>
    </header>
    <main>
      <div class="body">${tweetObject.content.text}</div>
    </main>
    <footer>
      <span class="date-created">${Math.round(
        (Date.now() - tweetObject.created_at) / 1000 / 60 / 60 / 24
      )} days ago</span>
    </footer>
  </article>;
  `;
  return $(tweet);
};

$(function() {
  renderTweets(tweetData);
});
