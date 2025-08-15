"use client"
import { useRouter } from "next/navigation"

const metadata = {
    title: 'About Page',
    description: 'This is the about page of our application.'
}
function AboutPage(){

    const router = useRouter();
    return(
        <section>
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam aliquam architecto ducimus quidem mollitia rerum consequuntur itaque voluptatibus, fugiat ratione ipsum veniam quod animi vel eveniet, voluptatum, necessitatibus voluptates.</p>
         <button className="bg-sky-400 rounded-md" onClick={() => {
            router.push('/');
         }}>
            click
        </button>
        </section>
    )

}

export default AboutPage