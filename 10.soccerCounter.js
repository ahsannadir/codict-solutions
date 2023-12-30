/* Modify sumPoints function so it takes the number of wins, draws and losses and returns the total points made by the team
Note
Win: 3 points.
Draw: 1 point.
Loss: 0 points. */

function sumPoints(w, d, l) {
    let win = w * 3, draw = d * 1;
    return win + draw;
}