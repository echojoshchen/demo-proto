// Native TypeScript implementation

export interface DemoContainer {
    objects: DemoObject[];
}

export interface DemoObject {
    info: Info;
    name: string;
    type: MyType;
    count: number;
}

export interface Info {
    id: string;
    time: number;
}

export enum MyType {
    DEFAULT = 0,
    ENABLED = 1,
    DISABLED = 2,
}

export class DemoApi {

    /**
     * Calls DoSomething
     * @param request DemoContainer message or plain object
     * @returns Promise
     */
    public async doSomething(request: DemoContainer): Promise<DemoContainer>{
        return {} as DemoContainer;
    };

}