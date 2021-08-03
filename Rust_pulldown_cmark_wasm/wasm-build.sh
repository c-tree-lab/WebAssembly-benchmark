#!/bin/bash

rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli

cd ./wasm-example
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen ./target/wasm32-unknown-unknown/release/wasm_example.wasm --out-dir ./dist --nodejs
cd ..
ln -sf ./wasm-example/dist
