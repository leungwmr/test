i = 0
string_list = [["This is question 1", "q1c1, q1c2, q1c3", "q1 answer1"],
    ["This is quesion2", "q2c1,a2c2,q2c3", "q2 answer1"]]
while i <= len(string_list) - 1:
    print("Question " + ("" + str((i + 1))) + ":" + string_list[i][0])
    print("Option : " + string_list[i][1])
    print("The correct answer is " + string_list[i][2])
    i += 1