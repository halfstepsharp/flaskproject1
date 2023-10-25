import time
import json
import random

jsonfilepath='static/data.json'

def updatejson():
    # Read JSON data from a file
    with open(jsonfilepath, 'r') as file:
        existingdata = json.load(file)
        print(existingdata, flush=True)
        last_row = existingdata[-1]
        prevxlabel = last_row['xlabel']

    # Create new data to be appended
    Distdata = random.randint(10,35)
    Signaldata = 2*(1+random.random())
    if Distdata> 18:
        Q1data = True
    else: 
        Q1data = False
    if Distdata < 24: 
        Q2data = False
    else:
        Q2data = True
    xlabeldata = prevxlabel +1 
    Tempdata = random.randint(25,35)

    # Append new data to the existing data
    new_data = {'xlabel': xlabeldata,
                'distance_data': Distdata,
                'signal_data': Signaldata,
                "q1data": Q1data,
                "q2data": Q2data,
                "temp": Tempdata}
    existingdata.append(new_data)

    # Write the updated data back to the file
    with open(jsonfilepath, 'w') as file:
        json.dump(existingdata, file, indent=4)

def main():
    while True:
        updatejson()
        time.sleep(1)