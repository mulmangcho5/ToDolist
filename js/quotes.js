const quotes = [
{
    quote:"No pain, No gain.",
    author:"-Benjamin Franklin-",
},
{
    quote:"The dice is cast.",
    author:"-Julius caesar-",
},
{
    quote:"When they go low, we go high.",
    author:"-Michelle Obama-",
},
{
    quote:"I was never less alone than when by myself.",
    author:"-Edward Gibbon-",
},
{
    quote:"Seeing is believin.",
    author:"-Thomas Fuller-",
},
{
    quote:"The will of man is his happiness.",
    author:"-Friedrch von schiller-",
},
{
    quote:"This too shall pass away.",
    author:"-Abraham Lincoln-",
},
{
    quote:"When in doubt, choose change.",
    author:"-Lily Leung-",
},
{
    quote:"Life is unfair, get used to it.",
    author:"-Bill Gates-",
},
{
    quote:"Time is flying never to return.",
    author:"-virgil-",
},
{
    quote:"Life is all about timing.",
    author:".",
},
{
    quote:"I find harder I work, the more luck i have.",
    author:"-Thomas Jefferson-",
},
{
    quote:"It is not length of life, But depth of life.",
    author:"-Ralph Waldo Emerson-",
},
{
    quote:"It is kind of fun to do the impossible.",
    author:"-Walt Disney-",
},
{
    quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
    author:"-Michael Jordan-",
},
{
    quote:"Grind Hard, Shine Hard.",
    author:"-Dwayne Johnson-",
},
{
    quote:"The road to success and the road to failure are almost exactly the same.",
    author:"-Colin R. Davis-",
},
{
    quote:"It is better to fail in originality than to succeed in imitation.",
    author:"-Herman Melville-",
},
{
    quote:"Love asks me no questions, and gives me endless support",
    author:"-William Shakespeare -",
},
{
    quote:"The supreme happiness in life is the conviction that we are loved.",
    author:"-Victor Hugo-",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
