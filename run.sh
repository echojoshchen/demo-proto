 protoc --js_out=import_style=commonjs,binary:gen/js *.proto;
 protoc --cpp_out=gen/cpp *.proto;
 protoc --python_out=gen/python *.proto;  