/**
 * Custom Animation 2025-08-25
 * 
 * Exported from color editor
 */

import type { Animation, AnimationFrame } from '../animation-registry';

// Color constants for easy reference
const BLACK = 0;
const RED = 1;
const GREEN = 2;
const YELLOW = 3;
const BLUE = 4;
const MAGENTA = 5;
const CYAN = 6;
const WHITE = 7;
const BRIGHT_BLACK = 8;
const BRIGHT_RED = 9;
const BRIGHT_GREEN = 10;
const BRIGHT_YELLOW = 11;
const BRIGHT_BLUE = 12;
const BRIGHT_MAGENTA = 13;
const BRIGHT_CYAN = 14;
const BRIGHT_WHITE = 15;

export function createAnimation(version: string = '0.0.1'): Animation {
  // Helper function to create properly spaced version string for alignment
  const createVersionLine = (version: string, spacesAfterVersion: number): string => {
    // Calculate the total width needed: "CLI Version " + version + spaces to maintain alignment
    const baseText = `CLI Version ${version}`;
    const targetWidth = 'CLI Version 0.0.1'.length + spacesAfterVersion; // Use default version as baseline
    const currentWidth = baseText.length;
    const paddingNeeded = Math.max(0, targetWidth - currentWidth);
    return baseText + ' '.repeat(paddingNeeded);
  };

  const frames: AnimationFrame[] = [
  {
    title: "Frame 0",
    duration: 80,
    content: `

`
  },
  {
    title: "Frame 1",
    duration: 80,
    content: `
┌┐                                                                              
││                                                                              
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
││                                                                              
└┘`
  },
  {
    title: "Frame 2",
    duration: 80,
    content: `
┌──     ──┐
│         │
 █▄▄▄      
 ███▀█     
 ███ ▐▌    
 ███ ▐▌    
   ▀▀█▌    
   ▐ ▌     
    ▐      
│█▄▄▌     │
└▀▀▀    ──┘`
  },
  {
    title: "Frame 3",
    duration: 80,
    content: `
┌──                ──┐                                                          
│     ▄▄▄▄▄          │                                                          
   ▄▄████████▄▄▄                                                                
  █████████████▀█                                                               
 ▐█████████████ ▐▌                                                              
 ▐█████████████ ▐▌                                                              
  █████  ███  ▀▀█▌                                                              
   ▀████████  ▐ ▌                                                               
     ▀█████▌   ▐                                                                
│  *    ▀████▄▄▌     │                                                          
└──         ▀▀▀    ──┘`
  },
  {
    title: "Frame 4",
    duration: 60,
    content: `
┌──                                ──┐
│                  ▄▄▄▄▄▄▄▄          │
    Welcome totH▄▄███████████▄▄▄      
    █████┐ ███▌█████████████▀▀▀▀█     
   ██┌───┘██┌─▐███████████████  ▐▌    
   ██│    ██│ ▐████████████████ ▐▌    
   ██│    ██│  ████▄     █▄  ▀▀▀█▌    
   └█████┐└████│▀██████████   ▐ ▌     
   |└────┘ └───┘  ▀███████▄    ▐      
│ - -                ▀███████▄▄▌     │
└──|                     ▀▀▀▀▀▀    ──┘`
  },
  {
    title: "Frame 5",
    duration: 70,
    content: `
┌──                                             ──┐
│                        *       ▄▄▄▄▄▄▄          │
    Welcome to GitHub         ▄▄██████████▄▄▄      
    █████┐ █████┐ █████┐ ██┐███████████████▀▀█     
   ██┌───┘██┌──██┐██┌─██┐██│████████████████ ▐▌    
   ██│    ██│  ██│█████┌┘██│████████████████ ▐▌    
   ██│    ██│  ██│██┌──┘ ██│█████▄   ███▄  ▀▀█▌    
   └█████┐└█████┌┘██│    ██│█▌▀██████████  ▐ ▌     
    └────┘ └────┘ └─┘    └─┘└─┘ ▀███████▌   ▐      
│·   ·                             ▀██████▄▄▌     │
└──                                      ▀▀▀    ──┘`
  },
  {
    title: "Frame 6",
    duration: 80,
    content: `
┌──                     . ,                                ──┐
│                                             ▄▄▄▄▄          │
    Welcome to GitHub   ' '                ▄▄████████▄▄▄      
    █████┐ █████┐ █████┐ ██┐██┐     █████ █████████████▀█     
   ██┌───┘██┌──██┐██┌─██┐██│██│ *  ██┌──█▐█████████████ ▐▌    
   ██│    ██│  ██│█████┌┘██│██│    ██│  █▐█████████████ ▐▌    
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  █▌█████  ███  ▀▀█▌    
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘▀████████  ▐ ▌     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   ▀█████▌   ▐      
│                              CLI Version      ▀████▄▄▌     │
└──                                                 ▀▀▀    ──┘`
  },
  {
    title: "Frame 7",
    duration: 80,
    content: `
┌──                                                               ──┐           
│                                                   ▄▄█████▄        │           
    Welcome to GitHub                             ▄███████████▄                  
    █████┐ █████┐ █████┐ ██┐██┐ |   █████┐ █████▐███████████████▄               
   ██┌───┘██┌──██┐██┌─██┐██│██│- - ██┌──██┐└─██┌▐██████████  ▀███               
   ██│    ██│  ██│█████┌┘██│██│ |  ██│  ██│  ██│███████████▄  ███               
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│▀█  █████  ▀████                
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│ ▀██████▌    ▄ ▌                
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘   ▀████     ▀▐                 
│                              ${createVersionLine(version, 5)}▀▀██▄▄▄▄▄▀     │           
└──                                                               ──┘`
  },
  {
    title: "Frame 8",
    duration: 80,
    content: `
┌──                                                                     ──┐
│                                                      ▄▄██████▄          │
    Welcome to GitHub           .                     █████████████
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐   ███████▀▀▀█▌ ▀█
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘  ███████    ██  █▌
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│   ▄████████▄  ▄████▌
   ██│    ██│  ██│██┌──┘ ██│██│ .  ██│  ██│  ██│   █ █████  ▀▀▀▀ ▄▐█
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│   ▀██████    █  ▀ █
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀████▄       ▄▌
│                              ${createVersionLine(version, 8)}▀▀████████▀       │
└──                                                                     ──┘`
  },
  {
    title: "Frame 9",
    duration: 80,
    content: `
┌──                                                                        ──┐  
│                                                          ▄██████▄▄         │  
    Welcome to GitHub                                     ███▀▀▀▀██▀▀█▄         
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐      ▄███     ▐█   █         
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▄████▄   ▄██▄ ▄██▄       
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│     ▄████████████▀███████      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ▌█████▌    ▄  ▄  ▐███      
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│  *  ██████▌    █  █  ▐█▀       
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘      ▀█████▄        ▄█▀        
│                              ${createVersionLine(version, 10)}▀▀█████████▀       │  
└──                                                                        ──┘`
  },
  {
    title: "Frame 10",
    duration: 80,
    content: `
┌──                                                                         ──┐ 
│                                                           ▄██████▄          │ 
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄   *    
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌       
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌       
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│ . , ████     ▄  ▄     ████     
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████     █  █     ████     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘ ' ' ▀███▄            ▄███▀     
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │ 
└──                                                                         ──┘`
  },
  {
    title: "Frame 10a",
    duration: 80,
    content: `
┌──                                                                         ──┐ 
│                                                           ▄██████▄       |  │ 
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄  - -   
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌  |    
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌       
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ████     ▄  ▄     ████     
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████     █  █     ████     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀███▄            ▄███▀     
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │ 
└──                                                                         ──┘`
  },
  {
    title: "Frame 10b",
    duration: 80,
    content: `
┌──                                                                        .──┐ 
│                                                           ▄██████▄          │ 
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄ ·   ·
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌       
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌  .    
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ████     ▄  ▄     ████     
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████     █  █     ████     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀███▄            ▄███▀     
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │ 
└──                                                                         ──┘`
  },
  {
    title: "Frame 10c",
    duration: 300,
    content: `
┌──                                                                         ──┐ 
│                                                           ▄██████▄          │ 
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄      
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌       
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌       
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ████     ▄  ▄     ████     
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████     █  █     ████     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀███▄            ▄███▀     
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │ 
└──                                                                         ──┘`
  },
  {
    title: "Frame 11",
    duration: 80,
    content: `
┌──                                                                         ──┐
│                                                           ▄██████▄          │
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄       
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌      
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌      
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄     
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ████              ████    
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████    ▀▀  ▀▀    ████    
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀███▄            ▄███▀    
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │
└──                                                                         ──┘`
  },
  {
    title: "Frame 12",
    duration: 850,
    content: `
┌──                                                                         ──┐ 
│                                                           ▄██████▄          │ 
    Welcome to GitHub                                   ▄█▀▀▀▀▀██▀▀▀▀▀█▄        
    █████┐ █████┐ █████┐ ██┐██┐     █████┐ ██████┐     ▐█      ▐▌      █▌       
   ██┌───┘██┌──██┐██┌─██┐██│██│    ██┌──██┐└─██┌─┘     ▐█▄    ▄██▄    ▄█▌       
   ██│    ██│  ██│█████┌┘██│██│    ██│  ██│  ██│      ▄▄███████▀▀███████▄▄      
   ██│    ██│  ██│██┌──┘ ██│██│    ██│  ██│  ██│     ████     ▄  ▄     ████     
   └█████┐└█████┌┘██│    ██│██████┐└█████┌┘  ██│     ████     █  █     ████     
    └────┘ └────┘ └─┘    └─┘└─────┘ └────┘   └─┘     ▀███▄            ▄███▀     
│                              ${createVersionLine(version, 8)}▀▀████████████▀▀      │ 
└──                                                                         ──┘`,
    colors: {
      "2,60": BRIGHT_MAGENTA,
      "2,61": BRIGHT_MAGENTA,
      "2,62": BRIGHT_MAGENTA,
      "2,63": BRIGHT_MAGENTA,
      "2,64": BRIGHT_MAGENTA,
      "2,65": BRIGHT_MAGENTA,
      "2,66": BRIGHT_MAGENTA,
      "2,67": BRIGHT_MAGENTA,
      "6,54": BRIGHT_MAGENTA,
      "6,55": BRIGHT_MAGENTA,
      "6,56": BRIGHT_MAGENTA,
      "6,73": BRIGHT_MAGENTA,
      "6,72": BRIGHT_MAGENTA,
      "6,71": BRIGHT_MAGENTA,
      "7,53": BRIGHT_MAGENTA,
      "7,54": BRIGHT_MAGENTA,
      "7,55": BRIGHT_MAGENTA,
      "7,56": BRIGHT_MAGENTA,
      "8,56": BRIGHT_MAGENTA,
      "8,55": BRIGHT_MAGENTA,
      "8,54": BRIGHT_MAGENTA,
      "8,53": BRIGHT_MAGENTA,
      "9,53": BRIGHT_MAGENTA,
      "9,54": BRIGHT_MAGENTA,
      "9,55": BRIGHT_MAGENTA,
      "9,56": BRIGHT_MAGENTA,
      "9,57": BRIGHT_MAGENTA,
      "9,70": BRIGHT_MAGENTA,
      "9,71": BRIGHT_MAGENTA,
      "9,72": BRIGHT_MAGENTA,
      "9,73": BRIGHT_MAGENTA,
      "9,74": BRIGHT_MAGENTA,
      "8,74": BRIGHT_MAGENTA,
      "8,73": BRIGHT_MAGENTA,
      "8,72": BRIGHT_MAGENTA,
      "8,71": BRIGHT_MAGENTA,
      "7,71": BRIGHT_MAGENTA,
      "7,72": BRIGHT_MAGENTA,
      "7,73": BRIGHT_MAGENTA,
      "7,74": BRIGHT_MAGENTA,
      "3,56": BRIGHT_CYAN,
      "3,57": BRIGHT_CYAN,
      "3,58": BRIGHT_CYAN,
      "3,59": BRIGHT_CYAN,
      "3,60": BRIGHT_CYAN,
      "3,61": BRIGHT_CYAN,
      "3,62": BRIGHT_CYAN,
      "3,63": BRIGHT_CYAN,
      "3,64": BRIGHT_CYAN,
      "3,65": BRIGHT_CYAN,
      "3,66": BRIGHT_CYAN,
      "3,67": BRIGHT_CYAN,
      "3,68": BRIGHT_CYAN,
      "3,69": BRIGHT_CYAN,
      "3,70": BRIGHT_CYAN,
      "3,71": BRIGHT_CYAN,
      "4,55": BRIGHT_CYAN,
      "4,56": BRIGHT_CYAN,
      "4,63": BRIGHT_CYAN,
      "4,71": BRIGHT_CYAN,
      "4,72": BRIGHT_CYAN,
      "5,55": BRIGHT_CYAN,
      "5,56": BRIGHT_CYAN,
      "5,57": BRIGHT_CYAN,
      "5,62": BRIGHT_CYAN,
      "5,63": BRIGHT_CYAN,
      "5,64": BRIGHT_CYAN,
      "5,65": BRIGHT_CYAN,
      "5,70": BRIGHT_CYAN,
      "5,71": BRIGHT_CYAN,
      "5,72": BRIGHT_CYAN,
      "6,57": BRIGHT_CYAN,
      "6,58": BRIGHT_CYAN,
      "6,59": BRIGHT_CYAN,
      "6,60": BRIGHT_CYAN,
      "6,61": BRIGHT_CYAN,
      "6,62": BRIGHT_CYAN,
      "6,63": BRIGHT_CYAN,
      "6,64": BRIGHT_CYAN,
      "6,65": BRIGHT_CYAN,
      "6,66": BRIGHT_CYAN,
      "6,67": BRIGHT_CYAN,
      "6,68": BRIGHT_CYAN,
      "6,69": BRIGHT_CYAN,
      "6,70": BRIGHT_CYAN,
      "4,64": BRIGHT_CYAN,
      "10,56": MAGENTA,
      "10,57": MAGENTA,
      "10,58": MAGENTA,
      "10,59": MAGENTA,
      "10,60": MAGENTA,
      "10,61": MAGENTA,
      "10,62": MAGENTA,
      "10,63": MAGENTA,
      "10,64": MAGENTA,
      "10,65": MAGENTA,
      "10,66": MAGENTA,
      "10,67": MAGENTA,
      "10,68": MAGENTA,
      "10,69": MAGENTA,
      "10,70": MAGENTA,
      "10,71": MAGENTA,
      "8,62": BRIGHT_GREEN,
      "7,62": BRIGHT_GREEN,
      "7,65": BRIGHT_GREEN,
      "8,65": BRIGHT_GREEN,
      "11,76": BRIGHT_BLACK,
      "11,77": BRIGHT_BLACK,
      "11,78": BRIGHT_BLACK,
      "10,78": BRIGHT_BLACK,
      "2,78": BRIGHT_BLACK,
      "1,76": BRIGHT_BLACK,
      "1,77": BRIGHT_BLACK,
      "1,78": BRIGHT_BLACK,
      "1,2": BRIGHT_BLACK,
      "1,1": BRIGHT_BLACK,
      "1,0": BRIGHT_BLACK,
      "2,0": BRIGHT_BLACK,
      "11,2": BRIGHT_BLACK,
      "11,1": BRIGHT_BLACK,
      "11,0": BRIGHT_BLACK,
      "10,0": BRIGHT_BLACK,
      "10,31": WHITE,
      "10,32": WHITE,
      "10,33": WHITE,
      "10,35": WHITE,
      "10,36": WHITE,
      "10,37": WHITE,
      "10,38": WHITE,
      "10,39": WHITE,
      "10,40": WHITE,
      "10,41": WHITE,
      "10,43": WHITE,
      "10,44": WHITE,
      "10,45": WHITE,
      "10,46": WHITE,
      "10,47": WHITE,
      "3,4": WHITE,
      "3,5": WHITE,
      "3,6": WHITE,
      "3,7": WHITE,
      "3,8": WHITE,
      "3,9": WHITE,
      "3,10": WHITE,
      "3,12": WHITE,
      "3,13": WHITE,
      "3,15": WHITE,
      "3,16": WHITE,
      "3,17": WHITE,
      "3,18": WHITE,
      "3,19": WHITE,
      "3,20": WHITE,
      "9,5": BRIGHT_BLACK,
      "9,4": BRIGHT_BLACK,
      "9,6": BRIGHT_BLACK,
      "9,7": BRIGHT_BLACK,
      "9,8": BRIGHT_BLACK,
      "9,9": BRIGHT_BLACK,
      "8,9": BRIGHT_BLACK,
      "8,3": BRIGHT_BLACK,
      "7,5": BRIGHT_BLACK,
      "6,5": BRIGHT_BLACK,
      "5,5": BRIGHT_BLACK,
      "5,6": BRIGHT_BLACK,
      "5,7": BRIGHT_BLACK,
      "5,8": BRIGHT_BLACK,
      "5,9": BRIGHT_BLACK,
      "4,9": BRIGHT_BLACK,
      "9,11": BRIGHT_BLACK,
      "9,12": BRIGHT_BLACK,
      "9,13": BRIGHT_BLACK,
      "9,14": BRIGHT_BLACK,
      "9,15": BRIGHT_BLACK,
      "9,16": BRIGHT_BLACK,
      "8,10": BRIGHT_BLACK,
      "8,16": BRIGHT_BLACK,
      "8,17": BRIGHT_BLACK,
      "7,17": BRIGHT_BLACK,
      "6,17": BRIGHT_BLACK,
      "5,17": BRIGHT_BLACK,
      "4,16": BRIGHT_BLACK,
      "4,23": BRIGHT_BLACK,
      "5,21": BRIGHT_BLACK,
      "5,20": BRIGHT_BLACK,
      "5,24": BRIGHT_BLACK,
      "6,24": BRIGHT_BLACK,
      "6,23": BRIGHT_BLACK,
      "7,21": BRIGHT_BLACK,
      "7,22": BRIGHT_BLACK,
      "7,23": BRIGHT_BLACK,
      "8,19": BRIGHT_WHITE,
      "7,20": BRIGHT_BLACK,
      "9,20": BRIGHT_BLACK,
      "8,20": BRIGHT_BLACK,
      "9,18": BRIGHT_BLACK,
      "9,19": BRIGHT_BLACK,
      "9,26": BRIGHT_BLACK,
      "9,27": BRIGHT_BLACK,
      "9,28": BRIGHT_BLACK,
      "9,25": BRIGHT_BLACK,
      "9,29": BRIGHT_BLACK,
      "9,30": BRIGHT_BLACK,
      "9,31": BRIGHT_BLACK,
      "9,32": BRIGHT_BLACK,
      "9,33": BRIGHT_BLACK,
      "9,34": BRIGHT_BLACK,
      "4,27": BRIGHT_BLACK,
      "5,27": BRIGHT_BLACK,
      "6,27": BRIGHT_BLACK,
      "7,27": BRIGHT_BLACK,
      "8,27": BRIGHT_BLACK,
      "5,30": BRIGHT_BLACK,
      "4,30": BRIGHT_BLACK,
      "6,30": BRIGHT_BLACK,
      "7,30": BRIGHT_BLACK,
      "8,35": BRIGHT_BLACK,
      "8,34": BRIGHT_BLACK,
      "9,36": BRIGHT_BLACK,
      "9,37": BRIGHT_BLACK,
      "9,38": BRIGHT_BLACK,
      "9,39": BRIGHT_BLACK,
      "9,40": BRIGHT_BLACK,
      "9,41": BRIGHT_BLACK,
      "8,41": BRIGHT_BLACK,
      "5,42": BRIGHT_BLACK,
      "6,42": BRIGHT_BLACK,
      "7,42": BRIGHT_BLACK,
      "8,42": BRIGHT_BLACK,
      "4,41": BRIGHT_BLACK,
      "5,39": BRIGHT_BLACK,
      "5,38": BRIGHT_BLACK,
      "5,37": BRIGHT_BLACK,
      "6,37": BRIGHT_BLACK,
      "7,37": BRIGHT_BLACK,
      "5,44": BRIGHT_BLACK,
      "5,43": BRIGHT_BLACK,
      "5,48": BRIGHT_BLACK,
      "5,49": BRIGHT_BLACK,
      "4,49": BRIGHT_BLACK,
      "5,47": BRIGHT_BLACK,
      "6,47": BRIGHT_BLACK,
      "7,47": BRIGHT_BLACK,
      "8,47": BRIGHT_BLACK,
      "9,47": BRIGHT_BLACK,
      "9,46": BRIGHT_BLACK,
      "9,45": BRIGHT_BLACK
    }
  }
  ];

  return {
    metadata: {
      id: 'custom-animation-2025-08-25',
      name: 'Custom Animation 2025-08-25',
      description: 'Exported from color editor'
    },
    frames
  };
}

const animation: Animation = createAnimation();
export default animation;
