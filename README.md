 # 🍕 Premium Pizza Shop
  A modern, responsive web application for ordering pizzas online with integrated payment gateway and cart management
  🌟 Features
  
  🛒 Shopping Cart
	•	Add to Cart - Easy one-click pizza ordering
	•	Remove Items - Delete button (×) for each cart item
	•	Real-time Total - Dynamic price calculation in Indian Rupees (₹)
	•	Smart UI Updates - Buttons disable/enable automatically
 
 💳 Payment Integration
	•	Razorpay Gateway - Secure payment processing
	•	Dynamic Amount - Calculates total cart value automatically
	•	Success Handling - Cart clears after successful payment
	•	Error Management - Proper payment failure handling
 
🎨 Modern Design
	•	Gradient Backgrounds - Beautiful purple-blue gradient
	•	Hover Animations - Cards lift and images zoom on hover
	•	Responsive Layout - Works on all device sizes
	•	Modern UI Components - Bootstrap 5 with custom styling
 
📱 User Experience
	•	Loading States - Spinner while fetching pizza data
	•	Error Handling - Graceful fallbacks and error management
	•	Image Fallbacks - Placeholder images for broken links
	•	Sticky Cart - Cart stays visible while scrolling
🚀 Live Demo
https://lakshay-pizza-app.netlify.app

📋 Prerequisites
	•	Modern web browser (Chrome, Firefox, Safari, Edge)
	•	Internet connection (for fetching pizza data and payment processing)
 
🛠️ Installation
	1.	Clone the repository
 git clone https://github.com/yourusername/pizza-shop.git
cd pizza-shop
  2.	Open in browser
  #Simply open index.html in your browser
  #Or use a local server:
  python -m http.server 8000
  #Then visit: http://localhost:8000

  📁 Project Structure
  pizza-shop/
├── index.html              # Main application file
├── README.md              # Project documentation
├── controllers/           # Original modular structure (optional)
│   └── product-controller.js
├── scripts/
│   └── services/
│       ├── productOperations.js
│       ├── api-client.js
│       └── payment.js
├── models/
│   └── product.js
└── utils/
    └── constant.js

  🔧 Configuration
  Payment Gateway Setup
	1.	Get Razorpay API Keys
	•	Sign up at Razorpay Dashboard
	•	Navigate to Settings → API Keys
	•	Copy your Key ID
  2.	Update Payment Configuration
  var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // Replace with your key
    "amount": "50000", // Amount in paise (₹500.00)
    "currency": "INR",
    // ... other options
};

Pizza Data Source
The application fetches pizza data from:
	•	Primary: https://raw.githubusercontent.com/lakshaysharma17/pizzajson/refs/heads/main/pizza.json
	•	Fallback: Multiple backup URLs for reliability
To use your own data source:
	1.	Update the URLS array in the script
	2.	Ensure your JSON follows the expected structure

 📊 API Structure
Expected JSON format:
{
  "Vegetarian": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "desc": "Classic pizza with tomato sauce and mozzarella",
      "price": "299",
      "assets": {
        "product_details_page": [
          {
            "url": "https://example.com/pizza-image.jpg"
          }
        ]
      }
    }
  ]
}

🎯 Usage
	1.	Browse Menu - View available pizzas with images and descriptions
	2.	Add to Cart - Click “Add to Cart” on desired pizzas
	3.	Manage Cart - Use the × button to remove items
	4.	Checkout - Click “Pay Now” when ready to purchase
	5.	Payment - Complete payment through Razorpay gateway
🔒 Security Features
	•	Test Mode - Uses Razorpay test keys (no real money charged)
	•	Input Validation - Prevents empty cart payments
	•	Error Handling - Secure error management
	•	HTTPS Ready - Compatible with secure hosting
🌐 Browser Support
	•	✅ Chrome 60+
	•	✅ Firefox 55+
	•	✅ Safari 12+
	•	✅ Edge 79+
📱 Mobile Responsive
	•	Optimized for mobile devices
	•	Touch-friendly interface
	•	Responsive grid layout
	•	Mobile-first design approach

 🔮 Future Enhancements
	•	User authentication system
	•	Order history tracking
	•	Multiple pizza categories (Non-veg, Vegan)
	•	Delivery tracking
	•	Customer reviews and ratings
	•	Discount codes and offers
	•	Admin panel for menu management

👨‍💻 Author
Your Name
	•	GitHub: (https://github.com/lakshaysharma17)
	•	LinkedIn: https://www.linkedin.com/in/lakshaysharma17/
 
🙏 Acknowledgments
	•	Bootstrap - For responsive UI components
	•	Razorpay - For payment gateway integration
	•	Pizza JSON API - For pizza data source
	•	Picsum Photos - For placeholder images

 🔗 Links
	•	https://lakshay-pizza-app.netlify.app
	•	https://razorpay.com/docs/#home-payments

