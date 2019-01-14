#Python flask server file used to serve the website and related TV shows as an API
from flask import Flask,render_template
from rec_using_knn import nearest_neighbours
from flask import request
from flask_cors import CORS
import json
#Create instance of Flask App
app = Flask(__name__, static_url_path='/static')
CORS(app)

#Define Route
@app.route("/")

#Content
def home():
    return render_template("index.html")

#Define route to get related TV shows from KNN algorithm
@app.route('/relatedshows')
def index():
   showid = int(float(request.args.get('showid')))
   #Get related TV Shows as a list
   relatedshowidslist = nearest_neighbours(showid)
   #Convert list to JSON array so that it can be served as API response
   relatedshowids_map = []
   for x in relatedshowidslist:
      relatedshowids_map.append({'id': int(x)})
   relatedshowids_json = json.dumps({"related_show_ids":relatedshowids_map})
   return relatedshowids_json

#Running and Controlling the script
if (__name__ =="__main__"):
    app.run(debug=True)
