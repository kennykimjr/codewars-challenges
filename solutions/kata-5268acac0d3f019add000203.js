// Original Kata: https://www.codewars.com/kata/5268acac0d3f019add000203
// Solution

function Automaton()
{
   this.states = 'q1';
}

Automaton.prototype.readCommands = function(commands)
{
  let newState = 'q1'
  commands.forEach(command => {
    if (newState === 'q1' && command === '1') {
      newState = 'q2'
    }
    else if (newState === 'q1' && command === '0') {
      newState = 'q1'
    }
    else if (newState === 'q2' && command === '1') {
      newState = 'q2'
    }
    else if (newState === 'q2' && command === '0') {
      newState = 'q3'
    }
    else if (newState === 'q3') {
      newState = 'q2'
    }
  })

  if (newState === 'q2') { return true }
  return false
}

var myAutomaton = new Automaton();
