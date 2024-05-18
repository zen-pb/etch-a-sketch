# Etch-a-Sketch Project

A web-based recreation of the classic Etch a Sketch drawing toy. Try it here: 

## Description

Your favorite toy from the 1960s is now on the web! Etch A Sketch is a simple web app project that recreates the classic mechanical drawing toy but with added functionality. Use your mouse to move the cursor and "draw" on the screen, just like you would turn the knobs on the original Etch A Sketch.

Start drawing now and try the web app: 

## Features
- Drawing Canvas: A grid-based canvas for creating pixel art.
- Mouse Pen: Use your mouse to draw and erase pixels.
- Knobs: Click the knobs to adjust the grid size and switch between drawing modes.
- Color Selection: Choose from a variety of colors to customize your artwork.
- Classic Mode: Draw with the default black color.
- Rainbow Mode: Cycle through a range of colors automatically while drawing.
- Eraser: Carefully erase any errors you've made.
- Clear Button: Easily reset the canvas to start a new drawing.
- Grid Size Adjustment: Customize the pixel density of the canvas.
    - Preset Sizes: Choose from 8x8, 16x16, or 32x32 grids.
    - Note: For custom sizes, please use even numbers only.

## Problem Solving Approach

This project presented several challenges, many of which are outlined in the Features section. My experience with the previous 'Janken' project helped me identify and address these challenges effectively.

### Understanding the Problems

- Canvas Size Changes: The drawing canvas starts with a default 16x16 grid. A core feature requires the canvas content to be erased whenever the size is adjusted.
- Mouse Interaction: Upon entering the canvas, the mouse cursor should change the color of the "tiles" it hovers over.
Knobs and Settings: Clicking the knobs reveals a settings box for user customization.
- Color Selection: A circular color picker displays the active color. Clicking it opens a color panel for choosing a new color.
- Classic Mode: This mode reverts the drawing color to the default.
- Rainbow Mode: This mode continuously cycles through different colors as the mouse hovers over tiles.
- Eraser: The eraser tool removes color from tiles, effectively resetting them to the canvas background color.
- Clear Button: This button clears the entire canvas, resetting all tiles to the default background color.

### Plan

#### Interface

The interface will be created using HTML and CSS. Vanilla JavaScript will handle the web app's functionality. The interface will replicate the classic Etch A Sketch design, with knobs for changing the canvas size and adjusting the mouse pen properties like color or clearing the canvas.

#### Input

The input will come from user interactions with buttons, input fields, and mouse movements over the canvas.

#### Output

The desired output is the corresponding change on the canvas, such as drawing, erasing, changing colors, or adjusting the grid size.

#### Pseudocodes

##### Grid Creation and Initialization
```
START
ON DOMContentLoaded
    GENERATE a 16x16 grid with default color of white
END
```

##### Mouse Interaction and Drawing
```
START
DECLARE cursorMode = "drawing" 

ON mouseover tile
    IF cursorMode == "drawing" THEN
        CHANGE tile color to selected color
    ELSE IF cursorMode == "eraser" THEN
        CHANGE tile color to white 
    END IF
END
```

##### Color Picker and Mode Switching
```
START
ON click color selection button
    SHOW color palette
END

ON click classic mode button
    SET cursorMode to "drawing"
    SET selected color to black 
END

ON click rainbow mode button
    SET cursorMode to "drawing"
    ENABLE rainbow mode

    DECLARE rainbowColors = [red, orange, yellow, green, blue, indigo, violet]
    DECLARE rainbowIndex = 0

    ON mouseover tile IF rainbow mode is enabled
        SET tile color to rainbowColors[rainbowIndex]
        INCREMENT rainbowIndex
        IF rainbowIndex >= length of rainbowColors THEN
            SET rainbowIndex to 0 
        END IF
    END 
END
```

##### Knobs and Settings
```
START
ON click LEFT KNOB
    SHOW panel for canvas size
        IF 8x8 button === clicked THEN
            SET canvas size to 8x8
        ELSE IF 16x16 button === clicked THEN
            SET canvas size to 16x16
        ELSE IF 32x32 button === cliked THEN
            SET canvas size to 32x32
        ELSE
            GET custom size input from user
            IF custom size is valid THEN 
                SET canvas size to custom size
            ELSE
                DISPLAY error message 
            END IF
        END IF
END 

ON click RIGHT KNOB
    SHOW panel for color settings
        IF clear button === clicked THEN
            RESET color of tiles inside canvas to default
        END IF
END
```

## Technologies
- Designed in Figma.
- Built with HTML, CSS, and vanilla JavaScript.

## Attributions
- **pen.png**: Created by Flat Icons from www.flaticon.com
- **GitHub Mark:** [GitHub Logo](https://github.com/logos)

## License