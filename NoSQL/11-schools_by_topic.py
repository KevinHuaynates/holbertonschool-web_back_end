#!/usr/bin/env python3
"""Module schools_by_topic que devuelve una lista con topicos especificos"""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools having a specific topic"""
    schools = mongo_collection.find({"topics": topic})
    return schools
