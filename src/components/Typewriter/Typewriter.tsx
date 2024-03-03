// Import React and Material-UI components.
import React from 'react';
import { Typography } from '@mui/material';
// Import the Typewriter component from the react-simple-typewriter library.
import { Typewriter } from 'react-simple-typewriter';

/**
 * TypeWriter component to display an array of words with a typewriting effect.
 * 
 * Props:
 *  - words: An array of strings to be displayed with the typewriting animation.
 * 
 * The Typewriter effect cycles through the provided words array, displaying each
 * word one at a time with a cursor animation. The effect loops a specified number
 * of times, simulating the appearance of typing and deleting the text.
 */
const TypeWriter: React.FC<{ words: string[] }> = ({ words }) => (

    // Typography component from Material-UI to maintain consistent styling.
    <Typography gutterBottom>
        {/* Typewriter component to animate words array with a typewriting effect. */}
        <Typewriter
            words={words} // Array of words to animate.
            loop={5} // Number of times the animation should repeat.
            cursor // Enables the display of a cursor.
            cursorStyle='|' // Style of the cursor.
            typeSpeed={70} // Speed at which each character is typed.
            deleteSpeed={50} // Speed at which characters are deleted.
            delaySpeed={1000} // Delay between typing and deleting each word.
        />
    </Typography>
)

export default TypeWriter;
