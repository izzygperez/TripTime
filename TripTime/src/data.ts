export type Category = "culture" | "eat-drink" | "activities";

export type Location = "korea";

export interface Place {
  name: string;
  address: string;
  images: string[];
  notes: { type: "text" | "bullet"; content: string }[];
}

// src/data/data.ts
export const TRIP_DATA = {
    korea: {
      culture: {
        HistoricalPlaces: [
          {
            id: "gyeongbokgung",
            name: "Gyeongbokgung",
            address: "161 Sajik-ro, Jongno-gu, Seoul",
            gallery: [
              "/images/korea/culture/gbg_history.jpg",
              "/images/korea/culture/gbg_inside.jpg",
              "/images/korea/culture/gbg_show.jpg",
            ],
            notes: [
              { type: "bullet", content: "Lots of hanbok rental options nearby" },
              { type: "bullet", content: "Scheduled ceremonies throughout the day" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "Entry discount if you wear hanbok!" },
              { type: "bullet", content: "Tons of photo ops since it’s a big landmark" },
            ],
          },
          {
            id: "bukchon",
            name: "Bukchon Hanok Village",
            address: "37 Gyedong-gil, Jongno-gu, Seoul",
            gallery: [
              "/images/korea/culture/bHanokVillage.jpg",
              "/images/korea/culture/BHV.jpg",
            ],
            notes: [
              { type: "bullet", content: "Very picturesque depending on the season" },
              { type: "bullet", content: "Small shops with handmade and traditional items" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "Be respectful of the residents in the area" },
              { type: "bullet", content: "Go early to avoid crowds" },
            ],
          },
        ],
        CulturalLandmarks: [
          {
            id: "dmz",
            name: "DMZ",
            address: "Bus Tour Only",
            gallery: [
              "/images/korea/culture/DMZ_map.png",
              "/images/korea/culture/dmz.jpg",
            ],
            notes: [
              { type: "bullet", content: "Lots of different options to book a bus tour" },
              { type: "bullet", content: "Museum has a cafe inside" },
              { type: "bullet", content: "Souvenir stops throughout tour" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "Bring identification and be respectful to soldiers" },
            ],
          },
          {
            id: "hanriver",
            name: "Han River",
            address: "330 Yeouidong-ro, Yeongdeungpo-gu, Seoul",
            gallery: [
              "/images/korea/culture/Hangang.jpg",
              "/images/korea/culture/hanPark.jpg",
            ],
            notes: [
              { type: "bullet", content: "Famous spot for Korean media" },
              { type: "bullet", content: "Boat tours, cafes, bike rentals!!" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "Check for special events for photo ops" },
            ],
          },
        ],
      },
    },
    japan: {
        culture: {
            Temples: [
                {
                  id: "gotokuji",
                  name: "Gotokuji Temple",
                  address: "2 Chome-24-7 Gotokuji, Setagaya City, Tokyo",
                  gallery: [
                    "/images/japan/culture/gotokuji.jpg",
                    "/images/japan/culture/gotokuji2.jpg",
                    "/images/japan/culture/gotokuji3.jpg",
                  ],
                  notes: [
                    { type: "bullet", content: "Edo period Buddhist temple with a large collection of lucky beckoning cat statues" },
                  ],
                },
                {
                  id: "sensoji",
                  name: "Senso-ji",
                  address: "2 Chome-3-1 Asakusa, Taito City, Tokyo",
                  gallery: [
                    "/images/japan/culture/sensoji.jpg",
                    "/images/japan/culture/sensoji2.jpg",
                    "/images/japan/culture/sensoji3.jpg",
                  ],
                  notes: [
                    { type: "bullet", content: "Completed in 645, this is Tokyo's oldest temple" },
                    { type: "bullet", content: "Built to honor Kannon, the goddess of mercy" },
                  ],
                },
            ],
            Gardens: [
                {
                  id: "imperial",
                  name: "Imperial Palace",
                  address: "1-1 Chiyoda, Chiyoda City, Tokyo",
                  gallery: [
                    "/images/japan/culture/palace.jpg",
                    "/images/japan/culture/palace2.jpg",
                    "/images/japan/culture/palace3.jpg",
                  ],
                  notes: [
                    { type: "bullet", content: "Features scenic gardens & tours of the grounds" },
                    { type: "bullet", content: "This site is the main residence of the emperor of Japan" },
                  ],
                },
                {
                  id: "garden",
                  name: "Shinjuku Gyoen National Garden",
                  address: "11 Naitomachi, Shinjuku City, Tokyo",
                  gallery: [
                    "/images/japan/culture/garden.jpg",
                    "/images/japan/culture/garden2.jpg",
                    "/images/japan/culture/garden3.jpg",
                  ],
                  notes: [
                    { type: "bullet", content: "This former estate is a 144-acre park" },
                    { type: "bullet", content: "Features diverse garden areas, grassy expanses & a greenhouse" },
                  ],
                },
            ],
        },
    },
  };  