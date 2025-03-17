N = int(input())  
arr = [] 

for _ in range(N):
    command, *args = input().split()
    if command == 'insert':
        i, e = map(int, args)
        arr.insert(i, e)
    elif command == 'print':
        print(arr)
    elif command == 'remove':
        e = int(args[0])
        arr.remove(e)
    elif command == 'append':
        e = int(args[0])
        arr.append(e)
    elif command == 'sort':
        arr.sort()
    elif command == 'pop':
        arr.pop()
    elif command == 'reverse':
        arr.reverse()