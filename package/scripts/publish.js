import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"

const packageJson = JSON.parse(readFileSync(path.resolve(process.cwd(), "package.json"), "utf8"))


let tagVersion = process.argv.at(-1).split("/").at(-1)
packageJson.version = tagVersion?.substring(1);

writeFileSync(path.resolve(process.cwd(), "package.json"), JSON.stringify(packageJson, null, 2), "utf8")
