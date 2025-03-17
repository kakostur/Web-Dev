def common_end(a, b):
    na = len(a)-1
    nb = len(b)-1
    
    if a[0] == b[0] or a[na]==b[nb]:
        return True
    else:
        return False