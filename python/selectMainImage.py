import os
import shutil

rootDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'

def findFileByName(dir, fileName):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file == fileName:
        return os.path.join(path, file);
  return ''
  
def findMinMax(dir):
  min = 0
  max = 0
  for i in range (0, 2000):
    filename = 'image'+str(i)+'.jpg'
    filename = os.path.join(dir, filename)
    if os.path.exists(filename):
      min = i
      break

  for i in range (min + 1, 2000):
    filename = 'image'+str(i)+'.jpg'
    filename = os.path.join(dir, filename)
    if not os.path.exists(filename):
      max = i - 1
      break

  return min, max, 
  
  

dirs = next(os.walk(rootDir))[1]
for dir in dirs:
  dir = os.path.join(rootDir, dir)
  min, max = findMinMax(dir)
  print(min)
  print(max)
  if max > 0:
    imagePath = os.path.join(dir, 'image'+str(max)+'.jpg')
    target = os.path.join(dir, 'main.jpg')
    print(imagePath)
    print(target)
    shutil.copyfile(imagePath, target)
    
  
  

