import requests
from bs4 import BeautifulSoup as bs

site_info = requests.get("https://www.indeed.com/jobs?q=python&start=0")
site_text = site_info.text
site_bs = bs(site_text,"html.parser")


def paginate() :
  page_list = []
  site_page = site_bs.find_all('span',{'class':'pn'})
  for site_pages in site_page :
    page_list.append(site_pages.text)
  return page_list[:-1]
  print(page_list)
"""
def title() :
  site_job_title = site_bs.find_all('div',{'class':'title'})

  list_title = []

  for job_title in site_job_title :
    job_title_text = job_title.text
    list_title.append(job_title_text.strip())
  return(list_title)

print(title())
"""

paginate()