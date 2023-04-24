from pymongo import MongoClient
import gridfs

def mongo_conn():
    try:
        conn = MongoClient(host='mongodb+srv://kandarpdevmurari:kandarp261002@se-project.txjgzvs.mongodb.net/test', port=27017)
        print('MongoDB connected', conn)
        return conn
    except Exception as e:
        print('Error in mongo connection:', e)

