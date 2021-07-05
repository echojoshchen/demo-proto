#!/usr/bin/env bash

# grpc-js
PROTO_DEST=./api/grpcjs
mkdir -p $PROTO_DEST

grpc_tools_node_protoc \
    --proto_path ./proto \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    --ts_out=grpc_js:${PROTO_DEST} \
    ./proto/*.proto \

# Protobuf.js
PROTO_DEST=./api/pbjs
mkdir -p $PROTO_DEST

pbjs \
    -t static-module \
    -w commonjs \
    -o ${PROTO_DEST}/demo.js \
    proto/demo.proto
pbts -o ${PROTO_DEST}/demo.d.ts ${PROTO_DEST}/demo.js