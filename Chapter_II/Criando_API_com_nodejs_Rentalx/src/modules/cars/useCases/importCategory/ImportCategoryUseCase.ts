import fs from "fs"
import { parse } from "csv-parse"
class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {

        const strean = fs.createReadStream(file.path)

        const parseFile = parse()

        strean.pipe(parseFile)

        parseFile.on("data", async (line) => {
            console.log(line)
        })
    }
}

export { ImportCategoryUseCase }