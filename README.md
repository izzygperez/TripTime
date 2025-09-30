![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
<h1>TripTime</h1>

TripTime is a 3D spatial web app built with the [WebSpatial SDK](https://github.com/webspatial/webspatial-sdk?tab=readme-ov-file) for Apple Vision Pro.
It provides interactive, immersive travel guides that let you explore destinations in a whole new way!

<div align="center" style="width: 100%; max-width: 860px;">
  <table>
    <tr>
      <td align="center">
        <img src="/TripTime/public/images/triptime_simulator.png" width="400"/>
        <em>Before WebSpatial SDK integration</em>
      </td>
      <td align="center">
        <img src="/TripTime/public/images/triptime_visionpro.PNG" width="400"/>
        <em>After WebSpatial SDK integration</em>
      </td>
    </tr>
  </table>
</div>

## Problems & Motivations
Instead of endlessly scrolling through blogs or TikTok, TripTime offers a spatial, tactile way to explore trending travel destinations. 

Our first stop: Seoul, South Korea

Our second stop: Tokyo, Japan

Our third stop: Hawaii, USA

## Core Features
- 🌉 Portal Doors – peek into categories (Food, Activities, Culture, etc.)
- 🖼️ Image Gallery – immersive exploration in a Gen Z style
- 📝 Customized notes – fun facts, first time advice, popular menu items, and more!

## Demo Video

[![Thumbnail](/TripTime/public/images/triptime_visionpro.PNG)](https://youtu.be/rlbVBEx7PIE)

<a href="https://youtu.be/rlbVBEx7PIE" target="_blank">

## Prerequisites
In order to run this project successfully, you would need to have the following:
- MacOS
- npm
- Xcode with VisionOS Simulator

## Getting Started
1. **Clone the repository:**
```bash
git clone ...
cd TripTime
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the website:**
```bash
npm run dev
```

4. **Run the WebSpatial app on VisionPro**

The port number should match the link provided when you run the first command.

```bash
XR_ENV=avp npm run dev
npx webspatial-builder run --base=http://localhost:3001/
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
