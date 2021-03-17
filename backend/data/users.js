// 2 normal users and 1 admin

import bcrypt from "bcryptjs"

const users = [
	{
		//placeholders:
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},

	{
		//placeholders:
		name: "John Doe",
		email: "john@example.com",
		password: bcrypt.hashSync("123456", 10),
	},

	{
		//placeholders:
		name: "Jane Doe",
		email: "Jane@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
]

export default users
