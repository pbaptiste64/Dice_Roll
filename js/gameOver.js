function gameOver(winner){
    const circlePosition = circle.getBoundingClientRect()

    winner.style.top = circlePosition.top + 'px'
    winner.style.left = circlePosition.left + 'px'
    winner.classList.add('winner')
    winner.classList.add('alter-ego')

    setTimeout(function(){
        //make all the elements return to its normal position so that i can play again after the game is over.

    }, 400)
}
