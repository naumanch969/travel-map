import User from "../models/user.js"
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = bcrypt.hash(password, 12)
        const newUser = await User.create({ name, email, password: hashedPassword })
        res.status(200).json({ result: newUser, message: 'user registered successfully' })
    } catch (err) {
        res.status(500).json({ error: err, message: 'error in registering user' })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password: input_password } = req.body

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: 'Wrong Credentials' })

        const isPasswordCorrect = bcrypt.compare(input_password, user.password)
        if (isPasswordCorrect) return res.status().json({ message: 'Wrong Credentials' })

        const { password, ...other } = user
        res.status(200).json({ result: other, message: 'user logged in successfully' })
    } catch (err) {
        res.status(500).json({ error: err, message: 'error in login' })
    }
}