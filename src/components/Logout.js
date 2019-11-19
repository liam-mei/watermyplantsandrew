import React from "react"
import { push } from "connected-react-router";
export function Logout() {
    console.log('hi')
	localStorage.removeItem("token")
	localStorage.removeItem("userID")
	return push("/login")
}

