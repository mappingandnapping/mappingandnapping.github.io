var roadtrip = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637043, 62.075445],
                    [-65.637499, 62.076090]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637499, 62.076090],
                    [-65.637557, 62.076174]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-65.637557, 62.076174],
                    [-66.337933, 62.545749]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

//red = lived here (more than 2wk)
//yellow = to go
//green = worked/lived here
//blue = visited
var markers = {
    "type": "FeatureCollection",
    "features": [
//recent additions
        {"geometry": {
                "type": "Point",
                "coordinates": [-119.39534,49.88799]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Kelowna"
        },
		        {"geometry": {
                "type": "Point",
                "coordinates": [-120.772672,50.104726]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Merritt"
        },
		        {"geometry": {
                "type": "Point",
                "coordinates": [-119.27789,52.83017]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Valemount"
        },
		
				        {"geometry": {
                "type": "Point",
                "coordinates": [-122.78463,49.18452]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Surrey"
        },

				        {"geometry": {
                "type": "Point",
                "coordinates": [-112.07796,53.50173]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Vegreville"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-122.628182,49.09815]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Green"
            },
            "id": "Langley"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-79.128771,44.107249]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Uxbridge"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-112.710543,51.462218]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Drumheller"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-115.555573,51.122619]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Banff - Sulpher Mtn"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-115.345384,51.086455]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Banff - Canmore"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-114.75597,50.87386]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Bragg Creek Cave"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-118.075005,53.049655]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Jasper"
            },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-113.9896,52.95885]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Pigeon Lake"
            },
	
				        {"geometry": {
                "type": "Point",
                "coordinates": [-85.844087,10.25043]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Costa Rica"
        },		
				        {"geometry": {
                "type": "Point",
                "coordinates": [-79.078474,43.261299]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Niagara on the Lake"
        },	
				        {"geometry": {
                "type": "Point",
                "coordinates": [-102.807716,54.64737]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Green"
            },
            "id": "Foran Camp"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-106.661898,52.180589]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Red"
            },
            "id": "Saskatoon"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-63.126679,46.23308]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Charlottetown"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-52.696766,47.569114]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Newdoundland"
        },
		
		
		
						        {"geometry": {
                "type": "Point",
                "coordinates": [-120.75929,49.545484]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Princeton"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-120.522089,49.455774]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Tulameen"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-120.694068,49.508714]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Coalmont"
        },
				        {"geometry": {
                "type": "Point",
                "coordinates": [-116.195754,43.564472]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Blue"
            },
            "id": "Boise"
        },
						        {"geometry": {
                "type": "Point",
                "coordinates": [-107.755434,37.151561]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Green"
            },
            "id": "Durango"
        },
						        {"geometry": {
                "type": "Point",
                "coordinates": [-106.920905,37.820362]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Green"
            },
            "id": "Creede"
        },
//to go
        {"geometry": {
                "type": "Point",
                "coordinates": [24.708252,60.191638]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Finland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-122.378082,37.619697]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Silicon Valley"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-133.022461,70.657068]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Arctic Ocean"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [166.678047,-77.846325]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Antarctica"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [18.973389,69.65329]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Norway"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-70.653076,-33.439909]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Chile"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [24.422607,45.883237]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Engagement",
                "color": "Yellow"
            },
            "id": "Romania"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [139.855957,35.766294]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Japan"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [127.496338,36.31979]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Korea"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [197.753906,55.066884]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Alaska Aleutians"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [174.770508,-36.86131]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "New Zealand"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [151.083984,-33.887351]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Australia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [160.861816,58.229276]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Russia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [37.624741,55.7515]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Moscow, Russia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-21.950684,64.149121]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Iceland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [16.743164,78.836167]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Svalbard"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-51.696167,64.168395]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Greenland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-6.771698,62.007317]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "...",
                "color": "Yellow"
            },
            "id": "Faroe Islands"
        },

