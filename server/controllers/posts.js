import PostMessage from "../models/postMessage.js"

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
}
const createPost = async (req, res) => {
    const body = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (e) {
        res.status(409).json({ message: e.message })
    }
}

export { getPosts, createPost }