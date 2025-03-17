def sleep_in(weekday, vacation):
    return not weekday or vacation

x = input().strip().lower() == "true"
y = input().strip().lower() == "true"

print(sleep_in(x, y))
