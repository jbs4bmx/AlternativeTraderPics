/*
    Alternative Trader Pictures
*/

"use strict";

class TraderPics {
    constructor() {
        this.mod = "jbs4bmx-AltTraderPics";
        common_f.logger.logInfo(`Loading: ${this.mod}`);
        this.funcptr = https_f.server.onRespond["IMAGE"];
        https_f.server.onRespond["IMAGE"] = this.getImage.bind(this);
    }
    //Adding Trader Images
    getImage(sessionID, req, resp, body) {
        const filepath = `${core_f.packager.getModPath(this.mod)}res/`;

        if (req.url.includes("/avatar/54cb50c76803fa8b248b4571")) {
            //Prapor - Pavel Yegorovich Romanenko
            https_f.server.sendFile(resp, `${filepath}54cb50c76803fa8b248b4571.jpg`);
            return;

        } else if (req.url.includes("/avatar/54cb57776803fa99248b456e")) {
            //Therapist - Doctor Elvira Khabibullina
            https_f.server.sendFile(resp, `${filepath}54cb57776803fa99248b456e.jpg`);
            return;

        } else if (req.url.includes("/avatar/58330581ace78e27b8b10cee")) {
            //Skier - Alexander Fyodorovich Kiselyov
            https_f.server.sendFile(resp, `${filepath}58330581ace78e27b8b10cee.jpg`);
            return;

        } else if (req.url.includes("/avatar/5a7c2eca46aef81a7ca2145d")) {
            //Mechanic - Sergey Arsenyevich Samoylov
            https_f.server.sendFile(resp, `${filepath}5a7c2eca46aef81a7ca2145d.jpg`);
            return;

        } else if (req.url.includes("/avatar/5ac3b934156ae10c4430e83c")) {
            //Ragman - Abramyan Arshavir Sarkisivich
            https_f.server.sendFile(resp, `${filepath}5ac3b934156ae10c4430e83c.jpg`);
            return;

        } else if (req.url.includes("/avatar/5935c25fb3acc3127c3d8cd9")) {
            //Peacekeeper - Tadeusz Pilsudski
            https_f.server.sendFile(resp, `${filepath}5935c25fb3acc3127c3d8cd9.jpg`);
            return;

        } else if (req.url.includes("/avatar/5c0647fdd443bc2504c2d371")) {
            //Jaeger - Ivan Egorovich Kharitonov
            https_f.server.sendFile(resp, `${filepath}5c0647fdd443bc2504c2d371.jpg`);
            return;

        } else if (req.url.includes("/avatar/579dc571d53a0658a154fbec")) {
            //Fence - Unknown
            https_f.server.sendFile(resp, `${filepath}579dc571d53a0658a154fbec.jpg`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }

}

module.exports.Mod = TraderPics;