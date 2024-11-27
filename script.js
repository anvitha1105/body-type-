document.getElementById('bodyTypeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get user inputs
    const shoulders = parseFloat(document.getElementById('shoulders').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);
  
    // Determine body type
    let bodyType;
    if (shoulders / waist > 1.5) {
      bodyType = "Inverted Triangle";
    } else if (hips / shoulders > 1.2) {
      bodyType = "Pear";
    } else if (Math.abs(shoulders - hips) <= 2 && shoulders / waist < 1.5) {
      bodyType = "Hourglass";
    } else {
      bodyType = "Rectangle";
    }
  
    // Dressing suggestions
    const suggestions = {
      "Inverted Triangle": `
        <p>Your shoulders are broader than your hips, making your body type an <strong>Inverted Triangle</strong>.</p>
        <p>To create balance, focus on adding volume to your lower half while minimizing attention on your shoulders. 
        Opt for A-line skirts, wide-leg pants, and dresses that flare out from the waist. Avoid structured shoulder pads or 
        puffed sleeves that may exaggerate the broadness of your shoulders. V-necklines and darker colors on top can also help 
        soften your upper body. Pair these with bold prints or bright colors on your bottom half to draw attention there.</p>
      `,
      "Pear": `
        <p>You have a <strong>Pear</strong> body type, with hips wider than your shoulders.</p>
        <p>Focus on accentuating your upper body to balance your silhouette. Choose tops with bold patterns, ruffles, or embellishments 
        to draw attention upwards. Off-shoulder, boat-neck, and scoop-neck tops work beautifully for you. Pair them with straight-leg 
        or bootcut jeans and avoid tight-fitting pants that emphasize the width of your hips. A-line dresses and skirts are great choices 
        to flatter your figure.</p>
      `,
      "Hourglass": `
        <p>You have a balanced <strong>Hourglass</strong> body type, with shoulders and hips of similar width and a defined waist.</p>
        <p>Highlight your waist with fitted or belted dresses to emphasize your natural curves. Wrap dresses, high-waisted skirts, 
        and peplum tops work well to flatter your proportions. Avoid baggy clothing that hides your shape. Choose soft, flowing fabrics 
        that skim your curves, and look for V-neck or sweetheart necklines to accentuate your bust. Structured blazers can also add a 
        polished look.</p>
      `,
      "Rectangle": `
        <p>Your shoulders, waist, and hips are relatively equal in width, making your body type a <strong>Rectangle</strong>.</p>
        <p>Add definition and curves with your clothing choices. Use belts to cinch at the waist and create the illusion of curves. 
        Peplum tops, ruffled skirts, and A-line dresses add volume to your silhouette. Layering with jackets or cardigans can help create 
        dimension. Avoid shapeless clothing and instead look for items with structure or draping that enhances your figure.</p>
      `,
    };
  
    // Display result
    const resultSection = document.getElementById('result');
    resultSection.innerHTML = `
      <h3>Your Body Type: ${bodyType}</h3>
      ${suggestions[bodyType]}
    `;
    resultSection.style.display = 'block'; // Show result section
  });
  