$(document).ready(function() {
  $("textarea", ".new-tweet").on("input", function() {
    let tweetLength = $(this).val().length;
    let remainingChars = 140 - tweetLength;
    let counter = $(this)
      .parent()
      .find("span.counter");
    counter.html(remainingChars);
    if (remainingChars < 0) {
      counter.css({ color: "red" });
    } else {
      counter.css({ color: "" });
    }
  });
});
