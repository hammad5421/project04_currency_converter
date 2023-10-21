import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "SAR": 0.013,
    },
    "USD": {
        "PKR": 279,
        "USD": 1,
        "SAR": 3.75,
    },
    "SAR": {
        "PKR": 73.66,
        "USD": 0.27,
        "SAR": 1,
    },
};
async function main() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "SAR", "USD"],
            message: "Enter your currency",
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "SAR", "USD"],
            message: "Enter your conversion currency",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
        },
    ]);
    let { from, to, amount } = answers;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`The amount you entered: ${amount} ${from} is converted to ${result} ${to}`);
    }
    else {
        console.log(`Invalid inputs`);
    }
}
main();
