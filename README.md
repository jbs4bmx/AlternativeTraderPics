# Alternative Trader Pictures
Updates Trader icons to a much better looking alternative.
<br></br>

## Description
Replaces the server method that displays the trader icons with a custom method that uses custom image files for the trader icons. These can be changed out to any icons(images) desired provided you follow the steps to ensure that they all match filetypes and are of equal or very similar size.

This mod supports traders from other mods as well. I will attempt to do my best to keep up with the ever changing mod list out there, but I cannot make any guarantees.
<br></br>

**Mod Support (Updated for 3.5.5+ Mod Traders)**

Trader Mods supported by this mod:
  * AIO-Seller by bluehead
  * AKGuy Super Shop by Fershte
  * AllinOne (Anastasia + Svetlana) by Flowless
  * AR Shoppe Unlimited by Fershte
  * Bootlegger by Rhyufer
  * CocoLemon's IProject by Pettan
  * D.R.I.P. by MeowletteBlackpaw
  * GearGal by Fershte
  * GoblinKing by rockahorse
  * Gunsmith by alex
  * Katarina Black by Helldiver
  * KeyMaster Trader by s1nk0
  * MFAC Shop Module by Pettan
  * Priscilu by Reis
  * Questor by Alex
  * The Broker by Nightingale
<br></br>

**No Longer Supported (or considered for support at this time)**

Trader mods no longer supported by this mod due to their age and or due to abandoned plans:
  * (ATF) Valkyrie Trader by CZ_2128
  * ArmorUpgrader by 101p
  * BiggerBang by Thunderbags
  * Capt. Nascimento by URASAI
  * Death Trader by llife
  * Ducc Trader by ducc
  * Emporium by k4a
  * Food&Drink Trader by Revingly
  * Hardcore Traders by Meiosis
  * Hephaestus by alexKarpen
  * K-9 Case Dealer by GamerXL
  * Leaves Weapon Tweaker by DeadLeaves
  * Lock Picking Attorney by Revingly
  * Maid Traders by MrFandor1n
  * Meguru is coming! by okaoka2
  * Operator by alex
  * ProgramK by k4a
  * QuestManiac by Andrudis
  * Scav Cat by DonutxLord
  * ScavCat Redux by SixGod
  * Supplier by Miralyn
  * TerraGroup Specialist by Ereshkigal
<br></br>

## Installation
^^^ PRIMARY INSTALLATION INSTRUCTIONS
  1. Extract the contents of the zip file into the root of your SPT folder. It will automatically place the file into your mods folder.
  2. This mod should be loaded after all other mods that add new traders.
  3. If you suspect that this mod is loading before an additional trader is loaded, the load order may need to be changed by adding an additional "Z" or more to the folder name.
  4. After altering the name, delete BSG temp files using the settings menu in the Aki.Launcher.exe program.
<br></br>

## Changing Images
You can customize it too! You can replace the traders with whatever pictures you like.

Follow these guidelines to make sure the new pictures fit the item frames within the game.
  * Recommend square pictures but round can also be used.
  * Transparency is ok.
  * Recommended photo size = 512x for best compatibility.
    * Pictures can be larger (1024x, 2048, etc.), but it requires more memory to store the larger file sizes while the game is running. Do so at your own risk.
    * It can take longer for the game to load the images if there are a lot of large file sizes.
  * Recommended filetypes = jpg or png (pick one; default is jpg).
  * Do not use both jpg and png at the same time. Only one filetype can be used at any time.

**EXAMPLE: PRAPOR --> ./RES/59B91CA086F77469A81232E4.JPG (IMAGE SIZE 512X512)**
  * If you would like to replace this picture, rename the picture of your choosing to include the same string "59b91ca086f77469a81232e4" and copy it to the mod/res folder.
  * If a file of the same name exists, click on "Yes" or "OK" to overwrite it.
  * To change to png from jpg, and vice versa, you will need to edit the ./src/config.js file.
  * See the configuration file options listed below for where to change the file extension type.
<br></br>

