# Password Generator

## Description
This webpage is intended to be used as a password generator, with a series of simple questions answered by the user to determine the structure of the outputted password. 
Once the user clicks the Generate Password CTA, they will be prompted to provide a character limit and decide which character types should be included. Once provided, a random password will be displayed within the Text Area field.

**The following processes are used in order to create this functionality:**
* Basic HTML file which contains a text area and button.
* Javascript file which contains a variety of functions:
  * All possible characters contained within arrays.
  * Password Options showcased to user as prompts and returned as an object.
  * Characters variable created as an array which uses the concat method to compile a character pool from which to select password from.
  * New Password created by randomly selecting characters from Characters variable until limit is reached.
  * Password written to text area via document object.

## Installation
To review the portfolio, please follow this URL: https://michaelfriel.github.io/password-generator/

The code is available to be cloned from the Bootstrap-Portfolio repository, using gut commands. To access this, please follow this URL: https://github.com/MichaelFriel/password-generator
## Usage

## License
Please see Mit License contained within repository.