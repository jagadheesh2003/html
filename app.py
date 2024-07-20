import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
app = Flask(__name__)
model = pickle.load(open('linear','rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model. predict(final_features)
    val=int(prediction[0])

    #output  =  round(prediction[0],3)


    return render_template('index.html',prediction_text='Estimated car price in Euro{}'.format(val))


#@app.route('/predict_api',methods=['POST])
# def predict_api():
#     '''
#      For direct API calls trought request
#      '''
#      data = request.get_json(force=true)
#      prediction = model.predict([np.array(list(data.values()))])



#      output = prediction[0]
#      return jsonify(output)

if __name__ == "__main__":
   app.run(debug=True) 