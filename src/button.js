 function handleClick() {
    alert("You clikcked me");
 }

function Button () {
    return (
        <button onclick={handleClick}>Click me!</button>
    )
}