# PredictiveAnalysis
# 🎓 Student Performance Predictor

A machine learning powered web app that predicts a student's academic performance based on key factors like study hours, attendance, and past scores — built with **React** on the frontend and a **Random Forest** model on the backend.

## 📖 Introduction

Teachers and students often only find out about poor performance *after* the exam is over — by then it's too late to intervene. This project brings a simple, interactive way to estimate a student's expected performance in advance, using real academic and behavioral data.

## ❓ Problem It Solves

Identifying at-risk students early is hard without data-driven tools. Manually analyzing multiple factors (study habits, attendance, sleep, past scores) to judge how a student might perform is time-consuming and inconsistent.

## ✅ Solution

This app solves that by:
- Taking a few simple inputs from the user (study hours, attendance, previous scores, etc.)
- Running them through a trained **Random Forest** model
- Instantly predicting the expected performance/score
- Presenting the result in a clean, easy-to-understand **React** interface

## ✨ Features

- 📝 **Simple Input Form** – Enter student details like study hours, attendance, sleep, past scores.
- 🌲 **Random Forest Prediction** – Trained ML model gives accurate, data-backed predictions.
- ⚡ **Instant Results** – Real-time prediction without page reload (React + API).
- 📊 **Clean Visualization** – Predicted score/result shown clearly on the dashboard.
- 💻 **Responsive UI** – Works across desktop and mobile screens.

## 🧭 Navigation / How to Use

1. Open the app in your browser.
2. Fill in the student details form (study hours, attendance, previous scores, etc.).
3. Click **Predict**.
4. View the predicted performance result instantly on screen.
5. (Optional) Re-enter different values to compare predictions.

## 🛠️ Tech Stack

| Layer         | Technology                     |
|---------------|---------------------------------|
| Frontend      | React.js, CSS / Tailwind        |
| Backend       | Python (Flask/FastAPI)          |
| ML Model      | Scikit-learn — Random Forest    |
| Data Handling | Pandas, NumPy                   |

> ⚠️ Update backend framework above if it's not Flask/FastAPI.

## 📋 Requirements

- Node.js & npm (for React frontend)
- Python 3.x (for backend/model)
- pip packages: `scikit-learn`, `pandas`, `numpy`, `flask` (or `fastapi`)

## 🚀 Installation / Run Locally

**Clone the repo:**
```bash
git clone https://github.com/Nanc199/Student-Performance-Predictor.git
cd Student-Performance-Predictor
```

**Frontend:**
```bash
cd client
npm install
npm start
```

**Backend:**
```bash
cd server
pip install -r requirements.txt
python app.py
```

## 📁 Project Structure

​```
Student-Performance-Predictor/
├── client/              # React frontend
├── server/              # Backend + ML model
│   ├── app.py            # API endpoints
│   └── model.pkl          # Trained Random Forest model
├── notebook/             # Model training notebook (EDA + training)
├── data/
│   └── student_data.csv
├── models/
│   ├── full_model.pkl
│   ├── habit_model.pkl
│   ├── model_baseline.pkl
│   └── student_model.pkl
└── requirements.txt
​```

## 🎬 How It Works (Demo)
