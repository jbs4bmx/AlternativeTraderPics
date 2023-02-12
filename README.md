# Alternative Trader Pictures
Updates Trader icons to a much better looking alternative.


## -.\_.-= Description -.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-
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


## -.\_.-= Installation -.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-
#### ^^^ Primary Installation Instructions
  1. Extract the contents of the zip file into the root of your SPT folder. It will automatically place the file into your mods folder.
  2. This mod should be loaded after all other mods that add new traders.
  3. If you suspect that this mod is loading after an additional trader is added, the load order may need to be changed by adding an additional "Z" or more to the folders name.
  4. After altering the name, delete BSG temp folder found in "C:\Users\{username}\AppData\Local\Temp\Battlestate Games". You can find this by typing in "%LocalAppData%" (no quotes) into the address bar of Windows File Explorer. Delete the "Battlestate Games" folder.

#### ^^^ Image Change Instructions
You can customize it too! You can replace the traders with whatever pictures you like.

Follow these guidelines to make sure the new pictures fit the item frames within the game.
  * Recommend square pictures but round can also be used
  * Transparency is ok
  * Recommended photo size = between 128x and 256x for best compatibility.
    * Pictures can be larger (512x, 1024x, etc.), but it requires more memory to store the larger file sizes while the game is running.
    * It can take longer for the game to load the images if there are a lot of large file sizes.
  * Recommended filetype = jpg or png

#### ^^^ Example: Prapor --> ./res/54cb50c76803fa8b248b4571.jpg (image size 256x256)
  * If you would like to replace this picture, rename the picture of your choosing to include the same string "54cb50c76803fa8b248b4571" and copy it to the mod/res folder.
  * If a file of the same name exists, click on "Yes" or "OK" to overwrite it.
  * To change to png from jpg, and vice versa, you will need to edit the ./src/config.js file.

For this example (Prapor), you would need to change the filetype of the picture in the line
```json
"extension": "jpg",
```
to
```json
"extension": "png",
```


## -.\_.-= Accreditation -.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-=-.\_.-
>revingly - Help with establishing a more fluid code workflow and the code dynamics to use custom images.
>Credits for image sources can be found in the included "001_image_sources.txt" file.

:eof