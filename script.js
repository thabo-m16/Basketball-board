let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let count = 0
let countAway = 0

function homeOne(){
    count+=1
    homeScore.textContent = count
}

function homeTwo(){
    count+=2
    homeScore.textContent = count
}

function homeThree(){
    count+=3
    homeScore.textContent = count
}

function awayOne(){
    countAway+=1
    awayScore.textContent = countAway
}

function awayTwo(){
    countAway+=2
    awayScore.textContent = countAway
}

function awayThree(){
    countAway+=3
    awayScore.textContent = countAway
}