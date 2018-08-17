# Beep Boop

#### Beep Boop! Number converter website, 8.17.2018

#### By Hyung Lee

## Description

A website which displays a range of numbers from 0 to the user input and replaces numbers with a "Beep!", "Boop!", or "I'm sorry, 'username'. I'm afraid I can't do that" according to the rules. Independent Friday project for 8.17.2018.

## Specifications
* The program will give an error message if the input is not a number.
	- Example Input: ABC
	- Example Output: "Please enter a number."
* The program will take a number input and return a range of numbers from to the input number. It will replace all numbers that contain 0 with a "Beep!".
	- Example Input: 3
	- Example Output: ["Beep!", 1, 2, 3]
* The program will take a number input and return a range of numbers from to the input number. It will replace all numbers that contain 1 with a "Boop!".
	- Example Input: 3
	- Example Output: [0, "Boop!", 2, 3]
* The program will take a number input and return a range of numbers from to the input number. It will replace all numbers that are divisible by 3 with "I'm sorry, 'username'. I'm afraid I can't do that.".
	- Example Input: 3
	- Example Output: [0, 1, 2, "I'm sorry, 'username'. I'm afraid I can't do that"]
* The program will have the following priority in applying the three rules above.
	* Divisible by 3
	* Replace 1's with "Boop!"
	* Replace 0's with "Beep!"
	- Example Input: 30
	- Example Output: [..., 25, "I'm sorry, 'username'. I'm afraid I can't do that", 26, 27, 28, 29, "I'm sorry, 'username'. I'm afraid I can't do that"]

## Setup/Installation Requirements

* Clone this repository from https://github.com/HyungNLee/beep-boop.git
  * jQuery and Bootstrap already included.
* Open up the folder and open up index.html.

## Support and contact details

Hyung Lee - hyungnaelee@gmail.com

## Technologies Used

HTML

CSS

Git

Github

Atom

JavaScript

Bootstrap

jQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2018 **Hyung Lee**
