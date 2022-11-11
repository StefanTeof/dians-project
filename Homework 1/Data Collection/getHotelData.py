import requests
import json
import pandas as pd
import csv
import cyrtranslit

place_ids_df = pd.read_csv("C:/Users/stefa/OneDrive/Desktop/municipalities.csv")

place_ids = place_ids_df['ID'].tolist()

places_to_delete = []

api_key = "c04abbbdee684ff0b8ee88d7075c940f"

data = []

def getHotels(place_id):
    url = "https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=place:" + place_id + "&limit=20&apiKey=" + api_key
    r = requests.get(url).json()['features']
    if len(r) == 0:
        places_to_delete.append(place_id)
        return -1 
    for i in r:
        prop = i['properties']
        hotel_id = prop['place_id']
        if 'name' not in prop:
            continue
        name = cyrtranslit.to_latin(prop['name'], 'mk')
        lon = prop['lon']
        lat = prop['lat']
        formatted = cyrtranslit.to_latin(prop['formatted'], 'mk')
        stars = 'NR'
        if 'stars' in prop['datasource']['raw']:
            stars = prop['datasource']['raw']['stars']
        building = 'unknown'
        if 'building' in prop['datasource']['raw']:
            if prop['datasource']['raw']['building'] == 'yes':
                 building = 'hotel'
            else:
                building = prop['datasource']['raw']['building']
        city_id = place_id
        print(city_id)
        item = {}
        item['ID'] = hotel_id
        item['Name'] = name
        item['Lon'] = lon
        item['Lat'] = lat
        item['Formatted'] = formatted
        item['Stars'] = stars
        item['Building'] = building
        item['City_ID'] = city_id
        data.append(item)
    

# s = getHotels('513d64ca87a07035405905d0398952024540f00101f901c24c6a0000000000c00205')
# print(s)

for place_id in place_ids:
    getHotels(place_id)


df = pd.DataFrame(data)

df.to_csv("C:/Users/stefa/OneDrive/Desktop/hotels.csv")

