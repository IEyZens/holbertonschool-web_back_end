#!/usr/bin/env python3
"""List all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """List all documents in a MongoDB collection."""
    collection = mongo_collection.find()
    for m in collection:
        print(m)


if __name__ == "__main__":
    list_all()
