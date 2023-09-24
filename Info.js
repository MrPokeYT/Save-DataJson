const fs = require('fs');

class Info {
    constructor(id, server, close, channel) {
        this.id = id;
        this.close = close;
        this.channel = channel;
        this.server = server;
    }

    save() {

        if(!fs.existsSync(`./Data/${this.server}`)) {
            fs.mkdirSync(`./Data/${this.server}`, { recursive: true });
        }

        
        fs.writeFileSync(`./Data/${this.server}/${this.id}.json`, JSON.stringify(this));
    }

    delete() {
        if(!fs.existsSync(`./Data/${this.server}/${this.id}.json`)) return;
        fs.unlinkSync(`./Data/${this.server}/${this.id}.json`);
    }

    load () {
        if(!fs.existsSync(`./Data/${this.server}/${this.id}.json`)) return;
        Object.assign(this, JSON.parse(fs.readFileSync(`./Data/${this.server}/${this.id}.json`)));
    }
}

module.exports = Info;