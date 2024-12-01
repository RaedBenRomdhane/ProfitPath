from flask import Flask, request, jsonify , send_from_directory
from flask_cors import CORS
import json
from DBM import *
app = Flask(__name__)
CORS(app)

#user tests
@app.route('/user/addUser',methods=['POST'])
def fAddUser():
    msg=User.addUser(request.json)
    return jsonify({'msg': msg}), 200

@app.route('/user/userConnect',methods=['GET'])
def fUserConnect():
    d=dict(request.json)
    test=User.userConnect(d['password'],d['email'])
    return jsonify({'userExist':test}), 200

@app.route('/user/getUser',methods=['GET'])
def fGetUser():
    d=dict(request.json)
    if User.userConnect(d['password'],d['email']):
        userD=User.getUser(d['email'])
        return jsonify({'msg':'connection succesful',"userData":json.loads(userD)}), 200
    else:
        return jsonify({'msg':'Invalid email or password',"userData":None}), 401


#transactions tests
@app.route('/transactions/addTransaction',methods=['POST'])
def fAddTransaction():
    req=dict(request.json)
    d1=req['auth']
    d2=req['transaction']
    if User.userConnect(d1['password'],d1['email']):
        d2['userID']=User.getUserID(d1['email'])
        msg=Transactions.addTransactions(d2)
        return jsonify({'msg':msg}), 201
    else:
        return jsonify({'msg':'unauthorised action'}), 401

@app.route('/transactions/getTransactions',methods=['GET'])
def fGetTransactions():
    req=dict(request.json)
    d1=req['auth']
    print(d1)
    t=req['type']
    print(t)
    if User.userConnect(d1['password'],d1['email']):
        print("connection succesful")
        userID=User.getUserID(d1['email'])
        print(userID)
        trans=Transactions.getTransactions(userID,t)
        return jsonify({'msg':'auth succesful',"transactions":json.loads(trans)}), 200
    else:
        return jsonify({'msg':'unauthorised access',"transactions":None}), 401

#savings tests
@app.route('/savings/addSavings',methods=['POST'])
def fAddSavings():
    req=dict(request.json)
    d1=req['auth']
    d2=req['savings']
    if User.userConnect(d1['password'],d1['email']):
        print("connection succesful")
        d2['userID']=User.getUserID(d1['email'])
        msg=Savings.addSavings(d2)
        return jsonify({'msg':msg}), 201
    else:
        return jsonify({'msg':'unauthorised action'}), 401

@app.route('/savings/getSavings',methods=['GET'])
def fGetSavings():
    req=dict(request.json)
    d1=req['auth']
    if User.userConnect(d1['password'],d1['email']):
        print("connection succesful")
        userID=User.getUserID(d1['email'])
        print(userID)
        savings=Savings.getSavings(userID)
        return jsonify({'msg':'auth succesful',"savings":json.loads(savings)}), 200
    else:
        return jsonify({'msg':'unauthorised access',"savings":None}), 401

#investments tests
@app.route('/investments/addInvestments',methods=['POST'])
def fAddInvestments():
    req=dict(request.json)
    d1=req['auth']
    d2=req['investments']
    if User.userConnect(d1['password'],d1['email']):
        print("connection succesful")
        d2['userID']=User.getUserID(d1['email'])
        msg=Investments.addInvestments(d2)
        return jsonify({'msg':msg}), 201
    else:
        return jsonify({'msg':'unauthorised action'}), 401

@app.route('/investments/getInvestments',methods=['GET'])
def fGetInvestments():
    req=dict(request.json)
    d1=req['auth']
    if User.userConnect(d1['password'],d1['email']):
        print("connection succesful")
        userID=User.getUserID(d1['email'])
        print(userID)
        investments=Investments.getInvestments(userID)
        return jsonify({'msg':'auth succesful',"investments":json.loads(investments)}), 200
    else:
        return jsonify({'msg':'unauthorised access',"investments":None}), 401


if __name__ == '__main__':
    app.run(debug=True,port=8001)