#!/usr/bin/python3
"""Module to insert_school y return new_school_id"""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in the collection"""
    new_school_id = mongo_collection.insert_one(kwargs).inserted_id
    return new_school_id
