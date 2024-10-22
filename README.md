# techie-tales
Full Stack (MERN) Blogging web application

![image](https://github.com/user-attachments/assets/9febceab-aab1-4b1a-9d62-2544d1558e79)

![image](https://github.com/user-attachments/assets/0ea8af04-2179-4d38-96db-4670fe99a268)


Local Setup:

```bash
# Install dependencies in client and fill .env
cd client
npm install
# .env
REACT_APP_BASE_URL="http://localhost:5000/api"
REACT_APP_ASSETS_URL="http://localhost:5000"

# Install dependencies in server and fill .env
cd server
npm install
# for the server .env create a cluster in MongoDB Atlas and connect with MongoDB Driver
MONGO_URI = mongodb+srv://<db_username>:<db_password>@<cluster_url_prefix>mongodb.net/<cluster_name>  # replace all <>'s with your configuration
PORT = 5000
JWT_SECRET = # any suitable JWT secret is fine

run both client and server in separate terminals
cd client
npm start

cd server
npm run dev
