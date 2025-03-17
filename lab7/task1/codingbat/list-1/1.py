def first_last6(nums):
    n = len(nums)-1
    
    if nums[0] == 6 or nums[n] == 6:
        return True
    else:
        return False
