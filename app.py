from flask import Flask, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from sklearn.ensemble import RandomForestClassifier
import spacy

app = Flask(_name_)

# Initialize spaCy and ChatterBot
nlp = spacy.load('en_core_web_sm')
chatbot = ChatBot('MaintenanceBot')
trainer = ListTrainer(chatbot)

# Train ChatterBot with basic responses
trainer.train([
    "Hello",
    "Hi! How can I assist you today?",
    "Check equipment",
    "Let me check the latest sensor data...",
    "Goodbye",
    "Goodbye! Stay safe."
])

# Placeholder for a trained predictive model (for example purposes)
# Replace with real training code as shown previously
model = RandomForestClassifier()
model.fit([[20, 30, 50]], [0])  # Replace with actual training data

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    doc = nlp(user_input.lower())

    # Simple logic to decide the response
    if "check" in [token.lemma_ for token in doc]:
        # Placeholder for real sensor data input
        sensor_input = [22, 34, 57]
        prediction = model.predict([sensor_input])
        reply = "Warning: Potential failure detected!" if prediction == 1 else "Equipment is functioning normally."
    else:
        reply = str(chatbot.get_response(user_input))

    return jsonify({'reply': reply})

if _name_ == '_main_':
    app.run(debug=True)
