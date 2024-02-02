#!/usr/bin/env python3
"""Module log_stats que devuelve status actual"""

from pymongo import MongoClient

def log_stats(logs_collection):
    """Return the log_stats actual"""
    # Contar todos los documentos en la colección
    total_logs = logs_collection.count_documents({})
    
    # Métodos a verificar
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    # Inicializar un diccionario para almacenar el recuento de cada método
    method_counts = {method: logs_collection.count_documents({"method": method}) for method in methods}
    
    # Contar los registros de status check
    status_check_count = logs_collection.count_documents({"method": "GET", "path": "/status"})
    
    # Imprimir los resultados
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{status_check_count} status check")

if __name__ == "__main__":
    # Conectar a la base de datos y la colección
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs_collection = client.logs.nginx
    
    # Llamar a la función log_stats con la colección como argumento
    log_stats(logs_collection)

