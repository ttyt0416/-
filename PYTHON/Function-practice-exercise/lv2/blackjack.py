def blackjack(a, b, c) :
  if a==11 or b==11 or c==11 :
    total=a+b+c-10
  else :
    total=a+b+c
    
  if total<=21 :
    return(total)
  else :
    return("BUST")

