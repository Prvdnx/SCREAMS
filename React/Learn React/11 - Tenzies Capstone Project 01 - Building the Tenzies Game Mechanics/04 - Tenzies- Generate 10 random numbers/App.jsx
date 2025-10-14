import Die from "./Die"

export default function App() {

    /**
     * Challenge:
     * 
     * Write a function (generateAllNewDice) that returns an array 
     * of 10 random numbers between 1-6 inclusive.
     * 
     * Log the array of numbers to the console for now
     */

    // const generateAllNewDice = () => {
    //     let nums = []
    //     for (let i = 0; i < 10; i++) {
    //         nums[i] = Math.floor(Math.random() * 6) + 1
    //     }
    //     return (nums)
    // }

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}