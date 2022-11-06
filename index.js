function writeCards(arrayStringNames, event){
  let message = []
  for(let i=0; i<arrayStringNames.length; i++){
    message.push(`Thank you, ${arrayStringNames[i]}, for the wonderful ${event} gift!`)
  }
  return message
}

function countDown(n){
  let down = 10
  while(down>= 0){
  console.log(down--)
  }
  return down
}