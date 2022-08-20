    /**
    public preAkiLoad() {
        this.pkg = require("../package.json")
        logger.info(`Loading: ${this.pkg.author}-${this.pkg.name} v${this.pkg.version}`);

        this.funcptr = imageRouter.getImage["IMAGE"];
        imageRouter.getImage["IMAGE"] = this.sendImage.bind(this);

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);

    }

    public postAkiLoad() {
        this.pkg = require("../package.json");

        this.funcptr = imageRouter.getImage["IMAGE"];
        imageRouter.getImage["IMAGE"] = this.sendImage.bind(this);

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}:Cached Successfully`);
    }
    */