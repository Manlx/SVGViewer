import express from "express";
import fs from "fs";

import {exec} from "child_process";
import cors from "cors";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

export const Config = {
  PORT: 1337
};

export const App = express();

App.use(express.json());
App.use(cors({origin: "*"}))

let dirs = __dirname.split("\\"); 

dirs = dirs.slice(0,dirs.length - 2)
console.log(`${dirs.join("\\")}\\frontend\\dist`)
App.use("/",express.static(`${dirs.join("\\")}\\frontend\\dist`))

const SVGs: string[] = [];

exec("dir", (err,stdout)=>{

  if (err) {

    return;
  }

  stdout.split('\r\n').filter((file)=>{ return file.indexOf(".svg") >= 0}).forEach( svg => {
    const splits = svg.split(" ");

    SVGs.push(splits[splits.length - 1]);
  });

})

export function LaunchServer(){

  App.get("/svgs", (req, res)=>{

    res.send(SVGs)
  })

  App.get("/svg/:svgName",(req, res)=>{

    console.log(req.params.svgName);

    const path = req.params.svgName;

    if (fs.existsSync(path)){

      res.sendFile(`${process.cwd()}\\${path}`);
    }

  })

  App.listen( Config.PORT, () => {

    console.log(`hosting on: http://localhost:${Config.PORT}`)
  })
}