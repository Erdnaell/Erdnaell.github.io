

from PIL import Image
import os,sys


entries = os.scandir('images/')

files=[]

with os.scandir('images/') as entries:
    for entry in entries:
        print(entry.name)
        files.append(entry.name)
        
        
        
print(files) 


i = 0
while i < len(files)+1:
    im = Image.open(f'images/{files[i]}')
    rgb_im = im.convert('RGB')
    rgb_im.save(f'images/{files[i]}'[:-4]+'.jpg')   
    i = i+1
    
    