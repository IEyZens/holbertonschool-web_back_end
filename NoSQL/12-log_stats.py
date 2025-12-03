#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB."""

from pymongo import MongoClient

if __name__ == "__main__":
    """Main function to gather and print Nginx log stats."""
    myclient = MongoClient('mongodb://localhost:27017/')
    nginx_collection = myclient.logs.nginx

    total_logs = nginx_collection.count_documents({})

    GET = nginx_collection.count_documents({'method': 'GET'})
    POST = nginx_collection.count_documents({'method': 'POST'})
    PUT = nginx_collection.count_documents({'method': 'PUT'})
    PATCH = nginx_collection.count_documents({'method': 'PATCH'})
    DELETE = nginx_collection.count_documents({'method': 'DELETE'})

    status = nginx_collection.count_documents(
        {'method': 'GET'}, {'path=': '/status'}
    )

    print(total_logs, 'logs')

    print('Methods:')

    print('method GET:', GET)
    print('method POST:', POST)
    print('method PUT:', PUT)
    print('method PATCH:', PATCH)
    print('method DELETE:', DELETE)

    print(status, 'status check')
