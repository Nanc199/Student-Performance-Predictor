# Student-Performance-Predictor
# 🎓 EduPredict AI — Student Performance Predictor

An intelligent web application that predicts a student's academic performance using a **Machine Learning (Random Forest)** model — backend built with **Node.js + Express**, and the prediction model trained using **Python (scikit-learn)**.

## 📖 Introduction

Teachers and students often only find out about poor performance *after* the exam is over — by then it's too late to intervene. EduPredict AI brings a simple, interactive way to estimate a student's expected performance in advance, using behavioral and academic data such as study time, attendance, and past failures.

## ❓ Problem It Solves

Identifying at-risk students early is hard without data-driven tools. Manually analyzing multiple factors (study habits, attendance, absences, internet access, etc.) to judge how a student might perform is time-consuming and inconsistent.

## ✅ Solution

EduPredict AI solves this by:
- Taking simple inputs from the user (weekly study time, absences, failures, internet access, academic history)
- Running them through a trained **Random Forest** model
- Instantly predicting the expected performance score (out of 20)
- Presenting the result in a clean, real-time dashboard with a projected outcome gauge

## ✨ Features

- 📝 **Simple Input Form** – Enter study time, absences, failures, and other behavioral factors.
- 🌲 **Random Forest Prediction Engine** – Trained ML model gives accurate, data-backed predictions.
- ⚡ **Live Prediction Engine** – Real-time result updates as inputs change.
- 📊 **Projected Outcome Gauge** – Visual score display (out of 20) with qualitative feedback.
- 🎯 **84.5% Detection Accuracy** – Reliable performance forecasting.
- 💻 **Clean, Modern Dark-Themed UI** – Simple and distraction-free interface.

## 🧭 Navigation / How to Use

1. Open the app in your browser.
2. On the landing page, click **"Analyze Performance"** or **"Launch App"**.
3. In the **Live Prediction Engine**, fill in:
   - Weekly study time
   - Number of absences
   - Number of failures
   - Home internet access (yes/no)
   - Academic progress evidence
4. View the **Projected Outcome** (score out of 20) update in real time.
5. Click **"Run Prediction Analysis"** for the final result.

## 🛠️ Tech Stack

| Layer            | Technology                          |
|-------------------|---------------------------------------|
| Backend Server    | Node.js, Express.js                  |
| Frontend          | HTML, CSS, JavaScript                |
| ML Model Training | Python, scikit-learn (Random Forest) |
| Data Handling     | Pandas, NumPy                        |
| Model Analysis    | Matplotlib, Seaborn, Jupyter Notebook|
| Model Persistence | Joblib (.pkl files)                  |

## 📚 Libraries / Dependencies Used

**Backend (Node.js — from `package.json`):**
express
cors


**Model Training (Python — from `requirements.txt`):**
pandas
numpy
matplotlib
seaborn
scikit-learn
jupyter
joblib


## 📋 Requirements

- **Node.js & npm** – to run the Express server → [Download here](https://nodejs.org/)
- **Python 3.x** – only needed if you want to retrain the model → [Download here](https://www.python.org/)

## 🚀 How to Run This Project (Step-by-Step)

### 1️⃣ Clone the repository
git clone https://github.com/Nanc199/Student-Performance-Predictor.git
cd Student-Performance-Predictor/PredictiveAnalysis-main


### 2️⃣ Install dependencies
npm install


### 3️⃣ Start the server
npm start

This runs `server.js` using Express, usually available at:
http://localhost:3000/

### 4️⃣ Open the app
Open the above URL in your browser to use the EduPredict AI interface


## 📁 Project Structure

​```
PredictiveAnalysis-main/
├── data/
│   └── student_data.csv       # Dataset used for training
├── models/                    # Trained Random Forest model files (.pkl)
├── notebooks/
│   └── exploration.ipynb      # Model training & analysis notebook
├── server.js                  # Express backend server
├── package.json               # Node.js dependencies
├── requirements.txt           # Python dependencies (for model training)
└── README.md
​```


## 🎥 Demo
<img width="610" height="435" alt="Screenshot 2026-08-25 225448 (1)" src="https://github.com/user-attachments/assets/b6b3957d-19b9-447e-8f20-f04190d424dd" />
<img width="598" height="271" alt="Screenshot 2026-08-25 225457" src="https://github.com/user-attachments/assets/971f115b-dfbb-440f-9cab-cd13499cfed9" />
<img width="527" height="335" alt="Screenshot 2026-08-25 225507" src="https://github.com/user-attachments/assets/abc60e7f-49a7-4ffc-96ad-36fe6de5eca2" />



