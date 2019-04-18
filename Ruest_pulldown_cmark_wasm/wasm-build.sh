#!/bin/bash

cd ./wasm-example
cargo install
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen ./target/wasm32-unknown-unknown/release/wasm_example.wasm --out-dir ./dist --nodejs
cd ..
ln -sf ./wasm-example/dist
