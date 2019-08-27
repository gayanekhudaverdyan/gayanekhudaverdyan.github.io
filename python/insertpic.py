import os

rootDir = r'C:\Users\khuda\Desktop\gayanekhudaverdyan.github.io'
#rootDir = r'C:\Users\khuda\Desktop\test'
searchKeyMin = r'idMin="1"'
searchKeyMax = r'idMax="1"'

def findFileByName(dir, fileName):
  for path, dirs, files in os.walk(dir):
    for file in files:
      if file == fileName:
        return os.path.join(path, file);
  return ''
  
def findMinMax(dir):
  print(dir)
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

  return min, max
  
def getFileContent(file):
  with open(file, encoding='utf8') as f:
    text = f.read().strip()
    return text
    
def substitude(text, substringBefore, substringAfter):
  position1 = text.find(substringBefore)    
  if position1 == -1:
    return text
  
  position2 = position1 + len(substringBefore)    
  return text[:position1] + substringAfter  + text[position2:]

def updateFileContent(file, text):
  print("file: " + file)
  print("text: " + text)
  with open(file, 'w', encoding='utf8') as f:
    f.write(text)
  

  

dirs = next(os.walk(rootDir))[1]
for dir in dirs:
  dir = os.path.join(rootDir, dir)
  min, max = findMinMax(dir)
  print(min)
  print(max)
  indexHTML = findFileByName(dir, "index.html")
  if indexHTML !="":
    indexHTMLContent = getFileContent(indexHTML)
    indexHTMLContent = substitude(indexHTMLContent, searchKeyMin,  r'idMin="' + str(min) + '"')
    indexHTMLContent = substitude(indexHTMLContent, searchKeyMax,  r'idMax="' + str(max) + '"')
    print(indexHTMLContent)
    updateFileContent(indexHTML, indexHTMLContent)
  
  

