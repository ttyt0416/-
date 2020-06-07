import os
import requests
from bs4 import BeautifulSoup as bs
import operator

os.system("clear")
url = "https://www.iban.com/currency-codes"


def setting_for() :

  result = requests.get(url)
  soup = bs(result.text, "html.parser")
  nations_list = soup.find('tbody')
  nation = nations_list.find_all('td')
  
  nations = []
  divided_nations = []

  for national in nation :
    nations.append(national.text)


  for i in range(0,len(nations),1) :
    nations[i] = str(nations[i])


  for i in range(0, len(nations), 4) :
    divided_nations.append(nations[i:i+4])

  #print
  print ('Hello! Please choose select a country by number :')
  ip = input
  for i in range(0, 268, 1) :
    print(f'# {divided_nations[i][3]} {divided_nations[i][0]} {divided_nations[i][1]}')
  if ip is not int :
    print ("That wasn't a number.")
  elif ip not in divided_nations :
    print ('Choose a number from the list.')
  elif ip in divided_nations :
    print (f'You chose {divided_nations[i][{ip}]} The currency code is {divided_nations[i][{ip}]}')

 

setting_for()