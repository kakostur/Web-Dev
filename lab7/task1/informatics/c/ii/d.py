n = int(input())

while 1 < n:
    if n % 2 != 0:
        print("NO")
        exit()
    n //= 2

print("YES")
    