from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route("/path/to/python/script.py", methods=["POST"])
def save_signup_data():
    data = request.json  # Get the data from the request body
    df = pd.DataFrame(data)  # Create a pandas DataFrame
    
    # Save the data to a CSV file
    df.to_csv("signup_data.csv", mode="a", header=False, index=False)
    
    return "Data saved successfully!"

if __name__ == "__main__":
    app.run()
