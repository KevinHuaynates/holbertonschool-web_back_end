#!/usr/bin/env python3
"""Module Script that provides some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs_collection = client.logs.nginx

    total_logs = logs_collection.count_documents({})
    print(f"{total_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        method_count = logs_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    sstatus_check_filter = {"method": "GET", "path": "/status"}
    status_check_count = logs_collection.count_documents(status_check_filter)
    print(f"{status_check_count} status check")