//been
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.542123,43.471531]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is where I did my undergrad. I studied geophysics in the faculty of Earth Science.",
                "color": "Red"
            },
            "id": "University of Waterloo"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.244712,42.983679]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I visited a friend here once. I didn't like it very much lol.",
                "color": "Blue"
            },
            "id": "London, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-79.059312,43.109098]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I have been here twice. Once when I was little with my family, and the second time was around 2015 or so when a friend of mine was going to school in St Catherine's. I went to visit him & went on the whirlpool jet boat.",
                "color": "Blue"
            },
            "id": "Niagara Falls, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-79.411942,43.633249]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I can't remember how many times I've been here. My grandparents used to live in Toronto when I was little. I spoke at the ArcticNet scientific conference at the Beanfield Center in Dec 2022, presenting my thesis work. Id you get a chance to go to the ROM, they have some really cool exhibits.",
                "color": "Blue"
            },
            "id": "Toronto, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-75.730556,45.449509]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I spoke at the Canadian Hydrographic Conference in June 2022 in Gatineau. It was my first public talk ever! It was hosted in the casino by Lac Leamy.",
                "color": "Blue"
            },
            "id": "Gatineau, Quebec"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-75.700264,45.425511]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a school roadtrip in grade 8. I also remember visiting Parliment with my grandparents when I was younger. When I spoke at the CHC in Gatineau in 2022, I went on a riverboat tour hosted by Kongsberg. They drove right down the ON/QC border past the backside of Parliment. It was a great view.",
                "color": "Blue"
            },
            "id": "Ottawa, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.953102,43.731538]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My step dad's family lives in Listowel. They own a few farms between them. I used to like visiting in the summer - petting the barn cats and the cows, and picking out rocks from the field lol.",
                "color": "Blue"
            },
            "id": "Listowel, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.982832,43.371459]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I saw a few plays here when I was younger. A friend of mine from elementary school was in the King and I!",
                "color": "Blue"
            },
            "id": "Stratford, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-78.928804,43.893553]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My cousin's wedding was here. I visited Whitby a lot growing up because I have an aunt/uncle/cousins that live here.",
                "color": "Blue"
            },
            "id": "Whitby, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-79.41772,44.609099]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I used to have an aunt/uncle/cousins in Orillia, but they moved to Alberta.",
                "color": "Blue"
            },
            "id": "Orillia, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-71.224612,46.80531]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a school roadtrip in grade 11.",
                "color": "Blue"
            },
            "id": "Quebec City, Quebec"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-73.55601,45.504452]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My sister lives here! I have been here twice, but both times I was only driving through on the way to NB. I would like to stop and explore more. The city is really pretty, and my sister has a really cute living/working space.",
                "color": "Blue"
            },
            "id": "Montreal, Quebec"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.218212,42.659306]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a beach roadtrip with Casey in Aug 2022. Lake Erie is nice.",
                "color": "Blue"
            },
            "id": "Port Stanley, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.410652,42.579946]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a beach roadtrip with Casey in Aug 2022. Not too much to see in town, but the beach was nice & secluded.",
                "color": "Blue"
            },
            "id": "Long Point, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.764352,43.315608]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I used to go here with my family in the summer growing up.",
                "color": "Blue"
            },
            "id": "Grand Bend, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.20895,44.456207]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My friend has a cottage somewhere around here.",
                "color": "Blue"
            },
            "id": "Collingwood, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.033778,46.473501]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My Aunt lives up here. I also stopped here for my undergrad geology field school roadtrip. It's a giant impact crater, with a lot of regional metamorphism, so it's a good spot to study rocks. Science North is also great. And the nickel mine/mint is pretty cool.",
                "color": "Blue"
            },
            "id": "Sudbury, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.770167,46.264778]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I stopped here for my undergrad geology field school roadtrip. I picked up a chunk of igneous carbonitite!",
                "color": "Blue"
            },
            "id": "Espanola, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.732273,46.109488]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I stayed here for 2 weeks for my undergrad geology field school.",
                "color": "Green"
            },
            "id": "Whitefish Falls, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-81.912689,45.879254]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I stopped here for my undergrad geology field school roadtrip. Super cute island. I found some crinoid fossils here.",
                "color": "Blue"
            },
            "id": "Manitoulin Island, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-80.523444,43.45573]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is where I grew up, and where I lived until age 22.",
                "color": "Red"
            },
            "id": "Waterloo, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-114.343708,62.467142]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here for the first time in June of 2017. I got my first real job at Aurora Geosciences, and spent the next 4 years flying out of twin otters & camping in the remote Arctic for months at a time. It was great!!",
                "color": "Red"
            },
            "id": "Yellowknife, Northwest Territories"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-135.166581,60.770923]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here for the first time in the summer of 2018. I spent my first year with AGL in NWT and Nunavut, so working in the mountains was quite a shock compared to the flat tundra.",
                "color": "Red"
            },
            "id": "Whitehorse, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-133.705244,59.574027]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in __ of 2019. I did a DCIP survey in the thickest bush that I have ever encountered. It took 4x longer than I anticipated. The client also did not want to splurge on line cutting, so there was nowhere for the helicopter to land! We had to pull off some sneaky, dangerous manouevers.",
                "color": "Green"
            },
            "id": "Atlin, British Columbia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-123.131086,49.26938]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I stayed at the Granville Island hotel on an overnight layover. It was so nice! I went to the market in the morning. I wish I could have stayed longer.",
                "color": "Blue"
            },
            "id": "Granville Island, Vancouver, British Columbia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-123.934236,49.163045]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I visited my cousins here when I was little, but I don't remember it at all.",
                "color": "Blue"
            },
            "id": "Nanaimo, British Columbia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-92.984208,62.355425]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in June of 2017. I did a DCIP survey. It was my first survey ever!! We were there for a month and a bit. It was pretty easy, all things considered. Darrell was my crew chief.",
                "color": "Green"
            },
            "id": "Whale Cove, Nunavut"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-109.08358,63.478392]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in July of 2017 and (June?) of 2018. I did a gravimetry survey both times. The first year was when Silly James was there lol. I also met Katie, and the crazy drillers. I was working with Felix. The second time I was working with Darrell, surveying Blob Lake. Site Mobe: Twin otter. Grid Mobe: AStar. Company: Kannady North Diamonds.",
                "color": "Green"
            },
            "id": "Kelvin Camp, Northwest Territories"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-110.619428,64.713689]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in Aug of 2017. I did a mag survey. I was only there for a week. It was a really nice facility - gyms and a music room and a big cafeteria. I was working under Franz while he & Will did HLEM. I went back to uni after.",
                "color": "Green"
            },
            "id": "Ekati Mine, Northwest Territories"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-110.961914,64.930525]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in early spring of 2018. This was when I met Scott. I did mostly grav surveying, but also a bit of towed mag. I think it was around 2-3 weeks. We moved camp once or twice during that time. Pretty sure we were near Diavik at one point (Zeus camp) cause I remember seeing their radio antenna tower.",
                "color": "Green"
            },
            "id": "GGL Camps, Northwest Territories"
        },
