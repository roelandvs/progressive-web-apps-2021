# Progressive Web Apps
<img width="2006" alt="Screenshot 2021-03-02 at 12 26 59" src="https://user-images.githubusercontent.com/59770136/109641964-afafc980-7b52-11eb-8d2a-6cbc28714e21.png">

[link to the site](https://space-x-serverside.herokuapp.com/)  

This project contains an application that shows the upcoming launches op SpaceX. The site exists out of an overview page of all the launches, and a detail page of each launch. This page contains specific information of the launch such as the crew, the goal of the launch, which rocket is being used etc.

The goal of this project is to convert a clientside rendered website to a serverside website and using an service worker. 

This project uses:
- `Express`
- `EJS`
- `SpaceX API`
- `Service worker`
- `Manifest.json`

Used packeges:
- `Compression`
- `EJS`
- `Express`
- `Node-fetch`
- `Nodemon`
- `Rimraf`

## SpaceX API
To get the data of the website I'm using the [SPACEX API](https://docs.spacexdata.com/). This API contains a wide range of information about SpaceX such as launches, history, missions, rockets etc. There is no authentication required to use this public API.

This API is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners.

### Endpoints  
The base URL of the API is https://api.spacexdata.com/v3 or https://api.spacexdata.com/v4 depending on wich version you want to use. The API encourages you to use v4 (version 4), because they wont add new data to v3. Then you can choose to get 

The API has many different endpoints: 
- Capsules
- Cores
- Dragons
- History
- **Info**
- Landing Pads
- **Launches**
- Launch Pads
- **Missions**
- Payloads
- **Rockets**
- Roadster
- Ships

I'm planning to use the bold endpoints.

### Ratelimits
The API has a rate limit: 
- 50 req/sec per IP address

### API response
Each endpoint will respond with an array of JSON objects. 

response from endpoint https://api.spacexdata.com/v4/launches/: 
```json
{
    "fairings": null,
    "links": {
        "patch": {
            "small": "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
            "large": "https://images2.imgbox.com/15/2b/NAcsTEB6_o.png"
        },
        "reddit": {
            "campaign": "https://www.reddit.com/r/spacex/comments/ezn6n0/crs20_launch_campaign_thread",
            "launch": "https://www.reddit.com/r/spacex/comments/fe8pcj/rspacex_crs20_official_launch_discussion_updates/",
            "media": "https://www.reddit.com/r/spacex/comments/fes64p/rspacex_crs20_media_thread_videos_images_gifs/",
            "recovery": null
        },
        "flickr": {
            "small": [],
            "original": [
                "https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg",
                "https://live.staticflickr.com/65535/49636202657_e81210a3ca_o.jpg",
                "https://live.staticflickr.com/65535/49636202572_8831c5a917_o.jpg",
                "https://live.staticflickr.com/65535/49635401423_e0bef3e82f_o.jpg",
                "https://live.staticflickr.com/65535/49635985086_660be7062f_o.jpg"
            ]
        },
        "presskit": "https://www.spacex.com/sites/spacex/files/crs-20_mission_press_kit.pdf",
        "webcast": "https://youtu.be/1MkcWK2PnsU",
        "youtube_id": "1MkcWK2PnsU",
        "article": "https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-20"
    },
    "static_fire_date_utc": "2020-03-01T10:20:00.000Z",
    "static_fire_date_unix": 1583058000,
    "tdb": false,
    "net": false,
    "window": 0,
    "rocket": "5e9d0d95eda69973a809d1ec",
    "success": true,
    "failures": [],
    "details": "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    "crew": [],
    "ships": [],
    "capsules": [
        "5e9e2c5cf359185d753b266f"
    ],
    "payloads": [
        "5eb0e4d0b6c3bb0006eeb253"
    ],
    "launchpad": "5e9e4501f509094ba4566f84",
    "auto_update": true,
    "flight_number": 91,
    "name": "CRS-20",
    "date_utc": "2020-03-07T04:50:31.000Z",
    "date_unix": 1583556631,
    "date_local": "2020-03-06T23:50:31-05:00",
    "date_precision": "hour",
    "upcoming": false,
    "cores": [
        {
            "core": "5e9e28a7f359187afd3b2662",
            "flight": 2,
            "gridfins": true,
            "legs": true,
            "reused": true,
            "landing_attempt": true,
            "landing_success": true,
            "landing_type": "RTLS",
            "landpad": "5e9e3032383ecb267a34e7c7"
        }
    ],
    "id": "5eb87d42ffd86e000604b384"
}
```

## Installation guide
Create a directory using your terminal:
```
mkdir <directory name>
```

Navigate to the directory:
```
cd <directory name>
```

Install this project:
```
git clone https://github.com/roelandvs/web-app-from-scratch-2021.git
```

Move to directory:
```
cd web-app-from-scratch-2021
```

Install dependencies:
```
npm init
```

## Critical Rendering Path
My app is very small, so it's pretty quick to begin with. To improve the loading time I'm still using:
- `Gulp`
- `Compression`
- `<link rel="preload" as="image" href="<link>">`

### Before Critical Rendering Path
<img width="1007" alt="Screenshot 2021-03-31 at 14 40 13" src="https://user-images.githubusercontent.com/59770136/113145760-219d3080-922f-11eb-9bb4-1eb1db659f9e.png">


### After Critical Rendering Path
<img width="1007" alt="Screenshot 2021-03-31 at 14 35 22" src="https://user-images.githubusercontent.com/59770136/113145522-cf5c0f80-922e-11eb-9fce-1a4fef987ce6.png">
Im using `Gulp` to minify my clientside CSS and JS. Compression is used to compress the files that are send to the user and link preload handles that the image starts loading at the moment that the head is read, instead of after it encounters the link in my css. This improved the content full paint by a few seconds.

## Sources
[Jonah Meijers](https://github.com/theonejonahgold)
[Vincent van Leeuwen](https://github.com/Vincentvanleeuwen)
[Ben Langenberg](https://github.com/benl95)
[Merlijn Bergevoet](https://github.com/mbergevoet)