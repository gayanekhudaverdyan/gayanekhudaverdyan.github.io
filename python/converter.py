from docx import Document
import io
import shutil
import os

def findFile(dir, extension):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file.endswith(extension):
        return os.path.join(dir, file);
  return ''

def convertDocxToText(path):
    for d in os.listdir(path):
        fileExtension=d.split(".")[-1]
        if fileExtension =="docx":
            docxFilename = os.path.join(path,d)
            print(docxFilename)
            document = Document(docxFilename)
            textFilename = os.path.join(path, "converted.txt")
            with io.open(textFilename,"w", encoding="utf-8") as textFile:
                for para in document.paragraphs: 
                    textFile.write((para.text))
                    textFile.write("<br>\n")
                    print(para.text)

def convert(path):
  for root, dirs, files in os.walk(path):
    for file in files:
      if file.endswith(".docx"):
        fullpath = os.path.join(root, file)
        print("converting: " + fullpath)
        convertDocxToText(os.path.dirname(fullpath))
  

path= r"C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io"
convert(path)
#convertDocxToText(path)