const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let command = input.value.trim();
        printLine(">> " + command);
        handleCommand(command);
        input.value = "";
    }
});

function printLine(text) {
    let div = document.createElement("div");
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
}

function handleCommand(cmd) {
    switch(cmd.toLowerCase()) {
        case "help":
            printLine("Commands: help, about, clear, hack");
            break;

        case "about":
            printLine("Hi, I'm Yaasir - Frontend Developer 💻");
            break;

        case "hack":
            fakeHack();
            break;

        case "clear":
            output.innerHTML = "";
            break;

        default:
            printLine("Command not found ❌");
    }
}

function fakeHack() {
    let steps = [
        "Initializing hack...",
        "Bypassing firewall...",
        "Accessing server...",
        "Decrypting data...",
        "Access Granted ✅"
    ];

    let i = 0;
    let interval = setInterval(() => {
        printLine(steps[i]);
        i++;
        if (i === steps.length) clearInterval(interval);
    }, 700);
}