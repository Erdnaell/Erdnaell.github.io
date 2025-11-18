# -*- coding: utf-8 -*-
"""
Created on Sun Oct  1 23:03:33 2023

@author: leand
"""
import numpy as np

A = float(input())
Z = float(input())

v = 15.8 #MeV
s = 18.3 #MeV
c = 0.714 #MeV
a = 23.2 #MeV

def d(A,Z):

    delta = 0

    if (Z % 2) != 0 and ((A - Z) % 2 != 0): #Z and N are odd
        delta = -12*(1/np.sqrt(A))

    if (Z % 2) == 0 and ((A - Z) % 2 == 0): #Z and N are even
        delta = 12*(1/np.sqrt(A))

    if (A % 2) != 0 : #A is odd
            delta = 0


    return delta

B = v*A - s*(A**(2/3)) - c*((Z*(Z-1))/(A**(1/3))) - a*((A-2*Z)**2)/A +d(A,Z)

Bu = B*0.001073544664258 #Convert to modified atomic unit

print(B)
print(Bu)
