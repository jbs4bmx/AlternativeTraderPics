/**
 *      Name: Alternative Trader Pics
 *   Version: 350.0.1
 * Copyright: jbs4bmx, revingly
 *    Update: [DMY] 12.02.2023
*/

import { container, DependencyContainer } from "tsyringe";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";

const logger = container.resolve<ILogger>("WinstonLogger");
const imageRouter = container.resolve<ImageRouter>("ImageRouter");
const preAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");

class TraderPics implements IPreAkiLoadMod, IPostAkiLoadMod
{
    private container: DependencyContainer;
    private pkg;
    private path = require('path');
    private modName = this.path.basename(this.path.dirname(__dirname.split('/').pop()));
    private fs = require('fs');

    public postAkiLoad(container: DependencyContainer) {
        this.pkg = require("../package.json");
        const { extension, traders } = require('./config.json');
        const filepath = `${preAkiModLoader.getModPath(this.modName)}res/`;

        this.fs.readdir(filepath, (err, files) => {
            files.forEach(file => {
                const traderName = file.split('/').pop().split('.').shift()
                imageRouter.addRoute(`/files/trader/avatar/${traderName}`,`${filepath}${traderName}.${extension}`);
            });
        });
        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }

}

module.exports = { mod: new TraderPics() }
