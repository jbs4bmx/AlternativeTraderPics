/*
 *      Name: Alternative Trader Pics
 *   Version: 321.0.1?
 * Copyright: jbs4bmx, revaxl(revingly)
 *    Update: 19.08.2022
*/

import { container } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { PostAkiModLoader } from "@spt-aki/loaders/PostAkiModLoader";
import { IHttpServer } from "@spt-aki/models/spt/server/IHttpServer";

const logger = container.resolve<ILogger>("WinstonLogger");
const imageRouter = container.resolve<ImageRouter>("ImageRouter");
const postAkiModLoader = container.resolve<PostAkiModLoader>("PostAkiModLoader");


class TraderPics implements IMod
{
    private pkg;
    private path = require('path');
    private modName = this.path.basename(this.path.dirname(__dirname.split('/').pop()));

    constructor() {
        this.pkg = require("../package.json");
        logger.info(`Loading: ${this.pkg.author}-${this.pkg.name} v${this.pkg.version}`);

        this.funcptr = imageRouter.getImage["IMAGE"];
        imageRouter.getImage["IMAGE"] = this.sendImage.bind(this);

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }

    public sendImage(sessionID, req, resp, body, httpServer: IHttpServer) {
        const { extension, traders } = require('./config.json');
        const filepath = `${postAkiModLoader.getModPath(this.modName)}res/`;

        const traderId = req.url.split('/').pop().split('.').shift();

        if (traders.includes(traderId)) {
            httpServer.sendFile(resp, `${filepath}${traderId}.${extension}`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }

}

module.exports = { mod: new TraderPics() }
