#!/usr/bin/python

import pyautogui as pg
from PIL import ImageGrab

def getHexCode():
    # Get mouse position
    x, y = pg.position()
    # Get pixel color
    color = ImageGrab.grab().load()[x, y]
    # Convert RGB to HEX
    hex_code = '#%02x%02x%02x' % color
    # Return HEX code
    return hex_code

try:
    while True:
        print(getHexCode())
except KeyboardInterrupt:
    print('\nDone')