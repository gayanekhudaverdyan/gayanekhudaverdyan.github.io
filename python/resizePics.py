from PIL import Image
import os
import shutil

rootDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'

dirs = next(os.walk(rootDir))[1]
for dir in dirs:
  dir = os.path.join(rootDir, dir)
  target = os.path.join(dir, 'main.jpg')
  if os.path.exists(target):
    targetConverted = os.path.join(dir, 'main_thumbnail.jpg')
    baseheight = 186  
    img = Image.open(target)
    wpercent = (baseheight/float(img.size[1]))
    hwidth = int((float(img.size[0])*float(wpercent)))
    img = img.resize((hwidth,baseheight), Image.ANTIALIAS)
    print(targetConverted)
    img.save(targetConverted) 