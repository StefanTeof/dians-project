import requests
import json
import pandas as pd


api_key = "c04abbbdee684ff0b8ee88d7075c940f"

get_cities_url = "https://countriesnow.space/api/v0.1/countries/cities"
PARAMS = {"country": "macedonia"}

r = requests.post(url = get_cities_url, data=PARAMS)

city_names = r.json()['data']

# print(city_names)


def getPlaceIDs(city):
    url = "https://api.geoapify.com/v1/geocode/search?text=" + city +"&format=json&apiKey="+api_key
    r = requests.get(url).json()['results']
    if len(r) == 0:
        return -1
    place_ID = r[0]['place_id']
    name = r[0]['city']
    bbox = r[0]['bbox']
    lon1 = bbox['lon1']
    lat1 = bbox['lat1']
    lon2 = bbox['lon2']
    lat2 = bbox['lat2']

    return [place_ID, name, lon1, lat1, lon2, lat2]

data = []

for city in city_names:
    item = {}
    l = getPlaceIDs(city)
    if l == -1:
        continue
    item['ID'] = l[0]
    item['Name'] = l[1]
    item['lon1'] = l[2]
    item['lat1'] = l[3]
    item['lon2'] = l[4]
    item['lat2'] = l[5]
    data.append(item)

df = pd.DataFrame(data)
df['Name'] = df['Name'].map(lambda x: x.encode('unicode-escape').decode('utf-8'))

df.to_csv("C:/Users/stefa/OneDrive/Desktop/municipalities.csv")
