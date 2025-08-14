#!/usr/bin/env python3
"""
Module for inserting a document into a MongoDB collection.

This module defines the insert_school function, which adds a new document
to a MongoDB collection using named arguments (**kwargs) and returns the
ID of the inserted document.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document into a MongoDB collection.

    Args:
        mongo_collection (pymongo.collection.Collection): The MongoDB
        collection
            where the document will be inserted.
        **kwargs: The fields and values for the document to be inserted.

    Returns:
        ObjectId: The ID (_id) of the inserted document.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
