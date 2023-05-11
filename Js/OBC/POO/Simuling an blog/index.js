const Author = require("./Author");

const author = new Author('Luan')
const post = author.writePost('Title of post', 'Lorem ipsum dolor sic...')
post.addComment('Jorge' , 'This is many cool')
post.addComment('Bruno', 'Hey brother')

console.log(post)
