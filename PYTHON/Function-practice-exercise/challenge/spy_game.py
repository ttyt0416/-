def spy_game(num) :
  code = [0, 0, 7, 'x']
  for n in num :
    if n==code[0] :
      code.pop(0)
      
  return len(code)==1