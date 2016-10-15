from BeautifulSoup import BeautifulSoup
import requests
import json

url = 'http://likealyzer.com/facebook/edukartdotcom'
r = requests.get(url)

soup = BeautifulSoup(r.text)

sidebar_info_divs = soup.findAll('div',id='sidebar1')[0]

performance_box = sidebar_info_divs.findAll('div',{'class':'sidebarinfo'})[1].findAll('span',{'class':'spanrub'})

posts_box = sidebar_info_divs.findAll('div',{'class':'sidebarinfo'})[2].findAll('span',{'class':'spanrub'})

likes=performance_box[0].getText().split(':')[-1]
likes_growth=performance_box[1].getText().split(':')[-1]
engagement_rate =performance_box[3].getText().split(':')[-1]
posts_per_week = posts_box[0].getText().split(':')[-1]
likes_per_post = posts_box[1].getText().split(':')[-1]

data = {}
data[url] = {}

#print likes,likes_growth,engagement_rate,posts_per_week,likes_per_post
data[url]['likes']=likes
data[url]['likes_growth']=likes_growth
data[url]['engagement_rate']=engagement_rate
data[url]['posts_per_week']=posts_per_week
data[url]['likes_per_post']=likes_per_post
json = json.dumps(data)
print json




