import os
import shutil

rootDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'

def findFileByName(dir, fileName):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file == fileName:
        return os.path.join(path, file);
  return ''
  
mainjpgPath = os.path.join(rootDir, "main.jpg")

dirs = next(os.walk(rootDir))[1]
for dir in dirs:
  dir = os.path.join(rootDir, dir)
  target = os.path.join(dir, 'main.jpg')
  if not os.path.exists(target):
    shutil.copyfile(mainjpgPath, target)
    
  
  

