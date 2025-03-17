n = int(input())
arr = []

for i in range(n):
    i = int(input())
    arr.append(i)

for i in range(n):
    if i % 2 == 0:
        print(arr[i], end=" ")