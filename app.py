from flask import Flask, render_template, send_from_directory
from datetime import datetime
import os

app = Flask(__name__)

# Datas importantes
data_namoro = datetime(2022, 12, 24, 20, 10, 0)
data_noivado = datetime(2025, 1, 10, 10, 25, 0)

@app.route("/")
def index():
    pasta_fotos = os.path.join("static", "fotos")
    imagens = [f"/static/fotos/{img}" for img in os.listdir(pasta_fotos)
               if img.lower().endswith((".png", ".png", ".png"))]
    return render_template("index.html",
                           imagens=imagens,
                           data_namoro=data_namoro.strftime("%Y-%m-%dT%H:%M:%S"),
                           data_noivado=data_noivado.strftime("%Y-%m-%dT%H:%M:%S"))
if __name__ == "__main__":
    app.run(debug=True)
