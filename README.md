AI PRODUCT RECOMMENDER

 🛒 AI-Powered Product Recommendation Engine

This repository contains my submission for the **i95dev AI Engineering Intern take-home assignment**. It is a full-stack eCommerce product recommendation system powered by TogetherAI's mistralai/Mixtral-8x7B-Instruct-v0.1, built using Flask (backend) and React (frontend).

🔗 Live Demo   
(https://ai-product-recommend-eplp.vercel.app/)

Video demonstration
(https://drive.google.com/file/d/15lM5tHWKMhfO6TUv1u4HKgrUEfXCjRnc/view?usp=sharing)

📂 **Repository URL**  
[https://github.com/sahajy/ai-product-recommend](https://github.com/sahajy/ai-product-recommend)

---

## 📌 Overview

The system generates personalized product recommendations based on:
- User preferences (e.g., category, price range)
- Browsing history (products user clicks on)

The backend builds a custom prompt and sends it to the TogetherAI API to generate intelligent, explanation-based recommendations.

---

## 🛠️ Tech Stack

### Backend
- Flask
- Python 3.9+
- mistralai/Mixtral-8x7B-Instruct-v0.1
- REST API
- Together AI

### Frontend
- React.js
- Axios
- React Hooks
- CSS

---

## 📁 Project Structure

### Backend (`/backend`)
```

backend/
├── app.py                 # Main Flask server
├── .env                   # API Key config
├── requirements.txt       # Python dependencies
├── data/
│   └── products.json      # Product catalog
└── services/
├── llm\_service.py        # TogetherAI API logic
└── product\_service.py    # Product loading/filtering

```

### Frontend (`/frontend`)
```

frontend/
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Catalog.js
│   │   ├── UserPreferences.js
│   │   ├── BrowsingHistory.js
│   │   └── Recommendations.js
│   ├── services/api.js
│   └── styles/App.css
└── package.json

````

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sahajy/ai-product-recommend.git
cd ai-product-recommend
````

---

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate    macOS/Linux: source venv/bin/activate 
pip install -r requirements.txt
```

#### 🔑 Add your OpenAI API Key

Edit `config.py`:

```python
TOGETHER_API_KEY = "your-api-key"
```

Start the Flask server:

```bash
python app.py
```

> Server runs on: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

> Frontend runs on: `http://localhost:3000`

---

## 💡 How It Works

1. User fills in preferences
2. Clicks products to simulate browsing history
3. Frontend sends data to Flask backend
4. Backend filters catalog, builds prompt, and sends to TogetherAI
5. LLM returns personalized product recommendations with reasoning
6. Frontend displays results

---

## 🧠 Prompt Engineering

Prompt is dynamically constructed using:

* User preferences (category, price range, tags)
* Browsing history (clicked product names & categories)
* A filtered product catalog (to stay within token limits)

Example prompt (simplified):

```
The user is interested in budget electronics and clicked on headphones and speakers. Recommend 3 relevant products from the list below and explain why.
```

---

## 🧪 Challenges Faced

* **Token limits**: Managed by pre-filtering products before sending to LLM.
* **State sync**: Ensured React states were correctly updated between history, preferences, and recommendations.
* **Prompt tuning**: Iterated to balance length and quality of recommendations.

---

## ⏳ Time Spent

| Task                         | Time Spent     |
| ---------------------------- | -------------- |
| Backend + OpenAI integration |  ~6 hrs      |
| Frontend UI & state handling |  ~4 hrs        |
| Testing & fine-tuning        |  ~2 hrs        |
| **Total**                    | ~12 hrs      |

---

## 📦 Future Improvements 

* Add login/auth and user profile persistence
* Cache repeated OpenAI queries
* Add product filtering/sorting options
* Test multiple prompt strategies (A/B testing)

---

## ✅ Submission Checklist

*  Functional Flask backend with OpenAI integration
*  React frontend with catalog, preference form, history, and recommendations
*  Sample dataset from `products.json`
*  Clean and documented code
*  This `README.md` file

---

## 📬 Submission

* **GitHub Repo:** [https://github.com/sahajy/ai-product-recommend](https://github.com/sahajy/ai-product-recommend)

---

## 🙏 Acknowledgments

Thanks to **i95dev** for the opportunity to work on this engaging challenge. This assignment helped enhance my skills in LLM prompting, API design, and full-stack integration.

```

---
