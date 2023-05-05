import pandas as pd

# Get sign-up information from HTML form
name = "John Doe"
email = "john.doe@example.com"
password = "mypassword123"

# Create a new data frame with sign-up information
signup_df = pd.DataFrame({
    "Name": [name],
    "Email": [email],
    "Password": [password]
})

# Save data frame to CSV file
signup_df.to_csv("signup_data.csv", index=False)
