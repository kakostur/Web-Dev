n = int(input())
arr = []
k = 0

for i in range(n):
    arr[i] = int(input())

for i in range(n):
    if arr[i] >= 0:
        k += 1

print(k)