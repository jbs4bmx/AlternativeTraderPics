# Alternative Trader Pictures
Updates Trader icons to a much better looking alternative.


## Description
Replaces the server method that displays the trader icons with a custom method that uses custom image files for the trader icons. These can be changed out to any icons(images) desired provided you follow the steps to ensure that they all match filetypes and are of equal or very similar size.

This mod supports traders from other mods as well. I will attempt to do my best to keep up with the ever changing mod list out there, but I cannot make any guarantees.

List of supported mods:
  * (ATF) Valkyrie Trader by CZ_2128
  * AIO-Seller by bluehead
  * AKGuy Super Shop by Fershte
  * Alternative Trader Pics (THIS MOD)
  * AR Shoppe (Kugel-Armalite Reloaded) by Fershte
  * BiggerBang by Thunderbags
  * Ducc Trader by ducc
  * Food&Drink Trader by Revingly
  * GearGal by Fershte
  * Hardcore Traders by Meiosis
  * Lock Picking Attorney by Revingly
  * Operator by alex
  * Priscilu by Reis
  * QuestManiac by Andrudis
  * Questor and Gunsmith by alex
  * Scav Cat by DonutxLord
  * ScavCat Redux by SixGod
  * TerraGroup Specialist by Ereshkigal
  * ProgramK by k4a
  * K-9 Case Dealer by GamerXL
  * Death Trader by llife


## Installation
^^^ PRIMARY INSTALLATION INSTRUCTIONS
  1. Extract the contents of the zip file into the root of your SPT folder. It will automatically place the file into your mods folder.
  2. This mod should be loaded after all other mods that add new traders.
  3. If you suspect that this mod is loading before an additional trader is loaded, the load order may need to be changed by adding an additional "Z" or more to the folder name.
  4. After altering the name, delete BSG temp files using the settings menu in the Aki.Launcher.exe program.

## Changing Images
You can customize it too! You can replace the traders with whatever pictures you like.

Follow these guidelines to make sure the new pictures fit the item frames within the game.
  * Recommend square pictures but round can also be used
  * Transparency is ok
  * Recommended photo size = between 256x and 512x for best compatibility.
    * Pictures can be larger (1024x, 2048, etc.), but it requires more memory to store the larger file sizes while the game is running.
    * It can take longer for the game to load the images if there are a lot of large file sizes.
  * Recommended filetypes = jpg or png (pick one; default is jpg)
  * Do not use both jpg and png at the same time. Only one filetype can be used at any time.

^^^ EXAMPLE: PRAPOR --> ./RES/59B91CA086F77469A81232E4.JPG (IMAGE SIZE 512X512)
  * If you would like to replace this picture, rename the picture of your choosing to include the same string "59b91ca086f77469a81232e4" and copy it to the mod/res folder.
  * If a file of the same name exists, click on "Yes" or "OK" to overwrite it.
  * To change to png from jpg, and vice versa, you will need to edit the ./src/config.js file.

For this example (Prapor), you would need to change the filetype of the picture in the line
```json
"extension": "jpg",
```

## Configuration Options
You can specify which images you want to change and leave the rest as their defaults. See config file example below for more details.
```json
{
    "extension": "jpg",         // Set the extension of the files in use.
    "updateAllTraders": true,   // Updates all trader images (default and mod traders). Ignores any changes listed below if set to ~true~.
    // Changes made below this line require that ~updateAllTraders~ be set to false otherwise they will be ignored.
    "updateModTraders": false,  // Updates only the mod traders.
    "modTraders": [],           // Mod traders list. (DO NOT EDIT).
    "updatePrapor": false,      // Updates only Prapor's image.
    "updateTherapist": false,   // Updates only Therapist's image.
    "updateFence": false,       // Updates only Fence's image.
    "updateSkier": false,       // Updates only Skier's image.
    "updatePeacekeeper": false, // Updates only Peacekeeper's image.
    "updateMechanic": false,    // Updates only Mechanic's image.
    "updateRagman": false,      // Updates only Ragman's image.
    "updateJaeger": false,      // Updates only Jaeger's image.
    "updateLightKeeper": false  // Updates only LightKeeper's image.
}
```

## Accreditation
revingly - Optimized code for faster and more precise loading of the mod.

Credits for image sources can be found in the included "001_image_sources.txt" file. All rights are reserved by the original image creators.

<br></br><br></br>:eof