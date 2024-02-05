//Understand FileSystem
const fs = require("fs");

// readFile;

fs.readFile("./myFiles/myFile.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//writeFile;

fs.writeFile(
  "./myFiles/myFile.txt",
  "new content will be replaced by this",
  () => {
    console.log("Content is placed");
  }
);

//keep old content and do concatenation

fs.readFile("./myFiles/myFile.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const newContent = "I am new content";
  const combinedContent = data + "\n" + newContent;

  fs.writeFile("./myFiles/myFile.txt", combinedContent, () => {
    console.log("Content is placed successfully");
  });
});

//directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder is deleted");
  });
}

//deleting

if (fs.existsSync("./myFiles/myFile1.txt")) {
  fs.unlink("./myFiles/myFile1.txt", (error) => {
    if (err) {
      console.log(error);
    }
    console.log("file is deleted");
  });
}
