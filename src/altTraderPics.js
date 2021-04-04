/* altTraderPics.js
       license: The Unlicense
     copyright: jbs4bmx
       website: https://www.guilded.gg/senkospub
          name: AlternativeTraderPics
   description: Beautify your traders.
       version: 2.0.0
     author(s): jbs4bmx
*/

"use strict";

class TraderPics {
    constructor() {
        this.mod = "jbs4bmx-AltTraderPics";
        Logger.log(`Loading: ${this.mod}`);
        this.funcptr = HttpServer.onRespond["IMAGE"];
        HttpServer.onRespond["IMAGE"] = this.getImage.bind(this);
    }
    //Adding Trader Images
    getImage(sessionID, req, resp, body) {
        const filepath = `${ModLoader.getModPath(this.mod)}res/`;

        if (req.url.includes("/avatar/59b91ca086f77469a81232e4")) {
            //Prapor - Pavel Yegorovich Romanenko
            HttpServer.sendFile(resp, `${filepath}59b91ca086f77469a81232e4.jpg`);
            return;

        } else if (req.url.includes("/avatar/59b91cab86f77469aa5343ca")) {
            //Therapist - Doctor Elvira Khabibullina
            HttpServer.sendFile(resp, `${filepath}59b91cab86f77469aa5343ca.jpg`);
            return;

        } else if (req.url.includes("/avatar/59b91cb486f77469a81232e5")) {
            //Skier - Alexander Fyodorovich Kiselyov
            HttpServer.sendFile(resp, `${filepath}59b91cb486f77469a81232e5.jpg`);
            return;

        } else if (req.url.includes("/avatar/5a7c2ebb86f7746e324a06ab")) {
            //Mechanic - Sergey Arsenyevich Samoylov
            HttpServer.sendFile(resp, `${filepath}5a7c2ebb86f7746e324a06ab.jpg`);
            return;

        } else if (req.url.includes("/avatar/5ac3b86a86f77461491d1ad8")) {
            //Ragman - Abramyan Arshavir Sarkisivich
            HttpServer.sendFile(resp, `${filepath}5ac3b86a86f77461491d1ad8.jpg`);
            return;

        } else if (req.url.includes("/avatar/59b91cbd86f77469aa5343cb")) {
            //Peacekeeper - Tadeusz Pilsudski
            HttpServer.sendFile(resp, `${filepath}59b91cbd86f77469aa5343cb.jpg`);
            return;

        } else if (req.url.includes("/avatar/5c06531a86f7746319710e1b")) {
            //Jaeger - Ivan Egorovich Kharitonov
            HttpServer.sendFile(resp, `${filepath}5c06531a86f7746319710e1b.jpg`);
            return;

        } else if (req.url.includes("/avatar/579dc571d53a0658a154fbec")) {
            //Fence - Name Unknown
            HttpServer.sendFile(resp, `${filepath}579dc571d53a0658a154fbec.jpg`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }

}

module.exports.Mod = TraderPics;