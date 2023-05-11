from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route('/process-signup', methods=['POST'])
def process_signup():
    # Get the form data from the request
    data = request.get_json()

    # Create a pandas DataFrame
    df = pd.DataFrame([data])

    # Save the DataFrame to a CSV file
    df.to_csv('signup_data.csv', index=False)

    return 'Success'

if __name__ == '__main__':
    app.run()
