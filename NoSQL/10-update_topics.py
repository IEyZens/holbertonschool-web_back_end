#!/usr/bin/env python3
"""10-update_topics.py
Update topics of a school document in a MongoDB collection.
"""

def update_topics(mongo_collection, name, topics):
    """Update the topics of a school document in a MongoDB collection."""
    documentUpdate = mongo_collection.update_many(name, topics)
    return documentUpdate.modified_count
