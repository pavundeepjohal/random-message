const players = ["Emi Martinez", "Tyrone Mings", "Matty Cash"];
const styles = ["Stalwart", "Baller", "Machine"];
const boots = ["Adidas", "Nike", "Puma"];

const randomNumberGenerator = array => {
    return Math.floor(Math.random() * array.length)
}

const randomPlayer = players[randomNumberGenerator(players)]
const randomStyle = styles[randomNumberGenerator(styles)];
const randomBoots = boots[randomNumberGenerator(boots)];

const message = `The player is ${randomPlayer}, their style is ${randomStyle} and their boots are ${randomBoots}`

console.log(message)