#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { decide } from "./guard.mjs";
const input=JSON.parse(readFileSync(0,"utf8")||"{}");
const d=decide(input);
process.stdout.write(JSON.stringify(d)+"\n");
