"use client"
import Users from "../components/Users";

export default function HomePage(){
    return
    <section>
        <h1>hello world</h1>
        {
            window.localStorage.getItem('token')
        }
        <User/>
    </section>
}