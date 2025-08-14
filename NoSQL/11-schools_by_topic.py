#!/usr/bin/env python3
"""
Module to retrieve schools by a specific topic from a MongoDB collection.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for.

    Returns:
        pymongo.cursor.Cursor: A cursor object containing the matching school documents.
    """
    return mongo_collection.find(
        {
            "topics": topic
        }
    )
