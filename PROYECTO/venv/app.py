from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, mundo!'

# Ruta con parámetro
@app.route('/usuario/<nombre>')
def usuario(nombre):
    return f'Hola, {nombre}!'

# Ruta con contacto
@app.route('/contacto')
def contacto():
    return '../template/vistas/contacto.html'

if __name__ == '__main__':
    app.run(debug=True)
