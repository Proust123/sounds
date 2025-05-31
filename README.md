# 🐾 Animal Sound Board

This is a simple and interactive JavaScript-based web app where users can click on different animals to play their respective sounds. Each clicked animal gets briefly highlighted
with a red border and text color.

## 🎯 Features

- Dynamic creation of animal buttons
- Plays a sound associated with each animal when clicked
- Visually highlights the active animal for 2 seconds
- Clean and minimal styling


## 🧠 How It Works

1. When the page loads, a list of animals (`["Ziege", "Rinder_muh", "lion"]`) is looped through.
2. A `<div>` element is created for each animal and styled as a clickable button.
3. When an animal is clicked:
   - Its sound (e.g., `sound/lion.mp3`) is played.
   - The button gets a red highlight for 2 seconds to indicate it's active.

You can easily add more animal sounds by:
Adding the .mp3 file to the sound/ directory.
Adding the animal name to the myArray.

🛠 Technologies Used
HTML5
CSS3
Vanilla JavaScript


