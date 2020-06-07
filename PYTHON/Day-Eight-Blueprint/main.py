import os
import csv
import requests
from bs4 import BeautifulSoup as bs

os.system("clear")
alba_url = "http://www.alba.co.kr"

def link_infos(target_page) :
  url = target_page
  r = requests.get(url)
  soup = bs(r.text,'html.parser')
  return(soup)
  
rs = link_infos(alba_url)
rdiv = rs.find("div", {'id' : 'MainSuperBrand'})
rspan = rdiv.find_all('span', {'class':'company'})
rlink = rdiv.find_all('a')

def get_links() :
  r_link_list = []
  for rhrefs in rlink :
    rhref = rhrefs.attrs['href']
    if 'alba' not in rhref :
      continue
    elif rhref in r_link_list :
      continue
    else :
      r_link_list.append(rhref)
  return(r_link_list)
  
link_list = get_links()

def get_elements(element) :
  elements_list = []
  for elements in element :
    elements = elements.text
    elements = elements.replace('\xa0', ' ')
    elements_list.append(elements)
  return elements_list


#def get_site_infos (site)
link = link_infos('http://health-pulmuone.alba.co.kr/job/brand/')
rtbody = link.find('tbody')
place = rtbody.find_all('td', {'class':'local'})
title = rtbody.find_all('span', {'class':'title'})
time = rtbody.find_all('span', {'class':'time'})
company = rtbody.find_all('span', {'class':'company'})
pay_type = rtbody.find_all('span', {'class':'payIcon'})
pay = rtbody.find_all('span', {'class':'number'})

place = get_elements(place)
title = get_elements(title)
time = get_elements(time)
company = get_elements(company)
pay_type = get_elements(pay_type)
pay = get_elements(pay)

print(company)

#print(get_dict)







