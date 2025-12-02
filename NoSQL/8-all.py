#!/usr/bin/env python3
"""List all documents in a MongoDB collection."""

if __name__ == "__main__":
    def list_all(mongo_collection):
        """List all documents in a MongoDB collection."""
        for m in mongo_collection.find():
            if not mongo_collection:
                return []
            else:
                print(m)
