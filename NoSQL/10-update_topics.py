#!/usr/bin/env python3
"""
Module to update the topics of a school document in a MongoDB collection.
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates all topics of a school document based on the school's name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The name of the school to update.
        topics (list): A list of strings representing the topics covered in
        the school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
