def array_front9(nums):
  n = len(nums)
  if n <= 4:
    for i in range(n):
      if nums[i] == 9:
        return True 
        quit()
  else:
    for i in range(4):
      if nums[i] == 9:
        return True
        quit()
  
  return False

res = array_front9([1, 2, 4, 3, 4])

print(res)