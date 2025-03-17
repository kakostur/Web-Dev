def last2(s):
    if len(s) < 2:
        return 0
    last2_sub = s[-2:]
    count = sum(1 for i in range(len(s) - 2) if s[i:i+2] == last2_sub)
    return count
