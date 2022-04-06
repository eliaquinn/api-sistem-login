const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
        })
        console.log(`Mongodb connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB