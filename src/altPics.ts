/*
 *      Name: Alternative Trader Pics
 *   Version: 311.0.0
 * Copyright: jbs4bmx, revaxl(aka. revingly)
 *    Update: 01.08.2022
*/

import { DependencyContainer} from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { HttpRouter } from "@spt-aki/routers/HttpRouter";
import { HttpServer } from "@spt-aki/servers/HttpServer";
import { PostAkiModLoader } from "@spt-aki/loaders/PostAkiModLoader";

const pkg = require("../package.json");

class TraderPics implements IMod
{
    private pkg;
    private modName = "zzjbs4bmx-AlternativeTraderPics"

    public preAkiLoad(container: DependencyContainer)
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        this.pkg = require("../package.json")
        logger.info(`Loading: ${this.pkg.author}-${this.pkg.name} v${this.pkg.version}`);
    }

    public postDBLoad(container: DependencyContainer){return;}

    public postAkiLoad(container: DependencyContainer) {
        const logger = container.resolve<ILogger>("WinstonLogger");
        this.pkg = require("../package.json")

        this.funcptr = ImageRouter.onRespond["IMAGE"];
        ImageRouter.onRespond["IMAGE"] = this.getImage.bind(this);

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }

    //Adding Trader Images
    public getImage(sessionID, req, resp, body) {
        const { extension, traders } = require('./config.json');
        const postAkiModLoader = container.resolve<PostAkiModLoader>("PostAkiModLoader");
        const filepath = `${postAkiModLoader.getModPath(this.modName)}res/`;

        // get the trader id from the request
        const traderId = req.url.split('/').pop().split('.').shift();

        // check if the trader id exist in the array
        if (traders.includes(traderId)) {
            HttpServer.sendFile(resp, `${filepath}${traderId}.${extension}`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }

}

module.exports = { mod: new TraderPics() }
