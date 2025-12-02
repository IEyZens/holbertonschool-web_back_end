def list_all(mongo_collection):
    for i in mongo_collection.find():
        print(i)