//2017 was will + bray (3 jobs - whale cove, kdi, ekati)
//mike was summer 2018 (??, dunnedin, blob lake?, mt anderson, vic gold)
//mike freak out monster stabbing was summer 2019
//ergo hw was spring 2019 (erk asking if i was ok was right after hw)
//2019 jobs (tapped out of hw breakdown1, darrell tried to give me office work, dipped early to buy car in yt, coffee creekx2, atlin)
//i think joe was 2019 too
//2020 jobs (feb proc for gov breakdown2, dawson bathy, coffee creek breakdown3, scott nwt ham lake)
        {"geometry": {
                "type": "Point",
                "coordinates": [-91.161804,63.226205]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Honestly can't remember if I worked here in 2018 or 2019. There was still some snow on the ground, so I'm thinking May? I did mag-VLF though for about 2 weeks. Worked with Will, ugh.",
                "color": "Green"
            },
            "id": "Kahuna Camp, Dunnedin Ventures, Nunavut"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-135.150054,60.210690]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here for 2 weeks filling in for a guy who got a tooth abcess. I think it was around July. It was a fly camp, but truck mobe, so kinda cool. Dirty and smelly lol. I've only ever fly camped in the winter I guess. We were doing an IP survey using an ELRIS Pro. This was directly the day after Mike... Also definitely my first Yukon job ever bc I remember going with Jeremy to buy hiking boots that morning.",
                "color": "Green"
            },
            "id": "Mt Anderson, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-109.805603,63.705376]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in winter/early spring of 2019. We were doing a few surveys - towed mag, grav and CCR. I think this was the one that was by the Ice Road? I tapped out of this one early bc I couldn't take the crew chiefing one morning on a whim...The first of 3 breakdowns over 2019-2020.",
                "color": "Green"
            },
            "id": "HW Camp, Northwest Territories"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-135.829816,64.040149]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in Sept of 2018. I did a DCIP survey under Dave using 2 Txs. Drove up (near Mayo). It was my final job of the season, so I only stayed for 1-2 weeks even though the job was longer. It was very muddy for a lot of the time, and we ended up hitting a rock in the mud with the underside of our truck, breaking the transmission. I mobed out via truck with 2 other random workers who were leaving camp at the same time. Oh, I also put a discharged bear spray into the trash... forgot they incinerate it... super dumb.",
                "color": "Green"
            },
            "id": "Bluto Camp, Victoria Gold Mine, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-139.045974,62.907693]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in the summer of 2019 & 2020. I did mag-VLF surveying on a multi-year grid. Processed/compiled about a quarter of the final dataset. Came back multiple times (probably 3-4x overall?). Was on good terms with the client, but left on a slightly bad note... mental health cop out. Zero production.",
                "color": "Green"
            },
            "id": "Coffee Creek Mine, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-139.431696,64.060678]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here in April of 2020 during the beginning of Covid. I was doing bathymetry with Shawn. It was such a shitty survey honestly... we used a single beam fishfinder. And we couldn't even keep the boat straight in the river current. Multibeam was definitely needed. We drove out though, stayed in a hotel, saw Nick on the street, got our boat stuck... I didn't really have to do anything.",
                "color": "Green"
            },
            "id": "Dawson, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-109.282379,63.891469]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I worked here for Scott in Sept of 2020, right before starting grad school. Doing gravimetry. Twin otter mobe in, then walk mobe 1h to grid. Was a super pretty time of year. I was not fit to work though... let myself get fat & out of shape. After this job, I chilled for a couple months, then roadtripped to ON with Casey in Dec 2020.",
                "color": "Green"
            },
            "id": "Ham Lake, Northwest Territories"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-137.510333,60.752494]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a roadtrip with Casey in summer 2021.",
                "color": "Blue"
            },
            "id": "Haines Junction, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-138.80024,61.252447]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on a roadtrip with Casey in summer 2021.",
                "color": "Blue"
            },
            "id": "Destruction Bay, Yukon"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-66.493227,45.839832]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I biked to here from Fredericton in Oct 2021",
                "color": "Blue"
            },
            "id": "Oromocto, New Brunswick"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-67.054732,45.071202]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I did my hydrographic field school here. It's very quaint and cute. It was also nice to get out on a real ship (the Fundy Spray).",
                "color": "Blue"
            },
            "id": "St Andrews by the Sea, New Brunswick"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-63.591034,44.657372]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I took a train from Moncton to Halifax in 2022(?) to visit my friend Alex. We saw a 100 year old turtle and a bunch of war battalion things.",
                "color": "Blue"
            },
            "id": "Halifax, Nova Scotia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-65.756725,44.624327]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I took the ferry from Saint John to Digby in Oct 2021. It's a really quaint seaside town. Exactly how I pictured Nova Scotia. Really lovely.",
                "color": "Blue"
            },
            "id": "Digby, Nova Scotia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-66.063023,45.281618]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I stayed here overnight on my way to Digby. It should be a vibrant city (it has reversing tides!!), but it's very drab & dilapidated. The town exists pretty much to serve the Irving plant. It definitely embodies all of the worst aspects of NB..",
                "color": "Blue"
            },
            "id": "Saint John, New Brunswick"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-64.795218,46.088715]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to Halifax.",
                "color": "Blue"
            },
            "id": "Moncton, New Brunswick"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-68.315198,47.375815]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to Fredericton.",
                "color": "Blue"
            },
            "id": "Edmunston, New Brunswick"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-125.777031,59.030083]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON. Did not stop at the hot spring.",
                "color": "Blue"
            },
            "id": "Muncho Lake, British Columbia"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-118.820744,55.170656]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Grande Prairie, Alberta"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-110.005417,53.2781515]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Lloydminister, Saskatchewan"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-98.291202,49.973086]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Portage au Prairie, Manitoba"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-97.140512,49.887782]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Winnipeg, Manitoba"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-84.345474,46.537844]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Sault Ste. Marie, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-89.287434,48.405161]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to ON.",
                "color": "Blue"
            },
            "id": "Thunder Bay, Ontario"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-114.104294,51.065437]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I arrived here in January 2023. I am doing an open studies course at UCalgary to get my GIT certification. I have already explored campus, downtown and the southside. I am excited to check out the zoo and the dino musuem!",
                "color": "Red"
            },
            "id": "Calgary, Alberta"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-61.509233,10.671206]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went on a week-long family reunion here! To be honest, it was with parts of my family I had never met before. Somehow connected to my grandma. It was a blast though. Totally wild seeing limes & mangos grow right on the trees like apples. We also ate tons of amazing food (doubles omg) and went on a cool boat ride of the wetlands. Saw camen & scarlet ibises.",
                "color": "Blue"
            },
            "id": "Port of Spain, Trinidad"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [9.021556,46.192799]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "My cousins live here.",
                "color": "Blue"
            },
            "id": "Bellinzona, Switzerland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [8.541334,47.374363]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Just passed through on my way to Bellinzona.",
                "color": "Blue"
            },
            "id": "Zurich, Switzerland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [9.83874,46.498414]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went here on vacation with my mom.",
                "color": "Blue"
            },
            "id": "St. Moritz, Switzerland"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [9.191143,45.464090]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went shopping here with my Swiss cousins. We got to climb the roof of the Duomo!",
                "color": "Blue"
            },
            "id": "Milan, Italy"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-0.125442,51.530573]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I took a random week-long vacation here in Oct 2018.",
                "color": "Blue"
            },
            "id": "London, England"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [2.344208,48.853539]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Apparently I went here with my mom when I was like 3, but I don't remember.",
                "color": "Blue"
            },
            "id": "Paris, France"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-77.029631,38.893839]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I went on a roadtrip to DC with my dad in (I think) 2007 or 2008. We went to all the Smithsonian museums.",
                "color": "Blue"
            },
            "id": "Washington, DC"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-76.660181,40.288539]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I atopped here on a roadtrip to DC with my dad. We went to all the Hershey's factory! They had a ride with robotic singing cows lol.",
                "color": "Blue"
            },
            "id": "Hershey, Pensylvania"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-82.419286,28.037226]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I visited here when I was like 4 and my grandpa was getting his PhD. I only remember birs & pieces. We went to Busch Gardens!",
                "color": "Blue"
            },
            "id": "Tampa Bay, Florida"
        },
        {"geometry": {
                "type": "Point",
                "coordinates": [-66.642267,45.950176]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "I did my Master's of Science & Engineering on the Fredericton campus from Jan 2021-May 2023. I was a member of the Geodesy & Geomatic Eng faculty, and a member of the Ocean Mapping Group. If you get a chance to go to the playhouse, they host the local orchestra and they're really good. I saw one show where they played a bunch of space-themed songs (Star Trek/Wars etc) and another one where a member composed an ORIGINAL SCORE to go along to the 1930's black & white Frankenstein movie. Totally inspired & an underrated place in the city.",
                "color": "Red"
            },
            "id": "Fredericton, New Brunswick"
        },
    ]
};
//cottages, field school, nb, eur

