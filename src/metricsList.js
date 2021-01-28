const metrics = [
    {
        "name": "totalcover",
        "alias": "Total Coverage",
        "descriptions": {
            "en": "Total number of different documents visited by the participant",
            "es": "Número total de documentos diferentes visitados por el participante"
        },
        "dataType": "Integer",
        "max": 12,
        "interval": 1
    },
    {
        "name": "bmrelevant",
        "alias": "Relevant Coverage",
        "descriptions": {
            "en": "Number of relevant documents retrieved by the participant",
            "es": "Número de documentos relevantes recuperados por el participante"
        },
        "dataType": "Integer",
        "max": 3,
        "interval": 1
    },
    {
        "name": "precision",
        "alias": "Precision",
        "descriptions": {
            "en": "Relationship between the number of relevant documents found and the total universe of different documents visited",
            "es": "Relación entre el número de documentos relevantes encontrados y el universo total de documentos diferentes visitados"
        },
        "dataType": "Decimal",
        "max": 1,
        "interval": 0.1
    },
    {
        "name": "recall",
        "alias": "Recall",
        "descriptions": {
            "en": "Relationship between the number of relevant documents found and the total universe of relevant documents",
            "es": "Relación entre el número de documentos relevantes encontrados y el universo total de documentos relevantes"
        },
        "dataType": "Decimal",
        "max": 1,
        "interval": 0.1
    },
    {
        "name": "f1",
        "alias": "F-Score",
        "descriptions": { 
            "en": "Harmonic mean between Precision and Recall metrics",
            "es": "Media armónica entre las métricas Precision y Recall"
        },
        "dataType": "Decimal",
        "max": 1,
        "interval": 0.1
    },
    {
        "name": "usfcover",
        "alias": "Useful Coverage",
        "descriptions": { 
            "en": "Number of different documents visited for a period greater than a certain number of seconds, by default thirty",
            "es": "Número de documentos diferentes visitados durante un período superior a un cierto número de segundos, por defecto treinta"
        },
        "dataType": "Integer",
        "max": 12,
        "interval": 1
    },
    {
        "name": "numqueries",
        "alias": "Number of Queries",
        "descriptions": {
            "en": "Number of queries made by each participant",
            "es": "Número de consultas realizadas por cada participante"
        },
        "dataType": "Integer",
        "max": null,
        "interval": 1
    },
    {
        "name": "ceffectiveness",
        "alias": "Coverage Effectiveness",
        "descriptions": {
            "en": "Relationship between the number of documents visited in a time greater than thirty seconds and the total universe of documents visited",
            "es": "Relación entre el número de documentos visitados en un tiempo superior a treinta segundos y el universo total de documentos visitados"
        },
        "dataType": "Decimal",
        "max": 1,
        "interval": 0.1
    },
    {
        "name": "qeffectiveness",
        "alias": "Query Effectiveness ",
        "descriptions": { 
            "en": "Relationship between Coverage Effectiveness and Number of Queries. This allows to measure the efficiency associated with the search process followed by the user",
            "es": "Relación entre Coverage Effectiveness y Number of Queries. Esto permite medir la eficiencia asociada al proceso de búsqueda seguido por el usuario"
        },
        "dataType": "Decimal",
        "max": 1,
        "interval": 0.1
    },
    {
        "name": "activebm",
        "alias": "Active Bookmarks",
        "descriptions": { 
            "en": "Total number of documents retrieved by the participant, including those relevant and not relevant",
            "es": "Número total de documentos recuperados por el participante, incluidos los relevantes y no relevantes" 
        },
        "dataType": "Integer",
        "max": 12,
        "interval": 1
    },
    {
        "name": "score",
        "alias": "Search Score",
        "descriptions": { 
            "en": "Relationship between the number of documents marked that are relevant and all those marked by the user. On a scale of 0 to 5, with a score of 3.5 the participant is approved",
            "es": "Relación entre el número de documentos marcados que son relevantes y todos los marcados por el usuario. En una escala de 0 a 5, con una puntuación de 3,5 se aprueba al participante"
        },
        "dataType": "Decimal",
        "max": 5,
        "interval": 0.1
    },
    {
        "name": "pagestay",
        "alias": "Total Page Stay",
        "descriptions": {
            "en": "Total time in seconds that the participant stays in documents",
            "es": "Tiempo total en segundos que el participante permanece en documentos"
        },
        "dataType": "Decimal",
        "max": null,
        "interval": 0.1
    },
    {
        "name": "entropy",
        "alias": "Query Entropy",
        "descriptions": {
            "en": "Measures the frequency of each word in the query in such way that those that are repeated the least provide more information",
            "es": "Mide la frecuencia de cada una de las palabras de la consulta de tal forma que aquellas que menos se repiten aportan más información"
        },
        "dataType": "Decimal",
        "max": null,
        "interval": 0.1
    },
    {
        "name": "writingtime",
        "alias": "Writing Time Query",
        "descriptions": {
            "en": "Total time in seconds used by the participant in the writing process of all the queries made",
            "es": "Tiempo total en segundos utilizado por el participante en el proceso de escritura de todas las consultas realizadas"
        },
        "dataType": "Integer",
        "max": null,
        "interval": 1
    },
    {
        "name": "modquery",
        "alias": "Total Query Modification",
        "descriptions": { 
            "en": "Number of modifications made to queries in the writing process in the search stage",
            "es": "Número de modificaciones realizadas a las consultas en el proceso de escritura en la etapa de búsqueda"
		},
        "dataType": "Integer",
        "max": null,
        "interval": 1
    }
]

export default metrics;