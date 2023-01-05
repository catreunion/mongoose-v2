import mongoose from "mongoose"
import Blog from "./model/Blog.js"

mongoose.connect("mongodb+srv://isaac:ynUJJu9a9guZH279@cluster0.k2tca6i.mongodb.net/?retryWrites=true&w=majority")

// const article = new Blog({
const article = await Blog.create({
  title: "test 01",
  slug: "test-01",
  isPublished: true,
  content: "test 123",
  tags: ["YouTube", "video"]
})

// title: String,
// slug: String,
// isPublished: Boolean,
// author: String,
// content: String,
// tags: [String],
// createdAt: Date,
// updatedAt: Date,
// comments: [
//   {
//     user: String,
//     content: String,
//     votes: Number
//   }
// ]

// await article.save()

// return the 1st blog post
// const firstArticle = await Blog.findOne({})
// console.log(firstArticle)
// console.log(article)

article.title = "Test 01"
await article.save()
console.log(article)

const article2 = await Blog.findById("63b12531ac4c377de2e6cb8e", "title slug content").exec()
console.log(article2)
