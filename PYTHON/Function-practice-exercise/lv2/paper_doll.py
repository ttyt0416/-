def paper_doll(text) :
  my_list=[]
  for word in range(len(text)) :
      if word!=len(text) :
        my_list.append(text[word]*3)
        sentense="".join(my_list)
  return (sentense)