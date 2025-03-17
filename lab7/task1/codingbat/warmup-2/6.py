def array_count9(nums):
    n = len(nums)
    cnt = 0
  
    for i in range(n):
        if nums[i] == 9:
            cnt += 1
    return cnt