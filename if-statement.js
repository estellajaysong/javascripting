var fruit = 'orange'

function action(argument) {
    var a1 = "The fruit name has more than five characters.";
    var a2 = "The fruit name has five characters or less."
if (argument.length > 5) {
    return a1
} else {
    return a2
}
}

console.log(action(fruit))