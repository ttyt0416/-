def has_33(num) :
  for n in range(0, len(num)-1) :
    if num[n] == 3 and num[n+1] == 3 :
      return True
    elif n!=len(num)-2 :
      continue
    else :
      return False