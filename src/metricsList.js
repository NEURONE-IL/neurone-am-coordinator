const metrics=[
    {
        name: "Total Cover",
        alias: "totalcover",
        description: "corresponde a la cantidad total de documentos diferentes visitados por el participante.",
        dataType: "Integer",
    },
    {
        name: "Relevant Coverage",
        alias: "bmrelevant",
        description: " corresponde a la cantidad de documentos relevantes recuperados por el participante.",
        dataType: "Integer",
    },
    {
        name:"Precision",
        alias:"precision",
        description: "corresponde a la relación existente entre el número de documentos relevantes encontrados (bmrelevant)  y el universo total de documentos diferentes visitados (totalcover).",
        dataType: "Integer"
    },
    {
        name: "Recall",
        alias: "recall",
        description:"corresponde a la relación existente entre el número de documentos relevantes encontrados  (bmrelevant) y el universo total de documentos relevantes.",
        dataType: "Integer"
    },
    {
        name:"F-Score",
        alias:"f1",
        description:"Media armónica entre Precision y Recall",
        dataType: "Integer"
    },
    {
        name:"Useful Coverage",
        alias: "usfcover",
        description:" corresponde a la cantidad de documentos diferentes visitados por un periodo mayor a una determinada cantidad de segundos.",
        dataType:"Integer"
    },
    {
        name:"Number of Queries",
        alias:"numqueries",
        description:"corresponde a la cantidad de consultas efectuadas por cada participante.",
        dataType:"Integer"
    },
    {
        name: "Coverage Effectiveness",
        alias:"ceffectiveness",
        description:"corresponde a la relación existente entre la cantidad de documentos visitados en un tiempo superior a 30 segundos (usfcover) y el universo total de documentos visitados (totalcover).",
        dataType:"Integer"
    },
    {
        name:"Query Effectiveness",
        alias: "qeffectiveness",
        description:"corresponde a la relación entre Coverage Effectiveness y el número de consultas realizadas (numqueries).",
        dataType:"Integer"
    },
    {
        name: "Active Bookmarks",
        alias: "activebm",
        description:"corresponde a la cantidad total de documentos recuperados por el participante, incluyendo aquellos relevantes y no relevantes.",
        dataType:"Integer"
    },
    {
        name: "Search Score",
        alias:"score",
        description:"corresponde a la relación entre cantidad de documentos marcados que son relevantes (bmrelevant) y la totalidad de los marcados por el usuario (activebm)",
        dataType:"Integer"
    },
    {
        name:"Total Page Stay",
        alias:"pagestay",
        description:": corresponde al tiempo total en que el participante permanece en documentos. Se mide en segundos",
        dataType: "Integer"
    },
    {
        name: "Query Entropy",
        alias:"entropy",
        description:"cantidad de información contenida en la consula",
        dataType:"Integer"
    },
    {
        name:"Writing Query Time",
        alias: "writingtime",
        description:"tiempo total empleado por el participante en el proceso de escritura de todas las consultas efectuadas por este. Se encuentra en segundos.",
        dataType:"Integer"
    },
    {
        name:"Total Query Modification",
        alias:"modquery",
        description:"cantidad de modificaciones realizadas a las consultas en el proceso de escritura en la etapa de búsqueda."
    }
]

export default metrics