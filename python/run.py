import os
from shutil import copyfile

dropboxDir = r'C:\Users\khuda\Dropbox\mama\work\разделенные главы'
targetDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'


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
  
  
def copyToTarget(docxFile, jpgFile):
  jpgFileBaseName = os.path.basename(jpgFile)
  docxFileBaseName = os.path.basename(docxFile)
  jpgFileInTargetDir = findFileByName(targetDir, jpgFileBaseName)
  if jpgFileInTargetDir != "":
    #print(jpgFileInTargetDir)
    directory = os.path.dirname(jpgFileInTargetDir)
    targetDocxFile = os.path.join(directory, docxFileBaseName)
    #print("from" + docxFile)
    #print("target dir" + targetDocxFile)
    #copyfile(docxFile, targetDocxFile)
  else:
    print("jpg doesn't exists")
    
    
  

def processDir(dir):
  jpgFile = findFile(dir, '.jpg');
  docxFile = findFileFirstLevel(dir, '.docx')
  if (jpgFile != "")and(docxFile != ""):
    copyToTarget(docxFile, jpgFile)
  else:
    print("not found jpg file: " + dir)

  
dirs = next(os.walk(dropboxDir))[1]
for dir in dirs:
 currentDir = os.path.join(dropboxDir, dir); 
 processDir(currentDir)
   
 