$(document).ready(function() {
  $("textarea", ".new-tweet").on("keydown", function() {
    let tweetLength = this.value.length;
    let remainingChars = 140 - tweetLength;
    let counter = $(this)
      .next()
      .next();
    counter.html(remainingChars);
    if (remainingChars < 0) {
      counter.css({ color: "red" });
    }
  });
});
