import requests
from bs4 import BeautifulSoup as bs

links = ['https://angel.co/hackerearth']

data = {}


for link in links:
	data[link]={}
	r = requests.get(link)
	soup = bs(r.text)
	data[link]['twitter_url'] = str(soup.find_all("a", class_="twitter_url")[0].get('href'))
	data[link]['facebook_url'] = str(soup.find_all("a", class_="facebook_url")[0].get('href'))
	data[link]['company_url'] = str(soup.find_all("a", class_="company_url")[0].get('href'))
	data[link]['linkedin_url'] = str(soup.find_all("a", class_="linkedin_url")[0].get('href'))
	data[link]['blog_url'] = str(soup.find_all("a", class_="blog_url")[0].get('href'))
	data[link]['size'] = str(soup.find_all("span", class_="js-company_size")[0].get_text()).strip()
	data[link]['name'] = str(soup.find_all("h1", class_="js-startup_name")[0].get_text()).strip()
	data[link]['descrip'] = str(soup.find_all("h2", class_="js-startup_high_concept")[0].get_text()).strip()
	data[link]['location'] = soup.find_all("span", class_="js-location_tags")[0].get_text().encode('ascii','ignore').strip().split('  ')
	data[link]['category'] = soup.find_all("span", class_="js-market_tags")[0].get_text().encode('ascii','ignore').strip().split('  ')


	for i in range(1,len(soup.find("div", class_="founders").find_all('a',class_="profile-link"),2):
		data[link]['founders'].append(str(soup.find("div", class_="founders").find_all('a',class_="profile-link")[i].get_text()).strip())

	for i in range(1,len(soup.find("div", class_="founders").find_all('div',class_="bio")):
		data[link]['founders'].append(str(soup.find("div", class_="founders").find_all('div',class_="bio")[i].get_text().strip())

print data
