# Body Type and Dressing Suggestions

A simple web application that helps users determine their body type based on measurements and provides personalized dressing suggestions.

## About

This app calculates your body type (Inverted Triangle, Pear, Hourglass, or Rectangle) based on your shoulder, waist, and hip measurements, then provides tailored fashion advice to help you dress for your body shape.

## Features

- **Body Type Calculator**: Enter your measurements to discover your body type
- **Personalized Suggestions**: Get specific dressing recommendations for your body type
- **Clean Design**: Beautiful pastel-themed interface that's easy to use
- **Instant Results**: See your body type and suggestions immediately after submitting

## Body Types

The app identifies four main body types:

1. **Inverted Triangle**: Broader shoulders than hips
2. **Pear**: Hips wider than shoulders
3. **Hourglass**: Balanced shoulders and hips with a defined waist
4. **Rectangle**: Shoulders, waist, and hips relatively equal in width

## How to Use

1. Open the application in your web browser
2. Enter your measurements in inches:
   - Shoulder Width
   - Waist Size
   - Hip Size
3. Click "Find Body Type"
4. View your body type and personalized dressing suggestions

## Installation & Running

This is a static HTML/CSS/JavaScript application. No build process required!

### Option 1: Simple HTTP Server (Recommended)

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 5000 -a 0.0.0.0 -c-1
```

### Option 2: Any Web Server

Simply serve the files using any web server or open `index.html` directly in your browser.

## Project Structure

```
.
├── index.html    # Main HTML structure
├── style.css     # Styling with pastel color theme
├── script.js     # Body type calculation logic
└── README.md     # This file
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)

## License

This project is open source and available for personal use.

---


