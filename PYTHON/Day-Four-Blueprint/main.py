import requests

def get_url() :
  url_list = []
  url = input ('please write a URLs you want to check (seperated by comma)')
  url = url.lower()
  url = url.split(',')
  for urls in url :
    urls = urls.strip()
    if 'http://' not in urls :
      urls = f'http://{urls}'
      url_list.append(urls)
    else :
      url_list.append(urls)
  return (url_list)


def diag_url() :
  while True :
    for result_url in get_url() :
      try :
        r = requests.get(result_url)
        if r.status_code == 200 :
          print (f'{result_url} is up')
      except :
        if '.com' not in result_url :
          result_url = result_url[7:]
          print(f'{result_url} is not a valid URL')
        else :
          print (f'{result_url} is down')
    reply = input('Do you want to start over? y/n')
    if reply == "y" :
      continue
    elif reply == "n" :
      print('k. bye')
      break
    else :
      print("not a vaild answer")
      reply = input('Do you want to start over? y/n')
      if reply == "y" :
        continue
      elif reply == "n" :
        print('k. bye')
        break


diag_url()
