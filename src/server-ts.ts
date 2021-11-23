/**
 * Demo of a server with TypeScript.
 */

import { Router, Request, Response } from "express";
import express from "express";
import got from "got";

import {
    DemoContainer, DemoObject, Info, MyType, DemoApi
} from "../interfaces/api";
import { DbEntry } from "../interfaces/database";

// Typescript can define enums with strings, eliminates step to convert from enum to readable string
export enum MyStringType {
    DEFAULT = "Default",
    ENABLED = "Enabled",
    DISABLED = "Disabled",
}

function serializeDbFormat(data: DemoObject): DbEntry {
    return {
        infoId: data.info?.id || "",
        infoTime: data.info?.time || 0,
        name: data.name,
        type: MyType[data.type],
        count: data.count,
    }
}

function deserializeDbFormat(data: DbEntry): DemoObject {
    return {
        info: {
            id: data.infoId,
            time: data.infoTime,
        },
        name: data.name,
        type: (MyType as any)[data.type] as MyType,
        count: data.count,
    }
}

class DemoApiImpl implements DemoApi {
    async doSomething(container: DemoContainer) {
        // Write to database
        const mockDb: {[key: string]: DbEntry} = {};
        container.objects.forEach((obj) => {
            mockDb[obj.info?.id] = serializeDbFormat(obj);
        })

        // Read from database
        const readData: DemoContainer = {
            objects: Object.values(mockDb).map((data: unknown) => deserializeDbFormat(data as DbEntry)),
        };
        return readData;
    }
}

function configureRouter(app: Router, api: DemoApiImpl): void {
    app.use(express.json());
    app.post("/do-something", async (req: Request, res: Response) => {
        const container = req.body as DemoContainer;
        try {
            const newContainer = await api.doSomething(container);
            res.send(`${JSON.stringify(newContainer)}`);
        } catch (e) {
            res.status(400).send(`${e}`);
        }
    });
}

export default async function initServer(port: number): Promise<any> {
    return new Promise((resolve) => {
        const app = express();
        configureRouter(app, new DemoApiImpl());
        const server = app.listen(port, () => {
            resolve(server);
            console.log(`REST server started listening on port ${port}`);
        });
    });
}

initServer(9876).then(async (server) => {
    // Set data fields
    const info: Info = {
        id: "1234",
        time: Date.now(),
    };
    const demoObj: DemoObject = {
        info,
        name: "Test Object",
        type: MyType.ENABLED,
        count: 100,
    };
    const container: DemoContainer = {
        objects: [demoObj],
    }

    const readData = await got.post("http://localhost:9876/do-something", {
        json: container,
		responseType: 'json'
    }).json() as DemoContainer;

    // Human readable strings
    const MyTypeToString: Record<MyType, string | undefined> = {
        [MyType.DEFAULT]: undefined,
        [MyType.DISABLED]: "Disabled",
        [MyType.ENABLED]: "Enabled",
    };
    readData.objects.forEach((obj, index) => {
        console.log("Object:", index);
        console.log("Info:", obj.info?.id);
        console.log("Time:", obj.info?.time);
        console.log("Name:", obj.name);
        console.log("Type:", MyTypeToString[obj.type]);
        console.log("Count:", obj.count);
    });

    server.close();
});