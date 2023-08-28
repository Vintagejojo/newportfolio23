import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"



export default function Homepage() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <Hero />
            <AboutMe />
            <Projects />
        </main>
    )
}