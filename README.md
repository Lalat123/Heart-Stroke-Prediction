# Heart-Stroke-Prediction
A heart disease risk prediction web application built with Streamlit and a K-Nearest Neighbors (KNN) model.

🫀 Heart Disease Prediction Web App
This repository contains a complete end-to-end Machine Learning project that predicts the risk of heart disease based on clinical health metrics. The project includes a trained K-Nearest Neighbors (KNN) model and an interactive web interface built with Streamlit.

🚀 Live Demo
http://localhost:8502/#heart-stroke-prediction-by-lalat
View the Live App

🛠️ Tech Stack
Language: Python 3.10

Machine Learning: Scikit-Learn (KNN Classifier, StandardScaler)

Web Framework: Streamlit

Data Manipulation: Pandas, NumPy

Model Persistence: Joblib/Pickle

📊 Features & Data Preprocessing
The model was trained on a heart disease dataset with 15 features. To ensure high accuracy, the following preprocessing steps were implemented:

Feature Scaling: Used StandardScaler to normalize numerical values (Age, Cholesterol, etc.), which is critical for distance-based algorithms like KNN.

One-Hot Encoding: Categorical variables (Sex, Chest Pain Type, ST Slope) were encoded into binary features to be processed by the model.

Input Pipeline: The web app dynamically aligns user input with the columns.pkl structure to prevent feature mismatch errors.
