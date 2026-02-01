# Proto Demo

This repo compares different ways of using Protobuf and gRPC in TypeScript and Node.js with using
native TypeScript. It demonstrates two different use cases: Writing and reading from a database,
and serving a gRPC service.

## Usage

Use `npm run <script>` to run any of the demonstrates, which will take an object, serialize and
deserialize it, and then print the output.

Options:

| Script                     | Description                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `database:ts`              | A native TypeScript implementation of mock database interactions.                                            |
| `database:google`          | A `google-protobuf` implementation of mock database interactions.                                            |
| `database:pbjs`            | A `Protobuf.js` implementation of mock database interactions.                                                |
| `database:loader`          | A `proto-loader-gen-types` implementation of mock database interactions.                                     |
| `server:ts`                | A native TypeScript implementation of a gRPC service.                                                        |
| `server:google`            | A `google-protobuf` and `@grpc/grpc-js` implementation of a gRPC service.                                    |
| `server:google-persistent` | A `google-protobuf` and `@grpc/grpc-js` implementation of a gRPC service that stays open.                    |
| `server:loader`            | A `@grpc/proto-loader` implementation of a gRPC service.                                                     |
| `server:loader-persistent` | A `@grpc/proto-loader` implementation of a gRPC service that stays open.                                     |
| `server:loader-google`     | A `@grpc/proto-loader` implementation of a gRPC server, with a `google-protobuf` and `@grpc/grpc-js` client. |
| `enum:ts`                  | A native TypeScript implementation of enum to string conversion.                                             |
| `enum:google`              | A `google-protobuf` implementation of enum to string conversion.                                             |
| `enum:pbjs`                | A `Protobuf.js` implementation of enum to string conversion.                                                 |
| `enum:loader`              | A `proto-loader-gen-types` implementation of enum to string conversion.                                      |
| `proto`                    | Regenerate the libraries with `google-protobuf` and `pbjs`.                                                  |

```bash
npm run database:ts;
npm run database:google;
npm run database:pbjs;
npm run database:loader;
npm run enum:ts;
npm run enum:google;
npm run enum:pbjs;
npm run enum:loader;
npm run server:ts;
npm run server:google;
npm run server:loader;
```

## grpcurl

```sh
grpcurl -plaintext -proto proto/demo.proto \
  -d '{"container": {"objects": [{"info": {"id": "1234"}, "name": "Test", "type": "MY_TYPE_ENABLED", "count": 100}]}}' \
  localhost:5001 org.demo.v1.DemoApiService/DoSomething
```

## Reflection

The `server:loader` version implements server reflection. One way to use this is to remove the line
that closes the server and use grpcui:

```bash
go install github.com/fullstorydev/grpcui/cmd/grpcui
grpcui -plaintext localhost:5001
```

## References

* [Protobuf](https://github.com/protocolbuffers/protobuf)
* [gRPC](https://github.com/grpc/grpc-node)
* [Protobuf.js](https://github.com/protobufjs/protobuf.js)
* [grpc-node-server-reflection](https://github.com/papajuanito/grpc-node-server-reflection)
* [grpcui](https://github.com/fullstorydev/grpcui)
