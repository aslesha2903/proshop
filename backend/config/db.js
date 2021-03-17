import mongoose from "mongoose"

/* Async/Await was created to simplify the process 
of working with and writing chained promises. 
Async functions return a Promise. If the function 
throws an error, the Promise will be rejected. 
If the function returns a value,
 the Promise will be resolved.
  Synchronous code is “a bunch of statements
   in sequence”; each statement has to wait for 
   the previous one to finish executing. 
   
   Asynchronous code takes statements outside of the main 
   program flow, allowing the code after the asynchronous call 
   to be executed immediately without waiting. */

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB
