const rockPaperScissors = require('./rockPaperScissors');

test('Verify the case for tie', () => {
    expect(rockPaperScissors.playRound('rock', 'rock')).toBe('TIE');
});
test('Verify the case for win', () => {
    expect(rockPaperScissors.playRound('rock', 'scissors')).toBe('WIN');
});
test('Verify the case for lose', () => {
    expect(rockPaperScissors.playRound('rock', 'paper')).toBe('LOSE');
});