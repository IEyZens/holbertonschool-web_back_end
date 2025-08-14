#!/usr/bin/env python3
"""
Module providing a function to list all documents in a MongoDB collection.
"""


def list_all(mongo_collection):
    """
    List all documents in a collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        list: A list of all documents in the collection, or an empty list if 
        none.
    """
    return list(mongo_collection.find())
