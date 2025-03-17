a = int(input())
x = 0
pw = 0

for i in str(a)[::-1]:
    x += int(i) * 2 ** pw
    pw += 1

print(x)