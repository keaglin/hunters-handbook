<!-- banner w logo -->
![Hunter's Handbook banner. A brown book logo with a purple bookmark and the words "Hunter's Handbook" next to it.](./img/banner-warm.png)
<!-- # Hunter's Handbook -->

## About
Hunter's Handbook is all the power of a search engine for Monster Hunter: World (and Iceborne) right in your Twitch stream. Search monster name or location to find the monster you're seeking. You'll find general info as well as strategic stats like weaknesses and resistances.
<!-- need some examples here -->
![Hunter's Handbook search screenshot. Search term is "Ancient Forest" and the monster named "Grimalkyne" is highlighted in green](./img/Screen_Shot_2019-10-11_at_5.32.50_PM.png)
![Hunter's Handbook screenshot. Details view for the monster named "Kirin". Includes weaknesses, locations, brief description, etc](./img/Screen_Shot_2019-10-11_at_5.37.00_PM.png)


## Project status
Pre-release  
Under active development as of 10/13/19  

## Installation
<!-- should this be for running the project locally or installing the extension on your Twitch channel? Who's more likely to be on this page? Could maybe include both -->
### Installing the Hunter's Handbook extension on Twitch
> NOTE: This extension is currently in the pre-release/testing phase. If you want to install it, you must be whitelisted and will receive a warning that it's in testing. The extension will be functional, but only whitelisted users can see and interact with it at this time. Once released officially, it will be available for use and interaction by all users.
Follow these instructions to install the Hunter's Handbook extension on your Twitch channel (upon release)  
1. Go to `https://www.twitch.tv/<YOUR_TWITCH_USERNAME>/dashboard/extensions` on Twitch
1. Search for "Hunter's Handbook"
1. Look for the latest version (version number in bottom right corner of the preview image)
1. Hover over the latest version for a dialog box that gives you 2 buttons (Details and Install)
1. Click "Install"
1. Head to `https://www.twitch.tv/<YOUR_TWITCH_USERNAME>/dashboard/extensions/manage` and Hunter's Handbook should now be under the "Installed" column
1. Click the "Activate" dropdown and select "Set as Overlay 1" in order to activate it on your channel
> NOTE: You can only have 1 (one) overlay extension enabled on your Twitch channel at any one time. If you decide to activate Hunter's Handbook, any previous overlay extension will likely be disabled as a result.
8. That's it! You're done. 
### Using the dev server
Follow these instructions to run the Hunter's Handbook React app locally on your machine  
1. Clone this repo or fork it
1. Navigate to project directory in your terminal
1. Run `yarn install` or `npm install` in your terminal to install dependencies
1. Run `yarn start` or `npm run start` in your terminal to start the dev server

## Authors
Kevon Eaglin - [@keagl1n](https://twitter.com/keagl1n "Kevon's Twitter")  
Matt Cool - [matthewbcool](https://github.com/matthewbcool "Matt's GitHub") 
<!-- pics and links -->

## License
This project is licensed under AGPL 3.0. The gist is that you're free to modify it, distribute it, and even use it commercially, given certain conditions are met. See [LICENSE](https://github.com/keaglin/hunters-handbook/blob/master/LICENSE) for more detailed information.

## Attributions & Acknowledgements
We are super grateful to have found so many good resources that allowed us to get up and running relatively quickly.  
<!-- need links -->
- [MHWDB](https://github.com/LartTyler/MHWDB-API) monster list and the bulk of our data
- [IGN](https://www.ign.com/wikis/monster-hunter-world/Monster_List_-_Monster_Hunter:_World_and_Iceborne#Large_Monsters)'s monster list, icons and images
- [Fandom](https://monsterhunter.fandom.com/wiki/MHW:_Monsters)'s list, monster info, and icons
- [Create React App](https://github.com/facebook/create-react-app)
- [Rescripts](https://github.com/harrysolovay/rescripts) allowed us to rewire CRA to make a Twitch-compatible React app
- Twitch Dev's [Bot Commander](https://github.com/twitchdev/bot-commander)
- Handbook Icon: [Rafael Chiamenti](https://www.artstation.com/rafaelchm)
- [Monster Hunter World](https://www.monsterhunter.com/world-iceborne/us/ "Monster Hunter World Official Website")
