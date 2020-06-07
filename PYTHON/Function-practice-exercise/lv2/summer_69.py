def summer_69(arr) :
  sum=0
  add_on=True
  for a in arr :
    while add_on :
      if a!=6 :
        sum=sum+a
        break 
      else :
        add_on=False
      
    while not add_on :
      if a!=9 :
        break
      else :
        add_on=True
        break
  return (sum)