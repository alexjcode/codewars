// create a function that takes in a sentence with ASCII emoticons and converts them into emojis
// input => output
// :) => 😁
// :( => 🙁
// <3 => ❤️

{
  ':)': '😁',
}

const ascii2emoji = ascii => {
  let emoji = ascii.split("<3").join('❤️') // replace hearts
  emoji = emoji.split(":(").join('🙁') // replace frowns
  emoji = emoji.split("):").join('🙁') // frown alt
  emoji = emoji.split(":)").join('😁') // replace smiles
  emoji = emoji.split("(:").join('😁') // smile alt
  return emoji
}
