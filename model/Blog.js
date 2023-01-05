import mongoose from "mongoose"

const { Schema, model } = mongoose
// const { Schema, model } = require("mongoose")

// const recipeSchema = new Schema({
//   name: String,
//   desc: String,
//   createdAt: String,
//   thumbsUp: Number,
//   thumbsDown: Number
// })

// module.exports = model("Recipe", recipeSchema)

const blogSchema = new Schema({
  title: String,
  slug: String,
  isPublished: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: String,
      content: String,
      votes: Number
    }
  ]
})

// collection name on mongo db will appear as `blogs`
const Blog = model("Blog", blogSchema)

export default Blog
