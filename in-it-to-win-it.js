// Challenge #18 - In It to Win It
// There are a number of different stands and games at this year's festival where
// the townspeople of Codeville can win raffle tickets! There are three different
// kinds of tickets someone can win, and they each correspond to a raffle. There
// are red tickets for the Red Robin Raffle, green tickets for the Green Machine
// Raffle and blue tickets for the Deep Blue Sea Raffle. The people of Codeville
// love games and always end up with a large number of tickets. So this year,
// we'll build a machine that not only sorts and counts the number of each ticket,
// but also tells people which raffle they have the best odds of winning based
// on the current entries.

// Instructions
// Our first function, bestOdds(), will receive two parameters.
// The first parameter will be an array of strings that are either red, green,
// or blue, representing the tickets that a particular person has.
// The second parameter is an object that shows how many entries there currently
// are for each raffle. By looking at the tickets that the particular person has,
// your function should return a string that lets the person know which raffle
// they have the highest chance of winning. The format of the response should be
// as follows (without the square brackets):
// "You have the best odds of winning the [COLOUR] raffle."

// bestOdds(tickets, raffleEntries)
// countVotes(myTickets) => myRaffleEntries 

// While we could do this all within the bestOdds() function,
// we want to keep our code DRY, so we will also need to complete a helper function.
// This helper function countTickets() will be called from within bestOdds()
// and receive the array of strings that are either red, green, or blue.
// The function will count how many of each string there are,
// and then return an object with the individual counts.
​

const countTickets = myTickets => {
  //
}

const bestOdds = (tickets, raffleEntries) => {
  const myTix = countTickets(tickets)
  const redOdds = myTix.red / raffleEntries.red
  const greenOdds = myTix.green / raffleEntries.green
  const blueOdds = myTix.blue / raffleEntries.blue
  const best = Math.max(redOdds, greenOdds, blueOdds)
  let color
  if (best === redOdds) {
    color = 'red'
  } else if (best === greenOdds) {
    color = 'green'
  } else if (best === blueOdds) {
    color = 'blue'
  } else {
    color = 'other'
  }
  return `You have the best odds of winning the ${color} raffle.`
}

// => myRaffleEntries 


// Input:
// for bestOdds() function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]
​
const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
const output1 = "You have the best odds of winning the red raffle."


// Input:
// for countVotes() helper function
const tickets2 = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]
 
const output2 = {
  red: 2,
  green: 2,
  blue: 1
}
