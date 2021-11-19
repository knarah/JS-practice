const quotes = [
    {
        quote :  "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it.",
        author : "Harper Lee, To Kill a Mockingbird",
    },
    {
        quote : "Mediocrity is climbing molehills without sweating.",
        author : "Icelandic proverb",
    },
    {
        quote : "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        author : "Antoine de Saint-Exupéry, The Little Prince",
    },
    {
        quote : "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.",
        author : "J.D. Salinger, Catcher in the Rye",
    },
    {
        quote : "You will become way less concerned with what other people think of you when you realize how seldom they do.",
        author : "David Foster Wallace, Infinite Jest",
    },
    {
        quote : "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
        author : "J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
    {
        quote : "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
        author : "Charlotte Brontë, Jane Eyre",
    },
    {
        quote : "Dig the well before you are thirsty.",
        author : "Chinese Proverb",
    },
    {
        quote : "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
        author : "Chinese proverb",
    },
    {
        quote : "The way you make your bed, is the way you shall lie.",
        author : "Swedish proverb",
    },
];
const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child")
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

console.log(todayQuote);
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;