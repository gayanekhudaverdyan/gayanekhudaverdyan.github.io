import io
import shutil
import os
import codecs

def findFile(dir, extension):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file.endswith(extension):
        return os.path.join(dir, file);
  return ''

  
def findFileFirstLevel(dir, extension):
  files = next(os.walk(dir))[2]
  for file in files:
    if file.endswith(extension):
      return os.path.join(dir, file);
  return ''
  
def findFileByName(dir, fileName):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file == fileName:
        return os.path.join(path, file);
  return ''


def getFileContent(file):
  with open(file, encoding='utf8') as f:
    text = f.read().strip()
    return text
    
def updateFileContent(file, text):
  print("file: " + file)
  print("text: " + text)
  with open(file, 'w', encoding='utf8') as f:
    f.write(text)

  


rootDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'
searchKey = r'<div class="mainText">'

dirs = next(os.walk(rootDir))[1]
for dir in dirs:
  dir = os.path.join(rootDir, dir)
  convertedTXT = findFileByName(dir, "converted.txt")
  indexHTML = findFileByName(dir, "index.html")
  if indexHTML !="" and convertedTXT != "":
    indexHTMLContent = getFileContent(indexHTML)
    convertedTXTContent = getFileContent(convertedTXT)
    position = indexHTMLContent.find(searchKey)
    position += len(searchKey)
    result = indexHTMLContent[:position] + '\n' + convertedTXTContent  + '\n'  + indexHTMLContent[position:]
    updateFileContent(indexHTML, result)
  else:
    print("cannot find files in " + dir)
  
  
  
  
  
  
  
  
  
  
  
