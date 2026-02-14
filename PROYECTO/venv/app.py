from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, mundo!'
    

if __name__ == '__main__':
    app.run(debug=True)
# ruta con parametro
@app.route(*/usuario/<nombre>'')
def  usuario(nombre):
    return f'Bienvenido estas en clase, { nombre}!'
# ruta con contacto
@app.route('*/contacto')
def  contacto():
    return '../template/vistas/contacto.html'


