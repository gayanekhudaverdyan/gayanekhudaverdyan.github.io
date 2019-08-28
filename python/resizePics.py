from PIL import Image
import os
import shutil

rootDir = r'../pelmeni/pics'
cMaxSizeImg = 679;
cMaxWidthThumbNail = 250;
cThumbNailFileName = '12.jpg'

def getNewWidthHeight(img, maxSize):
  if (img.size[0] > img.size[1]):
    ratio = maxSize / img.size[0]
    return [int(maxSize), int(ratio * img.size[1])]
  else:
    ratio = maxSize / img.size[1]
    return [int(ratio * img.size[0]), maxSize]

def getNewWidthHeightFixedWidth(img, width):
    ratio = width / img.size[0]
    return [int(width), int(ratio * img.size[1])]
    
os.mkdir(os.path.join(rootDir, "converted"))
    
[subdir, dirs, files] = next(os.walk(rootDir))
print(files)
i = 0
for file in files:
  if file.endswith('.jpg'):
    filePath = os.path.join(subdir, file)
    print(filePath)
    img = Image.open(filePath)
    sizes = getNewWidthHeight(img, cMaxSizeImg)
    img = img.resize((sizes[0],sizes[1]), Image.ANTIALIAS)
    i+=1
    filePathTo = os.path.join(subdir,'converted', 'image' + str(i) + '.jpg')
    print(filePathTo)
    img.save(filePathTo) 
    
filePath = os.path.join(rootDir, cThumbNailFileName)
print(filePath)
img = Image.open(filePath)
sizes = getNewWidthHeightFixedWidth(img, cMaxWidthThumbNail)
img = img.resize((sizes[0],sizes[1]), Image.ANTIALIAS)
filePathTo = os.path.join(rootDir, 'converted', 'main_thumbnail.jpg')
print(filePathTo)
img.save(filePathTo) 
    
