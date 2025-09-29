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
              "/images/culture/gbg_history.jpg",
              "/images/culture/gbg_inside.jpg",
              "/images/culture/gbg_show.jpg",
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
              "/assets/culture/bhv1.jpg",
              "/assets/culture/bhv2.jpg",
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
              "/assets/culture/dmz_map.png",
              "/assets/culture/dmz1.jpg",
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
              "/assets/culture/han1.jpg",
              "/assets/culture/han2.jpg",
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
  };  