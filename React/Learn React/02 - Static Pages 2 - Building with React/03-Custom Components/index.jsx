import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function MyPage() {
    return (
        <div>
            <h1>Why I'm Excited About Learning React!</h1>
            <ol>
                <li>It's a great framework!</li>
                <li>It's very popular!</li>
                <li>It's exciting.</li>
                <li>I want to be Job ready.</li>
            </ol>
        </div>
    )
}


function Page() {
    return (
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    )
}

root.render(
    <main>
        <MyPage />
        <Page />
    </main>
)
