from flask import Flask,jsonify,request
import requests
import openai
app=Flask(__name__)

openai.api_key="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"
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]
@app.route('/dataset',methods=['POST'])
def datasetcreator():
    data=request.get_json()
    dx={
        "topic": data.get("topic"),
        's': data.get("parameter"),
        "r":data.get("rows")
    }

    topic = dx["topic"][0]
    r = dx["r"][0]
    s = "".join(dx["s"])
    
    output_format = {
            "message": "Success",
            "data": {
                "info": [
                    {
                        "id": "unique_id",
                        "parameters_data": {
                            "column_name": "data",
                        }
                    }
                ]
            }
        }

    prompt = f"""
    Generate a dataset for the topic/table name '''{dx['topic']}'''

    generate the for the following columns  '''{dx['s']}'''
    you must first check the average/most common values if its integer or float in which usually all the column data lies for each column and the accordingly generate the values
    total rows required '''{dx['r']}'''

    don't add any extra column other then specified columns and also columns should be in the same order as mentioned '''{dx['s']}'''
    data must be in appropriate datatype
    also generate unique_id for each row
    Provide them below given output format
    {output_format}
    """
    response = get_completion(prompt)
    print(response)
    return response

if __name__=="__main__":
    app.run(debug=True)

