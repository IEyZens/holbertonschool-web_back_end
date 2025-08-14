#!/usr/bin/env python3
"""
Script to provide statistics about Nginx logs stored in a MongoDB collection.
"""

from pymongo import MongoClient

if __name__ == "__main__":
    """
    Connects to the MongoDB server, retrieves the Nginx logs from the 'logs'
    database,
    and displays statistics about the HTTP methods and status checks.
    """
    myclient = MongoClient("mongodb://127.0.0.1:27017")
    nginx_collection = myclient.logs.nginx

    total_logs = nginx_collection.count_documents({})

    GET = nginx_collection.count_documents({"method": "GET"})
    POST = nginx_collection.count_documents({"method": "POST"})
    PUT = nginx_collection.count_documents({"method": "PUT"})
    PATCH = nginx_collection.count_documents({"method": "PATCH"})
    DELETE = nginx_collection.count_documents({"method": "DELETE"})

    status_check = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )

    print(total_logs, "logs")

    print("Methods:")

    print("\tmethod GET:", GET)
    print("\tmethod POST:", POST)
    print("\tmethod PUT:", PUT)
    print("\tmethod PATCH:", PATCH)
    print("\tmethod DELETE:", DELETE)
    print(status_check, "status check")
