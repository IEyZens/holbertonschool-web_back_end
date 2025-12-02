#!/usr/bin/env python3
"""List all documents in a MongoDB collection"""

def list_all(mongo_collection):
    """List all documents in a MongoDB collection"""
    for m in mongo_collection.find():
        if not m:
            return []
        else:
            print(m)

if __name__ == "__main__":
    list_all()
