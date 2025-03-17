a = input()
b = int(input())

if len(a) == 4 and a == a[::-1]:
    correct_answer = 1
else:
    correct_answer = b

if correct_answer == b:
    print("YES")
else:
    print("NO")
