let i = 0
let string_list = [["This is question 1", "q1c1, q1c2, q1c3", "q1 answer1"], ["This is quesion2", "q2c1,a2c2,q2c3", "q2 answer1"]]
while (i <= string_list.length - 1) {
    console.log("Question " + ("" + ("" + (i + 1))) + ":" + string_list[i][0])
    console.log("Option : " + string_list[i][1])
    console.log("The correct answer is " + string_list[i][2])
    i += 1
}
