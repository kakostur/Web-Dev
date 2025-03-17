def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return (a < 0 < b) or (b < 0 < a)
