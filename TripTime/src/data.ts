export type Category = "culture" | "eat-drink" | "activities";

export type Location = "korea";

export interface Place {
  name: string;
  address: string;
  images: string[];
  notes: { type: "text" | "bullet"; content: string }[];
}

// Image imports for image feed on Korea culture page 
import gbg_history from "./assets/korea/culture/gbg_history.jpg";
import gbg_inside from "./assets/korea/culture/gbg_inside.jpg";
import gbg_show from "./assets/korea/culture/gbg_show.jpg";
import GBG from "./assets/korea/culture/GBG.jpg";
import gbg1 from "./assets/korea/culture/gbg(1).jpg";
import gbg from "./assets/korea/culture/gyeongbokgung.jpg"

import bHanokVillage from "./assets/korea/culture/bHanokVillage.jpg";
import BHV from "./assets/korea/culture/BHV.jpg";
import bhv1 from "./assets/korea/culture/bhv(1).jpg";
import bukchon from "./assets/korea/culture/Bukchon.jpg";
import bhv2 from "./assets/korea/culture/bukchon(1).jpg";

import zone from "./assets/korea/culture/demilitarized-zone.jpg";
import map from "./assets/korea/culture/DMZ_map.png";
import dmz from "./assets/korea/culture/dmz.jpg";

import hangang from "./assets/korea/culture/Hangang.jpg";
import hanPark from "./assets/korea/culture/hanPark.jpg";
import hanRiver from "./assets/korea/culture/hanRiver.jpg";
import hr from "./assets/korea/culture/HanRiver(1).jpg";

// Image imports for image feed on Korea activites page 
import sparex1 from "./assets/korea/activities/sparex.png";
import sparex2 from "./assets/korea/activities/sparex2.jpg";
import sparex3 from "./assets/korea/activities/sparex3.png";
import sparex4 from "./assets/korea/activities/sparex4.png";
import sparex5 from "./assets/korea/activities/sparex5.jpg";
import sparex6 from "./assets/korea/activities/sparex6.png";

import ol1 from "./assets/korea/activities/outdoorlibrary.jpg";
import ol2 from "./assets/korea/activities/outdoorlibrary2.jpg";
import ol3 from "./assets/korea/activities/outdoorlibrary3.jpg";
import ol4 from "./assets/korea/activities/outdoorlibrary4.jpg";
import ol5 from "./assets/korea/activities/outdoorlibrary5.jpg";
import ol6 from "./assets/korea/activities/outdoorlibrary6.jpg";

import lf1 from "./assets/korea/activities/LanternFestival.jpg";
import lf2 from "./assets/korea/activities/LanternFestival2.jpg";
import lf3 from "./assets/korea/activities/LanternFestival3.jpg";
import lf4 from "./assets/korea/activities/LanternFestival4.jpg";
import lf5 from "./assets/korea/activities/LanternFestival5.jpg";
import lf6 from "./assets/korea/activities/LanternFestival6.jpg";

import cb1 from "./assets/korea/activities/CherryBlossom.jpg";
import cb2 from "./assets/korea/activities/CherryBlossom2.jpg";
import cb3 from "./assets/korea/activities/CherryBlossom3.jpg";
import cb4 from "./assets/korea/activities/CherryBlossom4.jpg";
import cb5 from "./assets/korea/activities/CherryBlossom5.jpg";
import cb6 from "./assets/korea/activities/CherryBlossom6.jpg";

// Image imports for image feed on Korea eat-drink page 
import cheongsudang1 from "./assets/korea/eat-drink/CheongsudangBakery3.jpg";
import cheongsudang2 from "./assets/korea/eat-drink/cheongsudang4.jpg";
import cheongsudang3 from "./assets/korea/eat-drink/cheongsudangBakery.jpg";
import cheongsudang4 from "./assets/korea/eat-drink/cheongsudang7.jpg";
import cheongsudang5 from "./assets/korea/eat-drink/cheongsudang5.jpg";
import cheongsudang6 from "./assets/korea/eat-drink/cheongsudang3.png";

import clementine1 from "./assets/korea/eat-drink/Clementine (1).jpg";
import clementine2 from "./assets/korea/eat-drink/Clementine2.jpg";
import clementine3 from "./assets/korea/eat-drink/clementine.jpeg";
import clementine4 from "./assets/korea/eat-drink/clementine4.jpg";
import clementine5 from "./assets/korea/eat-drink/clementine5.jpg";
import clementine6 from "./assets/korea/eat-drink/clementine6.jpg";