//make campus polygons for uw, unb and uc
var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [-105.00432014465332, 39.74732195489861],
                    [-105.00715255737305, 39.74620006835170],
                    [-105.00921249389647, 39.74468219277038],
                    [-105.01067161560059, 39.74362625960105],
                    [-105.01195907592773, 39.74290029616054],
                    [-105.00989913940431, 39.74078835902781],
                    [-105.00758171081543, 39.74059036160317],
                    [-105.00346183776855, 39.74059036160317],
                    [-105.00097274780272, 39.74059036160317],
                    [-105.00062942504881, 39.74072235994946],
                    [-105.00020027160645, 39.74191033368865],
                    [-105.00071525573731, 39.74276830198601],
                    [-105.00097274780272, 39.74369225589818],
                    [-105.00097274780272, 39.74461619742136],
                    [-105.00123023986816, 39.74534214278395],
                    [-105.00183105468751, 39.74613407445653],
                    [-105.00432014465332, 39.74732195489861]
                ],[
                    [-105.00361204147337, 39.74354376414072],
                    [-105.00301122665405, 39.74278480127163],
                    [-105.00221729278564, 39.74316428375108],
                    [-105.00283956527711, 39.74390674342741],
                    [-105.00361204147337, 39.74354376414072]
                ]
            ],[
                [
                    [-105.00942707061768, 39.73989736613708],
                    [-105.00942707061768, 39.73910536278566],
                    [-105.00685214996338, 39.73923736397631],
                    [-105.00384807586671, 39.73910536278566],
                    [-105.00174522399902, 39.73903936209552],
                    [-105.00041484832764, 39.73910536278566],
                    [-105.00041484832764, 39.73979836621592],
                    [-105.00535011291504, 39.73986436617916],
                    [-105.00942707061768, 39.73989736613708]
                ]
            ]
        ]
    }
};

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404191970824, 39.756213909328125]
    }
};
