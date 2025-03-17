x = int(input())
d = int(input())
count = 0

for i in str(x):
    if int(i) == d:
        count += 1

print(count)