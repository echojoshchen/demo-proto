import type { ConnectRouter } from "@connectrpc/connect";
import { DemoApiService, DoSomethingRequest } from "../api/buf/demo_pb";

export default (router: ConnectRouter) => {
  // registers org.demo.v1.DemoApiService
  router.service(DemoApiService, {
    // implements rpc DoSomething
    async doSomething(req: DoSomethingRequest) {
      // Process the container and return it
      const container = req.container;
      
      // Example processing: you can modify the container here
      // For now, just return it as-is
      return { container };
    },
  });
};
