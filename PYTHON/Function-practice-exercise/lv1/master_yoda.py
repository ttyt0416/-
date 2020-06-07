def master_yoda(sentense) :
  word=sentense.split()
  word.reverse()
  rev=" ".join(word)
  return(rev)

print(master_yoda("We are ready"))