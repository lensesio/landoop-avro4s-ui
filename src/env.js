var Example = {
    scalaSrc: 'case class Logging(hostname: String,\n' +
    '                  timestamp: Long,\n' +
    '                  applicationName: String,\n' +
    '                  environment: String)',

    avroSrc: '{\n' +
    '  "type": "record",\n' +
    '  "name": "Evolution",\n' +
    '  "namespace": "com.landoop",\n' +
    '  "fields": [\n' +
    '    {\n' +
    '        "name": "name",\n' +
    '        "type": "string"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "number1",\n' +
    '        "type": "int"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "number2",\n' +
    '        "type": "float"\n' +
    '    },\n' +
    '    {\n' +
    '        "name": "text",\n' +
    '        "type": [\n' +
    '            "string",\n' +
    '            "null"\n' +
    '        ],\n' +
    '        "default": ""\n' +
    '    }\n' +
    '  ]\n' +
    '}',

    jsonSrc: '{\n' +
    '   "image" : {\n' +
    '      "src" : "images/img.png",\n' +
    '      "height" : 250,\n' +
    '      "width" : 250, \n' +
    '      "alignment" : "center"\n' +
    '   },\n' +
    '   "data" : {\n' +
    '      "size" : 36,\n' +
    '      "display" : true\n' +
    '   }\n' +
    '}'
};

var avro4sEndpoint = 'https://platform.landoop.com/avro4s/avro4s';