## Configuration Options
You can specify which images you want to change and leave the rest as their defaults. Default is to change all supported trader images (default traders and mod traders). To change this, set the line '**updateAllTraders**' to *false* and then enable or disable the trader(s) of your choice in the options below by setting them to *true*. '**updateAllTraders**' will override other options when set to *true*.
```json
{
    "----- File Extension 1 ": "Sets the extension of the image files",
    "----- File Extension 2 ": "Only one supported extension at a time.",
    "extension": "jpg",

    "----- Update All Traders 1 ": "Update all supported traders (default and mods)",
    "----- Update All Traders 2 ": "This will override the remaining options in this config",
        "updateAllTraders": true,

    "----- Update Only Selected Traders 1": "Choose which traders you want to update",
    "----- Update Only Selected Traders 2": "The setting 'updateAllTraders' must be set to false for these options to work",
        "DEFAULT TRADERS": "-------------------------",
            "updatePrapor": false,
            "updateTherapist": false,
            "updateFence": false,
            "updateSkier": false,
            "updatePeacekeeper": false,
            "updateMechanic": false,
            "updateRagman": false,
            "updateJaeger": false,
            "updateLightKeeper": false,
        "MOD TRADERS": "-------------------------",
            "AIOTrader": false,
            "AKGuy": false,
            "AnastasiaSvetlana": false,
            "ARSHoppe": false,
            "Bootlegger": false,
            "DRIP": false,
            "GearGal": false,
            "GoblinKing": false,
            "Gunsmith": false,
            "IProject": false,
            "KatarinaBlack": false,
            "KeyMaster": false,
            "MFACShop": false,
            "Priscilu": false,
            "Questor": false,
            "TheBroker": false
}
```
<br></br>

## Accreditation
revingly - Optimized code for faster and more precise loading of the mod.

Credits for image sources:
  * Alternative Trader Pics (This Mod)
    * trader: 5a7c2ebb86f7746e324a06ab (Mechanic -- 5a7c2eca46aef81a7ca2145d)
      * originalFile: derrick-chew-armygirl-dcwj-lrf02.jpg
      * artist: Derrick Chew
      * link: https://www.artstation.com/dcwj
    * trader: 5ac3b86a86f77461491d1ad8 (Ragman -- 5ac3b934156ae10c4430e83c)
      * originalFile: mama_taka_by_kazenokaze_ddlzoni.png
      * artist: Kazenokaze
      * link: https://www.deviantart.com/kazenokaze
    * trader: 5c06531a86f7746319710e1b (Jaeger -- 5c0647fdd443bc2504c2d371)
      * originalFile: vsk_94_by_maridjan_kirisame_defxgna-fullview.jpg
      * artist: Maridjan-kirisame
      * link: https://www.deviantart.com/maridjan-kirisame
    * trader: 59b91ca086f77469a81232e4 (Prapor -- 54cb50c76803fa8b248b4571)
      * originalFile: cheolsu-211127.jpg
      * artist: Cheolsu
      * link: https://www.artstation.com/cheol_su
    * trader: 59b91cab86f77469aa5343ca (Therapist -- 54cb57776803fa99248b456e)
      * originalFile: theodor_by_hibu7444_d9ee72f-fullview.png
      * artist: hibu7444
      * link: https://www.deviantart.com/hibu7444
    * trader: 59b91cb486f77469a81232e5 (Skier -- 58330581ace78e27b8b10cee)
      * originalFile: avetetsuya-studios-ainx3isk1sx7ubboqfqesqjueno1flssgpgp4v1y.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
    * trader: 59b91cbd86f77469aa5343cb (Peacekeeper -- 5935c25fb3acc3127c3d8cd9)
      * originalFile: s14-oni-chan-515678.jpg
      * artist: S14-Oni-chan
      * link: https://www.artstation.com/tohru-san
    * trader: 579dc571d53a0658a154fbec (Fence -- 579dc571d53a0658a154fbec)
      * originalFile: avetetsuya-studios-commission-png.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
    * trader: 638f541a29ffd1183d187f57 (LightKeeper -- 638f541a29ffd1183d187f57)
      * originalFile: tetsunyan-studios-elvdtx9vcaevy0j.jpg
      * artist: Tetsunyan Studios
      * link: https://www.artstation.com/tetsunyanstudios
