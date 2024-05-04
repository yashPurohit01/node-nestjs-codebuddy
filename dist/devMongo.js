"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
(async () => {
    const mongod = await mongodb_memory_server_1.MongoMemoryServer.create({
        instance: {
            port: 27017,
        },
    });
    const uri = mongod.getUri();
    console.log(`Mongod started...!\nConnect at: ${uri}`);
})();
//# sourceMappingURL=devMongo.js.map