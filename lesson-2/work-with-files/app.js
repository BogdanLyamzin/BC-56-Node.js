import fs from "fs/promises";
import detectFileEncoding from "detect-file-encoding-and-language";

const func = async()=> {
    const filepath = "./files/file.txt";
    // const buffer = await fs.readFile(filepath);
    // const text = buffer.toString();
    // console.log(text);
    // const fileEncoding = await detectFileEncoding(filepath);
    // console.log(fileEncoding);
    // const text = await fs.readFile(filepath, fileEncoding.encoding);
    // console.log(text);
    // await fs.appendFile(filepath, "\nPython forever");
    // await fs.writeFile(filepath, "Mojo the best");
    // await fs.appendFile("./files/file2.txt", "\nPython forever");
    // await fs.writeFile("./files/file3.txt", "Mojo the best");
    // await fs.unlink("./files/file3.txt");
}

func();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
//     fs.writeFile()
// })