import ocheonjip1 from "./assets/korea/eat-drink/Ocheonjip.jpg";
import ocheonjip2 from "./assets/korea/eat-drink/Ocheonjip2.jpg";
import ocheonjip3 from "./assets/korea/eat-drink/Ocheonjip4.jpg";
import ocheonjip4 from "./assets/korea/eat-drink/ocheonjip3.jpeg";
import ocheonjip5 from "./assets/korea/eat-drink/ocheonjip5.jpg";
import ocheonjip6 from "./assets/korea/eat-drink/ocheonjip6.jpg";

import solsot1 from "./assets/korea/eat-drink/solsot (1).jpg";
import solsot2 from "./assets/korea/eat-drink/solsot3.jpg";
import solsot3 from "./assets/korea/eat-drink/solsot4.jpg";
import solsot4 from "./assets/korea/eat-drink/solsot5.jpeg";
import solsot5 from "./assets/korea/eat-drink/solsot6.jpg";
import solsot6 from "./assets/korea/eat-drink/solsot7.jpg";

export const TRIP_DATA = {
    korea: {
      culture: {
        HistoricalPlaces: [
          {
            id: "gyeongbokgung",
            name: "Gyeongbokgung",
            address: "161 Sajik-ro, Jongno-gu, Seoul",
            gallery: [ gbg_history, gbg_inside, gbg_show, GBG, gbg1, gbg ],
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
            gallery: [ bHanokVillage, BHV, bhv1, bukchon, bhv2 ],
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
            gallery: [ zone, map, dmz ],
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
            gallery: [ hangang, hanPark, hanRiver, hr ],
            notes: [
              { type: "bullet", content: "Famous spot for Korean media" },
              { type: "bullet", content: "Boat tours, cafes, bike rentals!!" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "Check for special events for photo ops" },
            ],
          },
        ],
      },
      activities: {
          Relaxing: [
            {
              id: "sparex",
              name: "Sparex",
              address: "18-21 Eulijiro 6(yuk)-ga Jung-gu, Seoul",
              gallery: [ sparex1, sparex2, sparex3, sparex4, sparex5, sparex6 ],
              notes: [
                { type: "bullet", content: "Traditional Korean-style spa that operates 24 hour a day" },
                { type: "bullet", content: "Features Hanok architectural styles and natural wood materials" },
                {
                  type: "bullet",
                  content: "Variety of facilities and programs, such as body scrubs, massages, and clay rooms",
                },
                { type: "bullet", content: "There’s a food court inside!" },
              ],
            },
            {
              id: "outdoorLibrary",
              name: "Outdoor Library",
              address: "Changsin-dong Jongno-gu, Seoul",
              gallery: [ ol1, ol2, ol3, ol4, ol5, ol6 ],
              notes: [
                { type: "bullet", content: "Celebrates Han Kang’s winning of the Nobel Prize in Literature on Oct 10" },
                { 
                  type: "bullet", 
                  content: "Designed to allow people to freely read books and engage in cultural activities outside the traditional library setting", 
                },
                { type: "bullet", content: "Other locations include Seoul Plaza and Gwanghwamun Square" },
              ],
            },
          ],
          Seasonal: [
            {
              id: "lanternFestival",
              name: "Lantern Festival",
              address: "Changsin-dong Jongno-gu, Seoul",
              gallery: [ lf1, lf2, lf3, lf4, lf5, lf6 ],
              notes: [
                { 
                  type: "bullet", 
                  content: "Features various media/ LED sculptures with Korean traditional paper “Hanji” lanterns as the main focus",
                },
                { 
                  type: "bullet", 
                  content: "There are different themed areas and have both modern and traditional lantern designs",
                },
              ],
            },
            {
              id: "cherryBlossom",
              name: "Cherry Blossom Viewing",
              address: "8 Yeouido-dong Yeongdeungpo-gu, Seou",
              gallery: [ cb1, cb2, cb3, cb4, cb5, cb6 ],
              notes: [
                { 
                  type: "bullet", 
                  content: "Yeouido Cherry Blossom Festival is the most well-known cherry blossom festival in Seoul",
                },
                { 
                  type: "bullet", 
                  content: "Over 1000 cherry blossom trees lined the entire lake with the Lotte World Magic Island in the background",
                },
                { type: "bullet", content: "At night, the cherry blossoms light up with various colored lights" },
                { 
                  type: "bullet", 
                  content: "Other activities include concerts, piano on the lake performances, markets, and food trucks",
                },
              ],
            },
          ],
      },
      eatDrink: {
        Cafes: [
          {
            id: "cheongsudang",
            name: "Cheongsudang",
            address: "144 Ikseon-dong Jongno-gu, Seoul",
            gallery: [ cheongsudang1, cheongsudang2, cheongsudang3, cheongsudang4, cheongsudang5, cheongsudang6 ],
            notes: [
              { type: "text", content: "Other Locations" },
              { type: "bullet", content: "A lot of strawberries. promage cake: its a new menu promo with a lot of fresh strawberry juice" },
              { type: "bullet", content: "Original egg souffle castela: Order-made dessert where you can enjoy warm souffles freshly baked at high temperatures for 20 minutes at the time as ordering by mixing fluffy cream cheese souffles and vanilla cream with nut honey" },
              { type: "bullet", content: "Bonnie Bomb Mont Blanc: full of savory and sweet taste"},
              { type: "bullet", content: "Stone drip coffee: Hand drip coffee extracted from three carefully selected top-quality beans using porous volcanic rocks"},
            ],
          },
          {
            id: "clementine",
            name: "Clementine",
            address: "685-490 Seongsu-dong, Seoul",
            gallery: [ clementine1, clementine2, clementine3, clementine4, clementine5, clementine6 ],
            notes: [
              { type: "text", content: "Popular Menu Items" },
              { type: "bullet", content: "Earl Grey Lemon Tart" },
              { type: "bullet", content: "Earl Grey Gateau Cake" },
              { type: "bullet", content: "Tiramisu Roll Cake" },
            ],
          },
        ],
        Restaurants: [
          {
            id: "ocheonjip",
            name: "Ocheonjip",
            address: "128-3 Ikeon-dong Jogno-gu, Seoul",
            gallery: [ ocheonjip1, ocheonjip2, ocheonjip3, ocheonjip4, ocheonjip5, ocheonjip6 ],
            notes: [
              { type: "text", content: "Popular Menu Itmes" },
              { type: "bullet", content: "Black Angus Almoxim Sukiyaki: Traditional sukiyaki with sweet soy sauce base plus fresh vegetable and meat" },
              { type: "bullet", content: "Hot Spring Bear Shabu: A hot spring rip with two cute white bears! There’s a bear on top of the miso broth!" },
              { type: "bullet", content: "Hot Spring House Miso Shabu: Savory shabu shabu (choose rice or noodles) enjoyed with sauce in miso sauce pork bone broth" },
            ],
          },
          {
            id: "solsot",
            name: "Solsot",
            address: "390-42 Yeonnam-dong Mapo-gu, Seoul",
            gallery: [ solsot1, solsot2, solsot3, solsot4, solsot5, solsot6 ],
            notes: [
              { type: "text", content: "Other Locations" },
              {
                type: "bullet",
                content: "Myeongdong, Hannam-dong, Yeonnam-dong, Sinsa, Gangnam, Seongsu",
              },
              { type: "text", content: "Popular Menu Items" },
              { type: "bullet", content: "Steak Pot Rice: putting meat and yolk together and mixing it with rice in a light steak pot" },
              { type: "bullet", content: "Sea Bream Cauldron Rice: premium pot rice with soft sea bream and scallops" },
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
        activities: {
          Relaxing: [
            {
              id: "",
              name: "",
              address: "",
              gallery: [ ],
              notes: [
                { type: "bullet", content: "" },
                { type: "text", content: "First Time Tips" },
                { type: "bullet", content: "" },
              ],
            },
            {
              id: "",
              name: "",
              address: "",
              gallery: [ ],
              notes: [
                { type: "bullet", content: "" },
                { type: "text", content: "First Time Tips" },
                { type: "bullet", content: "" },
              ],
            },
          ],
          Seasonal: [
            {
              id: "",
              name: "",
              address: "",
              gallery: [ ],
              notes: [
                { type: "bullet", content: "" },
                { type: "text", content: "First Time Tips" },
                { type: "bullet", content: "" },
              ],
            },
            {
              id: "",
              name: "",
              address: "",
              gallery: [ ],
              notes: [
                { type: "bullet", content: "" },
                { type: "text", content: "First Time Tips" },
                { type: "bullet", content: "" },
              ],
            },
          ],
      },
      eatDrink: {
        Cafes: [
          {
            id: "",
            name: "",
            address: "",
            gallery: [ ],
            notes: [
              { type: "bullet", content: "" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "" },
            ],
          },
          {
            id: "",
            name: "",
            address: "",
            gallery: [ ],
            notes: [
              { type: "bullet", content: "" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "" },
            ],
          },
        ],
        Restaurants: [
          {
            id: "",
            name: "",
            address: "",
            gallery: [ ],
            notes: [
              { type: "bullet", content: "" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "" },
            ],
          },
          {
            id: "",
            name: "",
            address: "",
            gallery: [ ],
            notes: [
              { type: "bullet", content: "" },
              { type: "text", content: "First Time Tips" },
              { type: "bullet", content: "" },
            ],
          },
        ],
      },
    },
  };  