<br></br>

  * AIO-Seller by bluehead
    * trader: aiotrader
      * originalFile: ranveld-hoodie-1500.jpg
      * artist: Ranveld
      * link: https://www.artstation.com/ranveld
    * trader: bluehead
      * originalFile: avetetsuya-studios-246579333-126830519661906-7164433030013410836-n.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
<br></br>

  * AKGuy Super Shop by Fershte
    * trader: AKGUY
      * originalFile: ak_12_by_maridjan_kirisame_dcmn1mp-fullview.jpg
      * artist: Maridjan-kirisame
      * link: https://www.deviantart.com/maridjan-kirisame
<br></br>

  * AllinOne (Anastasia + Svetlana) by Flowless
    * trader: Anastasia
      * originalFile: avetetsuya-studios-271295765-1025952851602930-8717509912103450544-n.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
    * trader: Svetlana
      * originalFile: avetetsuya-studios-1-1.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
<br></br>

  * AR Shoppe Unlimited by Fershte
    * trader: armalite
      * originalFile: dciyk7a-2314f522-0668-48d9-92bf-c10a0a3e21cd.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * Bootlegger by Rhyufer
    * trader: bootlegger
      * originalFile: dcixeuy-4eafae0d-78cd-476f-aa0d-ebb8b53031d6.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * CocoLemon's IProject by Pettan
    * trader: PRTS
      * originalFile: dciyqdr-a7a0a754-edf2-417f-b4a8-7ebef33f656a.png
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * D.R.I.P. by MeowletteBlackpaw
    * trader: moron (aka Tupitsa)
      * originalFile: pinned_down_by_ww2killer_dc13dcs-fullview.jpg
      * artist: ww2killer
      * link: https://www.deviantart.com/ww2killer
<br></br>

  * GearGal by Fershte
    * trader: GearGal
      * originalFile: dciynq1-cae89f64-ca24-47d5-9fb5-ca6c43922fee.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * GoblinKing by rockahorse
    * trader: Goblin King (GoblinKing)
      * originalFile: dciyq0c-fd10fae9-4383-406d-b56e-81b8a1486ba7.png
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

 * Gunsmith by alex
    * trader: gunsmith
      * originalFile: dcixc1g-879e11ac-1a60-4dca-84e3-49cc2f8d280e.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * Katarina Black by Helldiver
    * trader: kat
      * originalFile: dciynqd-4f95af89-6cb0-427c-b63d-96724b437109.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
    * trader: sepi1
      * originalFile: dciymhf-19173def-1910-4389-a1c7-31a50d1a5f09.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * KeyMaster Trader by s1nk0
    * trader: keymaster
      * originalFile: pavi-00833-597299592.jpg
      * artist: Pavi
      * link: https://www.artstation.com/pavlin2
<br></br>

  * MFAC Shop Module by Pettan
    * trader: MFAC (aka Major Alice)
      * originalFile: desert_ghost_by_ww2killer_dc15pje-fullview.jpg
      * artist: ww2killer
      * link: https://www.deviantart.com/ww2killer
<br></br>

  * Priscilu by Reis
    * trader: Priscilu
      * originalFile: avetetsuya-studios-230442000-3074770662801749-7730700719198110662-n.jpg
      * artist: Avetetsuya Studios
      * link: https://www.artstation.com/avetetsuyastudios
<br></br>

  * Questor by Alex
    * trader: questor
      * originalFile: dcixbxl-a466e19a-48b1-4e87-a4de-ec0d373be5a8.jpg
      * artist: DemonGirl289
      * link: https://www.deviantart.com/demongirl289
<br></br>

  * The Broker by Nightingale
    * trader: broker_portrait1
      * originalFile: tetsunyan-studios-fd1c74b8-original.jpg
      * artist: Tetsunyan Studios
      * link: https://www.artstation.com/tetsunyanstudios
<br></br>

If you like these artists' work, please consider contributing to them. All links are provided to their pages. They all provide fantastic works of art and deserve the recognition for all of their hard work. A lot of artists even do commission work.



<br></br>
<br></br>
:eof