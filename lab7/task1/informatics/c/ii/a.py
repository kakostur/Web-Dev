x = int(input())
i = 1

while i <= x:
    if (i ** 0.5).is_integer():
        print(i)
    i += 1